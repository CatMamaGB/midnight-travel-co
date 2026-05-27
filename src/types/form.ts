export interface FormData {
  // Step 1: Contact info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Step 2: Trip basics
  destination: string;
  tripType: string;
  startDate: string;
  endDate: string;

  // Step 3: Travelers
  adults: number;
  children: number;
  childAges: number[];

  // Step 4: Budget range
  budgetMin: number;
  budgetMax: number;

  // Step 5: Interests
  interests: string[];

  // Step 6: Vision text
  vision: string;

  // Step 7: Consent
  consent: boolean;

  // Basic spam protection fields
  website?: string;
  formStartedAt?: number;
  turnstileToken?: string;

  // Attribution fields for lead source reporting
  source?: string;
  landingPage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface FormStepProps {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  errors: Record<string, string>;
}
