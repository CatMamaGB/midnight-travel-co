import { google, sheets_v4 } from "googleapis";
import { FormData } from "@/types/form";
import {
  buildInquiryRecord,
  INQUIRY_HEADERS,
  InquiryRecord,
  inquiryRecordToRow,
} from "@/lib/inquiry";

const DEFAULT_SHEET_NAME = "Inquiries";
const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

function getRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getGoogleSheetsConfig() {
  return {
    spreadsheetId: getRequiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID"),
    sheetName: process.env.GOOGLE_SHEETS_SHEET_NAME?.trim() || DEFAULT_SHEET_NAME,
    clientEmail: getRequiredEnv("GOOGLE_CLIENT_EMAIL"),
    privateKey: getRequiredEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n"),
  };
}

function createSheetsClient(): {
  sheets: sheets_v4.Sheets;
  spreadsheetId: string;
  sheetName: string;
} {
  const config = getGoogleSheetsConfig();
  const auth = new google.auth.JWT({
    email: config.clientEmail,
    key: config.privateKey,
    scopes: [SHEETS_SCOPE],
  });

  return {
    sheets: google.sheets({
      version: "v4",
      auth,
    }),
    spreadsheetId: config.spreadsheetId,
    sheetName: config.sheetName,
  };
}

async function ensureSheetHeaders(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetName: string
) {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!1:1`,
    });

    const existingHeaders = response.data.values?.[0] ?? [];

    if (existingHeaders.length > 0) {
      return;
    }

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!1:1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [Array.from(INQUIRY_HEADERS)],
      },
    });
  } catch (error) {
    throw new Error(
      `Unable to access sheet tab "${sheetName}". Create that tab in your spreadsheet or update GOOGLE_SHEETS_SHEET_NAME. ${error instanceof Error ? error.message : ""}`.trim()
    );
  }
}

export async function storeInGoogleSheets(formData: FormData): Promise<{
  provider: "sheets";
  success: true;
  record: InquiryRecord;
}> {
  const { sheets, spreadsheetId, sheetName } = createSheetsClient();
  const record = buildInquiryRecord(formData);

  await ensureSheetHeaders(sheets, spreadsheetId, sheetName);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:Z`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [inquiryRecordToRow(record)],
    },
  });

  return {
    provider: "sheets",
    success: true,
    record,
  };
}
