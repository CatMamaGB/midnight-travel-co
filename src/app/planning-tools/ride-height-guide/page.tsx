import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PlanningGuideSections from "@/components/PlanningGuideSections";
import { planningToolGuides } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Disney and Universal Ride Height Guide",
  "Ride height planning reference for Disney and Universal vacations to help families set better attraction expectations.",
  "/planning-tools/ride-height-guide"
);

export default function RideHeightGuidePage() {
  const guide = planningToolGuides["ride-height-guide"];

  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tool
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Ride Height Guide
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Use this quick reference to align expectations and avoid attraction surprises for
            younger travelers.
          </p>
        </div>
      </section>

      <PlanningGuideSections guide={guide} />

      <CTASection
        title="Want a custom attraction strategy by age range?"
        description="Review your family trip path first, then request an advisor-built attraction plan tied to your children's profile."
        primaryButtonText="Explore Family Vacation Path"
        primaryButtonLink="/vacation-types/families"
        secondaryButtonText="Request Family Ride Strategy"
        secondaryButtonLink="/contact?source=ride-height-guide&tripType=families"
      />
    </main>
  );
}
