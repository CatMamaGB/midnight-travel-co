import { NextRequest, NextResponse } from "next/server";
import { FormData } from "@/types/form";
import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/email";
import { storeInNotion } from "@/lib/notion";

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

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
      .filter(([_, value]) => !value)
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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
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

    // Check if email configuration is set up
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Email configuration missing. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send emails (run in parallel for better performance)
    const [notificationResult, confirmationResult] = await Promise.allSettled([
      sendNotificationEmail(formData),
      sendConfirmationEmail(formData),
    ]);

    // Check if emails were sent successfully
    if (notificationResult.status === "rejected") {
      console.error("Failed to send notification email:", notificationResult.reason);
    }

    if (confirmationResult.status === "rejected") {
      console.error("Failed to send confirmation email:", confirmationResult.reason);
    }

    // If both emails failed, return error
    if (
      notificationResult.status === "rejected" &&
      confirmationResult.status === "rejected"
    ) {
      return NextResponse.json(
        { error: "Failed to send emails. Please try again later." },
        { status: 500 }
      );
    }

    // Store in Notion (optional, won't fail if not configured)
    try {
      await storeInNotion(formData);
    } catch (notionError) {
      // Log but don't fail the request if Notion fails
      console.error("Notion storage failed (non-critical):", notionError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        emailsSent: {
          notification: notificationResult.status === "fulfilled",
          confirmation: confirmationResult.status === "fulfilled",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
