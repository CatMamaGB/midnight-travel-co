import { FormData } from "@/types/form";
import { storeViaGoogleAppsScript } from "@/lib/googleAppsScript";
import { storeInGoogleSheets } from "@/lib/googleSheets";

export type ContactStorageProvider = "sheets" | "apps-script" | "none";

export interface ContactStorageResult {
  provider: ContactStorageProvider;
  success: boolean;
  skipped?: boolean;
  leadId?: string;
  message?: string;
}

function resolveStorageProvider(): ContactStorageProvider {
  const configuredProvider = process.env.CONTACT_STORAGE_PROVIDER?.trim().toLowerCase();

  if (configuredProvider === "sheets" || configuredProvider === "apps-script") {
    return configuredProvider;
  }

  if (configuredProvider === "none") {
    return "none";
  }

  if (process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
    return "sheets";
  }

  if (process.env.GOOGLE_APPS_SCRIPT_URL) {
    return "apps-script";
  }

  return "none";
}

export async function storeContactInquiry(
  formData: FormData
): Promise<ContactStorageResult> {
  const provider = resolveStorageProvider();

  if (provider === "none") {
    return {
      provider,
      success: false,
      skipped: true,
      message: "No Google storage provider configured. Submission will rely on email delivery only.",
    };
  }

  if (provider === "sheets") {
    const result = await storeInGoogleSheets(formData);

    return {
      provider: result.provider,
      success: true,
      leadId: result.record.leadId,
    };
  }

  const result = await storeViaGoogleAppsScript(formData);

  return {
    provider: result.provider,
    success: true,
    leadId: result.record.leadId,
  };
}
