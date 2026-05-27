import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PlanningGuideSections from "@/components/PlanningGuideSections";
import { planningToolGuides } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Disney Genie+ and Lightning Lane Strategy Guide",
  "Find out when Genie+ and Lightning Lane are worth it, how to prioritize rides, and how to avoid overpaying.",
  "/planning-tools/lightning-lane-guide",
  ["genie+ strategy", "lightning lane guide", "is genie plus worth it"]
);

export default function LightningLaneGuidePage() {
  const guide = planningToolGuides["lightning-lane-guide"];

  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tool
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Disney Genie+ and Lightning Lane Strategy Guide
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Understand when Lightning Lane improves your trip and when other strategy choices deliver
            better value.
          </p>
        </div>
      </section>

      <PlanningGuideSections guide={guide} />

      <CTASection
        title="Need a Lightning Lane plan for your exact dates?"
        description="Use destination and offer strategy first, then request a day-by-day reservation and ride sequencing plan."
        primaryButtonText="Explore Disney World Strategy"
        primaryButtonLink="/destinations/disney-world"
        secondaryButtonText="Request Custom Lightning Lane Plan"
        secondaryButtonLink="/contact?source=lightning-lane-guide&destination=Walt%20Disney%20World"
      />
    </main>
  );
}
