"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Turnstile from "react-turnstile";
import { FormData } from "@/types/form";
import ProgressIndicator from "./ProgressIndicator";
import Step1ContactInfo from "./form-steps/Step1ContactInfo";
import Step2TripBasics from "./form-steps/Step2TripBasics";
import Step3Travelers from "./form-steps/Step3Travelers";
import Step4Budget from "./form-steps/Step4Budget";
import Step5Interests from "./form-steps/Step5Interests";
import Step6Vision from "./form-steps/Step6Vision";
import Step7Consent from "./form-steps/Step7Consent";

const TOTAL_STEPS = 7;
const QUOTE_MODE_STEPS = 4;
const FORM_STORAGE_KEY = "midnight-travel-inquiry-draft";
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function MultiStepForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
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
    website: "",
    formStartedAt: Date.now(),
    source: "Plan My Vacation Form",
    landingPage: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prefillApplied, setPrefillApplied] = useState(false);
  const mode = searchParams.get("mode")?.trim() ?? "";
  const sourceParam = searchParams.get("source")?.trim() ?? "";
  const isQuoteMode = mode === "quote" || sourceParam === "custom-quote-request";
  const totalSteps = isQuoteMode ? QUOTE_MODE_STEPS : TOTAL_STEPS;

  useEffect(() => {
    const savedDraft = window.localStorage.getItem(FORM_STORAGE_KEY);

    if (!savedDraft) {
      return;
    }

    try {
      const parsedDraft = JSON.parse(savedDraft) as Partial<FormData>;
      setFormData((previous) => ({
        ...previous,
        ...parsedDraft,
        formStartedAt: previous.formStartedAt,
      }));
    } catch {
      window.localStorage.removeItem(FORM_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (prefillApplied) {
      return;
    }

    const destination = searchParams.get("destination")?.trim() ?? "";
    const tripType = searchParams.get("tripType")?.trim() ?? "";
    const source = searchParams.get("source")?.trim() ?? "Plan My Vacation Form";
    const budgetMin = Number(searchParams.get("budgetMin"));
    const budgetMax = Number(searchParams.get("budgetMax"));
    const adults = Number(searchParams.get("adults"));
    const children = Number(searchParams.get("children"));
    const landingPage =
      searchParams.get("landingPage")?.trim() ||
      (typeof document !== "undefined" ? document.referrer : "") ||
      "direct";
    const utmSource = searchParams.get("utm_source")?.trim() ?? "";
    const utmMedium = searchParams.get("utm_medium")?.trim() ?? "";
    const utmCampaign = searchParams.get("utm_campaign")?.trim() ?? "";

    const interestQuery = searchParams.get("interests")?.trim() ?? "";
    const interests = interestQuery
      .split(",")
      .map((interest) => interest.trim())
      .filter(Boolean);

    setFormData((previous) => {
      const nextBudgetMin =
        Number.isFinite(budgetMin) && budgetMin >= 1000 ? budgetMin : previous.budgetMin;

      return {
        ...previous,
        destination: destination || previous.destination,
        tripType: tripType || previous.tripType,
        budgetMin: nextBudgetMin,
        budgetMax:
          Number.isFinite(budgetMax) && budgetMax >= nextBudgetMin
            ? budgetMax
            : previous.budgetMax,
        adults: Number.isFinite(adults) && adults >= 1 ? adults : previous.adults,
        children: Number.isFinite(children) && children >= 0 ? children : previous.children,
        interests: interests.length > 0 ? interests : previous.interests,
        source,
        landingPage,
        utmSource,
        utmMedium,
        utmCampaign,
      };
    });

    setPrefillApplied(true);
  }, [prefillApplied, searchParams]);

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

    if (isQuoteMode) {
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
          if (formData.budgetMin < 1000) {
            newErrors.budgetMin = "Minimum budget must be at least $1,000";
          }
          if (formData.budgetMax < formData.budgetMin) {
            newErrors.budgetMax = "Maximum budget must be greater than minimum";
          }
          break;
        case 4:
          if (!formData.consent) {
            newErrors.consent = "You must agree to the terms to continue";
          }
          if (turnstileSiteKey && !formData.turnstileToken) {
            newErrors.turnstileToken = "Please complete the spam protection check.";
          }
          break;
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }

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
        if (turnstileSiteKey && !formData.turnstileToken) {
          newErrors.turnstileToken = "Please complete the spam protection check.";
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
    if (!validateStep(totalSteps)) return;

    setIsSubmitting(true);
    try {
      const submissionData: FormData = isQuoteMode
        ? {
            ...formData,
            interests: formData.interests.length > 0 ? formData.interests : ["custom-quote"],
            vision:
              formData.vision.trim() ||
              "Quick quote request. Please recommend destination, package, and planning options based on the submitted trip basics and budget range.",
            source: formData.source || "custom-quote-request",
          }
        : formData;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      const payload = (await response.json()) as {
        error?: string;
        warnings?: string[];
        storage?: { leadId?: string | null };
      };

      if (!response.ok) {
        throw new Error(payload.error || "Failed to submit form");
      }

      const params = new URLSearchParams();
      if (payload.storage?.leadId) {
        params.set("leadId", payload.storage.leadId);
      }
      if (payload.warnings?.length) {
        params.set("status", "partial");
      }

      window.localStorage.removeItem(FORM_STORAGE_KEY);
      router.push(`/thank-you${params.toString() ? `?${params.toString()}` : ""}`);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({
        submit:
          error instanceof Error
            ? error.message
            : "Failed to submit form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    if (isQuoteMode) {
      switch (currentStep) {
        case 1:
          return <Step1ContactInfo data={formData} updateData={updateData} errors={errors} />;
        case 2:
          return <Step2TripBasics data={formData} updateData={updateData} errors={errors} />;
        case 3:
          return (
            <div className="space-y-8">
              <Step3Travelers data={formData} updateData={updateData} errors={errors} />
              <Step4Budget data={formData} updateData={updateData} errors={errors} />
            </div>
          );
        case 4:
          return <Step7Consent data={formData} updateData={updateData} errors={errors} />;
        default:
          return null;
      }
    }

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
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

        {isQuoteMode && (
          <div className="mb-6 rounded-lg border border-gold/40 bg-white px-5 py-4 text-center text-sm text-charcoal/80">
            Quick quote mode: fewer required steps, with your source and budget context preserved.
          </div>
        )}

        <div className="rounded-lg bg-white p-8 text-charcoal shadow-md">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website ?? ""}
              onChange={(e) => updateData({ website: e.target.value })}
            />
          </div>

          {renderStep()}

          {currentStep === 7 && turnstileSiteKey && (
            <div className="mt-6 rounded-lg border border-silver/40 bg-cloud/60 p-4">
              <p className="mb-3 text-sm text-charcoal/80">
                Complete the spam protection check before submitting your inquiry.
              </p>
              <Turnstile
                sitekey={turnstileSiteKey}
                onVerify={(token) => updateData({ turnstileToken: token })}
                onExpire={() => updateData({ turnstileToken: "" })}
                onError={() => updateData({ turnstileToken: "" })}
              />
              {errors.turnstileToken && (
                <p className="mt-2 text-sm text-accent">{errors.turnstileToken}</p>
              )}
            </div>
          )}

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

            {currentStep < totalSteps ? (
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
