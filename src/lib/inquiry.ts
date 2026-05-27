import { randomUUID } from "crypto";
import { FormData } from "@/types/form";

export const INQUIRY_HEADERS = [
  "Submitted At",
  "Lead ID",
  "Source",
  "Landing Page",
  "UTM Source",
  "UTM Medium",
  "UTM Campaign",
  "Status",
  "First Name",
  "Last Name",
  "Full Name",
  "Email",
  "Phone",
  "Destination",
  "Trip Type",
  "Start Date",
  "End Date",
  "Adults",
  "Children",
  "Child Ages",
  "Budget Min",
  "Budget Max",
  "Budget Range",
  "Interests",
  "Vision",
  "Consent",
  "Assigned To",
  "Internal Notes",
] as const;

export interface InquiryRecord {
  submittedAt: string;
  leadId: string;
  source: string;
  landingPage: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  status: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  tripType: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  childAges: string;
  budgetMin: number;
  budgetMax: number;
  budgetRange: string;
  interests: string;
  vision: string;
  consent: string;
  assignedTo: string;
  internalNotes: string;
}

export function buildInquiryRecord(formData: FormData): InquiryRecord {
  const submittedAt = new Date().toISOString();
  const shortId = randomUUID().split("-")[0].toUpperCase();
  const source = formData.source?.trim() || "Website Plan My Vacation Form";

  return {
    submittedAt,
    leadId: `MTC-${submittedAt.slice(0, 10).replace(/-/g, "")}-${shortId}`,
    source,
    landingPage: formData.landingPage?.trim() || "unknown",
    utmSource: formData.utmSource?.trim() || "",
    utmMedium: formData.utmMedium?.trim() || "",
    utmCampaign: formData.utmCampaign?.trim() || "",
    status: "New Inquiry",
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    fullName: `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    destination: formData.destination.trim(),
    tripType: formData.tripType.trim(),
    startDate: formData.startDate.trim(),
    endDate: formData.endDate.trim(),
    adults: formData.adults,
    children: formData.children,
    childAges: formData.childAges.join(", "),
    budgetMin: formData.budgetMin,
    budgetMax: formData.budgetMax,
    budgetRange: `$${formData.budgetMin.toLocaleString()} - $${formData.budgetMax.toLocaleString()}`,
    interests: formData.interests.join(", "),
    vision: formData.vision.trim(),
    consent: formData.consent ? "Yes" : "No",
    assignedTo: "",
    internalNotes: "",
  };
}

export function inquiryRecordToRow(record: InquiryRecord): (string | number)[] {
  return [
    record.submittedAt,
    record.leadId,
    record.source,
    record.landingPage,
    record.utmSource,
    record.utmMedium,
    record.utmCampaign,
    record.status,
    record.firstName,
    record.lastName,
    record.fullName,
    record.email,
    record.phone,
    record.destination,
    record.tripType,
    record.startDate,
    record.endDate,
    record.adults,
    record.children,
    record.childAges,
    record.budgetMin,
    record.budgetMax,
    record.budgetRange,
    record.interests,
    record.vision,
    record.consent,
    record.assignedTo,
    record.internalNotes,
  ];
}
