import { NextRequest } from "next/server";
import { POST } from "@/app/api/contact/route";
import { sendOperationalAlert } from "@/lib/alerts";
import { storeContactInquiry } from "@/lib/contactStorage";
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/email";
import { checkContactRateLimit } from "@/lib/rateLimit";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { FormData } from "@/types/form";

jest.mock("@/lib/email", () => ({
  sendNotificationEmail: jest.fn(),
  sendConfirmationEmail: jest.fn(),
}));

jest.mock("@/lib/contactStorage", () => ({
  storeContactInquiry: jest.fn(),
}));

jest.mock("@/lib/rateLimit", () => ({
  checkContactRateLimit: jest.fn(),
}));

jest.mock("@/lib/turnstile", () => ({
  verifyTurnstileToken: jest.fn(),
}));

jest.mock("@/lib/alerts", () => ({
  sendOperationalAlert: jest.fn(),
}));

const mockSendNotificationEmail = sendNotificationEmail as jest.MockedFunction<
  typeof sendNotificationEmail
>;
const mockSendConfirmationEmail = sendConfirmationEmail as jest.MockedFunction<
  typeof sendConfirmationEmail
>;
const mockStoreContactInquiry = storeContactInquiry as jest.MockedFunction<
  typeof storeContactInquiry
>;
const mockCheckContactRateLimit = checkContactRateLimit as jest.MockedFunction<
  typeof checkContactRateLimit
>;
const mockVerifyTurnstileToken = verifyTurnstileToken as jest.MockedFunction<
  typeof verifyTurnstileToken
>;
const mockSendOperationalAlert = sendOperationalAlert as jest.MockedFunction<
  typeof sendOperationalAlert
>;

const baseFormData: FormData = {
  firstName: "Alexa",
  lastName: "Midnight",
  email: "traveler@example.com",
  phone: "555-111-2222",
  destination: "Walt Disney World",
  tripType: "Family Vacation",
  startDate: "2026-09-10",
  endDate: "2026-09-16",
  adults: 2,
  children: 1,
  childAges: [5],
  budgetMin: 5000,
  budgetMax: 8000,
  interests: ["Character Dining", "Resort Stay"],
  vision: "We want a relaxing family trip with planned rest time.",
  consent: true,
  website: "",
  formStartedAt: Date.now() - 10_000,
  turnstileToken: "token-123",
};

function createRequest(overrides?: Partial<FormData>) {
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": "203.0.113.10",
    },
    body: JSON.stringify({ ...baseFormData, ...overrides }),
  });
}

describe("POST /api/contact", () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => undefined);

    mockCheckContactRateLimit.mockResolvedValue({
      success: true,
      remaining: 4,
      reset: Date.now() + 1000,
      source: "memory",
    });
    mockVerifyTurnstileToken.mockResolvedValue({
      enabled: true,
      success: true,
    });
    mockSendNotificationEmail.mockResolvedValue({ success: true });
    mockSendConfirmationEmail.mockResolvedValue({ success: true });
    mockStoreContactInquiry.mockResolvedValue({
      provider: "sheets",
      success: true,
      leadId: "lead_123",
    });
    mockSendOperationalAlert.mockResolvedValue(undefined);
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it("accepts honeypot submissions without processing downstream services", async () => {
    const response = await POST(createRequest({ website: "spam-link" }));
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.success).toBe(true);
    expect(mockSendNotificationEmail).not.toHaveBeenCalled();
    expect(mockStoreContactInquiry).not.toHaveBeenCalled();
  });

  it("returns validation errors for missing required fields", async () => {
    const response = await POST(createRequest({ firstName: "" }));
    const payload = await response.json();

    expect(response.status).toBe(400);
    expect(payload.error).toBe("Missing required fields");
    expect(payload.missingFields).toContain("firstName");
  });

  it("blocks rate-limited submissions", async () => {
    mockCheckContactRateLimit.mockResolvedValue({
      success: false,
      remaining: 0,
      reset: Date.now() + 60_000,
      source: "upstash",
    });

    const response = await POST(createRequest());
    const payload = await response.json();

    expect(response.status).toBe(429);
    expect(payload.error).toMatch(/Too many submissions/i);
  });

  it("returns success on a full happy-path submission", async () => {
    const response = await POST(createRequest());
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.success).toBe(true);
    expect(payload.emailsSent.notification).toBe(true);
    expect(payload.emailsSent.confirmation).toBe(true);
    expect(payload.storage.saved).toBe(true);
    expect(payload.storage.leadId).toBe("lead_123");
  });

  it("returns partial success when storage works but a team email fails", async () => {
    mockSendNotificationEmail.mockRejectedValue(new Error("SMTP unavailable"));

    const response = await POST(createRequest());
    const payload = await response.json();

    expect(response.status).toBe(202);
    expect(payload.success).toBe(true);
    expect(payload.warnings).toContain("Team notification email failed.");
    expect(mockSendOperationalAlert).toHaveBeenCalledTimes(1);
  });
});
