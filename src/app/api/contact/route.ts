import { NextRequest, NextResponse } from "next/server";
import { FormData } from "@/types/form";
import { sendNotificationEmail, sendConfirmationEmail, sendNurtureKickoffEmail } from "@/lib/email";
import { sendOperationalAlert } from "@/lib/alerts";
import { storeContactInquiry } from "@/lib/contactStorage";
import { checkContactRateLimit } from "@/lib/rateLimit";
import { verifyTurnstileToken } from "@/lib/turnstile";

const MIN_FORM_COMPLETION_MS = 2000;
const MAX_LENGTHS = {
  firstName: 80,
  lastName: 80,
  email: 160,
  phone: 40,
  destination: 120,
  tripType: 80,
  vision: 4000,
  interest: 80,
  source: 160,
  landingPage: 2000,
  utm: 160,
};

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function exceedsMaxLength(value: string | undefined, maxLength: number) {
  return (value?.trim().length || 0) > maxLength;
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();
    const clientIp = getClientIp(request);

    // Honeypot field: real users never fill this value because it is hidden.
    if (formData.website?.trim()) {
      return NextResponse.json(
        { success: true, message: "Form submitted successfully" },
        { status: 200 }
      );
    }

    if (
      typeof formData.formStartedAt === "number" &&
      Date.now() - formData.formStartedAt < MIN_FORM_COMPLETION_MS
    ) {
      return NextResponse.json(
        { error: "Form submitted too quickly. Please try again." },
        { status: 400 }
      );
    }

    const rateLimitResult = await checkContactRateLimit(clientIp);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    const turnstileResult = await verifyTurnstileToken(formData.turnstileToken, clientIp);
    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: turnstileResult.message || "Spam protection verification failed." },
        { status: 400 }
      );
    }

    // Validate required fields
    const requiredFields = {
      firstName: formData.firstName?.trim(),
      lastName: formData.lastName?.trim(),
      email: formData.email?.trim(),
      phone: formData.phone?.trim(),
      destination: formData.destination?.trim(),
      tripType: formData.tripType?.trim(),
      startDate: formData.startDate?.trim(),
      endDate: formData.endDate?.trim(),
      vision: formData.vision?.trim(),
    };

    // Check for missing required fields
    const missingFields = Object.entries(requiredFields)
      .filter((entry) => !entry[1])
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          missingFields,
        },
        { status: 400 }
      );
    }

    if (
      exceedsMaxLength(formData.firstName, MAX_LENGTHS.firstName) ||
      exceedsMaxLength(formData.lastName, MAX_LENGTHS.lastName) ||
      exceedsMaxLength(formData.email, MAX_LENGTHS.email) ||
      exceedsMaxLength(formData.phone, MAX_LENGTHS.phone) ||
      exceedsMaxLength(formData.destination, MAX_LENGTHS.destination) ||
      exceedsMaxLength(formData.tripType, MAX_LENGTHS.tripType) ||
      exceedsMaxLength(formData.vision, MAX_LENGTHS.vision) ||
      exceedsMaxLength(formData.source, MAX_LENGTHS.source) ||
      exceedsMaxLength(formData.landingPage, MAX_LENGTHS.landingPage) ||
      exceedsMaxLength(formData.utmSource, MAX_LENGTHS.utm) ||
      exceedsMaxLength(formData.utmMedium, MAX_LENGTHS.utm) ||
      exceedsMaxLength(formData.utmCampaign, MAX_LENGTHS.utm) ||
      formData.interests.some((interest) => exceedsMaxLength(interest, MAX_LENGTHS.interest))
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed the maximum allowed length." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (new Date(formData.startDate).getTime() > new Date(formData.endDate).getTime()) {
      return NextResponse.json(
        { error: "End date must be the same as or later than the start date." },
        { status: 400 }
      );
    }

    // Validate adults count
    if (!formData.adults || formData.adults < 1) {
      return NextResponse.json(
        { error: "At least one adult is required" },
        { status: 400 }
      );
    }

    // Validate children ages if children are present
    if (formData.children > 0) {
      if (
        !formData.childAges ||
        formData.childAges.length !== formData.children ||
        formData.childAges.some((age) => !age || age < 0 || age > 17)
      ) {
        return NextResponse.json(
          { error: "Valid child ages are required for all children" },
          { status: 400 }
        );
      }
    }

    // Validate budget
    if (!formData.budgetMin || formData.budgetMin < 1000) {
      return NextResponse.json(
        { error: "Minimum budget must be at least $1,000" },
        { status: 400 }
      );
    }

    if (!formData.budgetMax || formData.budgetMax < formData.budgetMin) {
      return NextResponse.json(
        { error: "Maximum budget must be greater than minimum budget" },
        { status: 400 }
      );
    }

    // Validate interests
    if (!formData.interests || formData.interests.length === 0) {
      return NextResponse.json(
        { error: "At least one interest must be selected" },
        { status: 400 }
      );
    }

    // Validate consent
    if (!formData.consent) {
      return NextResponse.json(
        { error: "Consent is required to submit the form" },
        { status: 400 }
      );
    }

    // Send emails and store the inquiry in parallel for faster processing.
    const [notificationResult, confirmationResult, nurtureResult, storageResult] = await Promise.allSettled([
      sendNotificationEmail(formData),
      sendConfirmationEmail(formData),
      sendNurtureKickoffEmail(formData),
      storeContactInquiry(formData),
    ]);

    // Check if emails were sent successfully
    if (notificationResult.status === "rejected") {
      console.error("Failed to send notification email:", notificationResult.reason);
    }

    if (confirmationResult.status === "rejected") {
      console.error("Failed to send confirmation email:", confirmationResult.reason);
    }

    if (nurtureResult.status === "rejected") {
      console.error("Failed to send nurture kickoff email:", nurtureResult.reason);
    }

    if (storageResult.status === "rejected") {
      console.error("Google storage failed:", storageResult.reason);
    } else if (storageResult.value.skipped) {
      console.warn(storageResult.value.message);
    }

    const storageSucceeded =
      storageResult.status === "fulfilled" && storageResult.value.success;

    const warnings: string[] = [];

    if (notificationResult.status === "rejected") {
      warnings.push("Team notification email failed.");
    }

    if (confirmationResult.status === "rejected") {
      warnings.push("Traveler confirmation email failed.");
    }

    if (nurtureResult.status === "rejected") {
      warnings.push("Traveler nurture kickoff email failed.");
    }

    if (storageResult.status === "rejected") {
      warnings.push("Inquiry storage failed.");
    } else if (!storageSucceeded && !storageResult.value.skipped) {
      warnings.push("Inquiry storage did not confirm a saved record.");
    }

    // Require either email delivery or Google storage so submissions are not lost.
    if (
      notificationResult.status === "rejected" &&
      confirmationResult.status === "rejected" &&
      nurtureResult.status === "rejected" &&
      !storageSucceeded
    ) {
      try {
        await sendOperationalAlert({
          title: "Midnight Travel contact failure",
          details: [
            `All delivery paths failed for IP ${clientIp}.`,
            `Rate limiting source: ${rateLimitResult.source}.`,
            "Notification email failed.",
            "Confirmation email failed.",
            "Nurture kickoff email failed.",
            "Inquiry storage failed or was skipped.",
          ],
        });
      } catch (alertError) {
        console.error("Failed to send operational alert:", alertError);
      }

      return NextResponse.json(
        { error: "Failed to save or email your inquiry. Please try again later." },
        { status: 500 }
      );
    }

    if (warnings.length > 0) {
      try {
        await sendOperationalAlert({
          title: "Midnight Travel contact partial failure",
          details: [
            `Submission accepted from IP ${clientIp}.`,
            ...warnings,
            storageSucceeded
              ? `Lead stored in ${storageResult.status === "fulfilled" ? storageResult.value.provider : "unknown"}.`
              : "Storage did not report success.",
          ],
        });
      } catch (alertError) {
        console.error("Failed to send operational alert:", alertError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          warnings.length > 0
            ? "Inquiry received with a partial delivery warning."
            : "Form submitted successfully",
        emailsSent: {
          notification: notificationResult.status === "fulfilled",
          confirmation: confirmationResult.status === "fulfilled",
          nurtureKickoff: nurtureResult.status === "fulfilled",
        },
        warnings,
        storage: storageResult.status === "fulfilled"
          ? {
              provider: storageResult.value.provider,
              saved: storageResult.value.success,
              skipped: storageResult.value.skipped ?? false,
              leadId: storageResult.value.leadId ?? null,
            }
          : {
              provider: "unknown",
              saved: false,
              skipped: false,
              leadId: null,
            },
      },
      { status: warnings.length > 0 ? 202 : 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    try {
      await sendOperationalAlert({
        title: "Midnight Travel contact exception",
        details: [`Unhandled contact route error: ${error instanceof Error ? error.message : "Unknown error"}`],
      });
    } catch (alertError) {
      console.error("Failed to send operational alert:", alertError);
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
