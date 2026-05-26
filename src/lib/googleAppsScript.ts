import { FormData } from "@/types/form";
import { buildInquiryRecord, InquiryRecord } from "@/lib/inquiry";

function getAppsScriptUrl() {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL?.trim();

  if (!url) {
    throw new Error("Missing required environment variable: GOOGLE_APPS_SCRIPT_URL");
  }

  return url;
}

export async function storeViaGoogleAppsScript(formData: FormData): Promise<{
  provider: "apps-script";
  success: true;
  record: InquiryRecord;
}> {
  const url = getAppsScriptUrl();
  const record = buildInquiryRecord(formData);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret: process.env.GOOGLE_APPS_SCRIPT_SECRET || "",
      record,
    }),
  });

  if (!response.ok) {
    throw new Error(`Apps Script storage failed with status ${response.status}`);
  }

  return {
    provider: "apps-script",
    success: true,
    record,
  };
}
