import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import BudgetEstimator from "@/components/BudgetEstimator";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Disney and Universal Budget Calculator",
  "Estimate Disney and Universal vacation budget ranges by nights, group size, destination, and travel style.",
  "/planning-tools/budget-calculator"
);

export default function BudgetCalculatorPage() {
  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tool
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Disney and Universal Budget Calculator
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Use this estimator to set a practical budget range before requesting a custom itinerary
            recommendation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <BudgetEstimator />
        </div>
      </section>

      <CTASection
        title="Ready for an exact custom quote?"
        description="Share your preferences and we will turn your budget range into a recommendation-based trip plan."
        primaryButtonText="Get a Custom Quote"
        primaryButtonLink="/contact?source=budget-calculator"
      />
    </main>
  );
}
