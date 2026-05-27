import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import BudgetEstimator from "@/components/BudgetEstimator";
import PlanningGuideSections from "@/components/PlanningGuideSections";
import { planningToolGuides } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Disney and Universal Budget Calculator",
  "Estimate Disney and Universal vacation budget ranges by nights, group size, destination, and travel style.",
  "/planning-tools/budget-calculator"
);

export default function BudgetCalculatorPage() {
  const guide = planningToolGuides["budget-calculator"];

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

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <BudgetEstimator />
        </div>
      </section>

      <PlanningGuideSections guide={guide} />

      <CTASection
        title="Ready for an exact custom quote?"
        description="Compare destination and offer paths first, then request an advisor-built quote tied to your exact trip priorities."
        primaryButtonText="Compare Destination Paths"
        primaryButtonLink="/destinations"
        secondaryButtonText="Request Custom Quote"
        secondaryButtonLink="/contact?source=budget-calculator"
      />
    </main>
  );
}
