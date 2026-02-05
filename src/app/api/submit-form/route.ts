import { NextRequest, NextResponse } from "next/server";
import { FormData } from "@/types/form";

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.destination ||
      !formData.tripType ||
      !formData.startDate ||
      !formData.endDate ||
      formData.adults < 1 ||
      formData.budgetMin < 1000 ||
      formData.interests.length === 0 ||
      !formData.vision ||
      !formData.consent
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate child ages if children are present
    if (formData.children > 0 && formData.childAges.length !== formData.children) {
      return NextResponse.json(
        { error: "Child ages are required for all children" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send confirmation email to user

    // For now, we'll just log and return success
    console.log("Form submission received:", formData);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        data: formData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
