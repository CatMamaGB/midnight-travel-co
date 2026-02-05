"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormData } from "@/types/form";
import ProgressIndicator from "./ProgressIndicator";
import FormStep from "./FormStep";
import Step1ContactInfo from "./form-steps/Step1ContactInfo";
import Step2TripBasics from "./form-steps/Step2TripBasics";
import Step3Travelers from "./form-steps/Step3Travelers";
import Step4Budget from "./form-steps/Step4Budget";
import Step5Interests from "./form-steps/Step5Interests";
import Step6Vision from "./form-steps/Step6Vision";
import Step7Consent from "./form-steps/Step7Consent";

const TOTAL_STEPS = 7;

export default function MultiStepForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    tripType: "",
    startDate: "",
    endDate: "",
    adults: 1,
    children: 0,
    childAges: [],
    budgetMin: 1000,
    budgetMax: 5000,
    interests: [],
    vision: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    // Clear errors for updated fields
    const newErrors = { ...errors };
    Object.keys(data).forEach((key) => {
      delete newErrors[key];
    });
    setErrors(newErrors);
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        break;

      case 2:
        if (!formData.destination.trim()) newErrors.destination = "Destination is required";
        if (!formData.tripType) newErrors.tripType = "Trip type is required";
        if (!formData.startDate) newErrors.startDate = "Start date is required";
        if (!formData.endDate) newErrors.endDate = "End date is required";
        break;

      case 3:
        if (formData.adults < 1) newErrors.adults = "At least 1 adult is required";
        if (formData.children > 0 && formData.childAges.length !== formData.children) {
          newErrors.childAges = "Please provide age for each child";
        }
        break;

      case 4:
        if (formData.budgetMin < 1000) {
          newErrors.budgetMin = "Minimum budget must be at least $1,000";
        }
        if (formData.budgetMax < formData.budgetMin) {
          newErrors.budgetMax = "Maximum budget must be greater than minimum";
        }
        break;

      case 5:
        if (formData.interests.length === 0) {
          newErrors.interests = "Please select at least one interest";
        }
        break;

      case 6:
        if (!formData.vision.trim()) newErrors.vision = "Please share your vision";
        break;

      case 7:
        if (!formData.consent) {
          newErrors.consent = "You must agree to the terms to continue";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(7)) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to submit form. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1ContactInfo data={formData} updateData={updateData} errors={errors} />;
      case 2:
        return <Step2TripBasics data={formData} updateData={updateData} errors={errors} />;
      case 3:
        return <Step3Travelers data={formData} updateData={updateData} errors={errors} />;
      case 4:
        return <Step4Budget data={formData} updateData={updateData} errors={errors} />;
      case 5:
        return <Step5Interests data={formData} updateData={updateData} errors={errors} />;
      case 6:
        return <Step6Vision data={formData} updateData={updateData} errors={errors} />;
      case 7:
        return <Step7Consent data={formData} updateData={updateData} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-cloud py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <ProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        <div className="bg-white rounded-lg shadow-md p-8">
          {renderStep()}

          <div className="flex justify-between mt-8 pt-6 border-t border-silver">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-6 py-2 border border-charcoal text-charcoal rounded-md hover:bg-cloud transition-colors"
              >
                Previous
              </button>
            ) : (
              <div />
            )}

            {currentStep < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 bg-royal text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2 bg-gold text-midnight rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>

          {errors.submit && (
            <p className="mt-4 text-sm text-accent text-center">{errors.submit}</p>
          )}
        </div>
      </div>
    </div>
  );
}
