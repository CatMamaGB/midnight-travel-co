import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PlanningGuideSections from "@/components/PlanningGuideSections";
import { planningToolGuides } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Universal Express Pass Strategy Guide (When It's Worth It)",
  "Learn when Universal Express Pass saves time, when it does not, and how to plan around crowd pressure and ride priorities.",
  "/planning-tools/universal-express-pass-guide",
  ["universal express pass strategy", "is universal express pass worth it", "universal orlando express pass"]
);

export default function UniversalExpressPassGuidePage() {
  const guide = planningToolGuides["universal-express-pass-guide"];

  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tool
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Universal Express Pass Strategy Guide
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Decide whether Express Pass, a premier hotel stay, or a lower-cost touring plan is the
            strongest fit for your Universal Orlando dates and ride priorities.
          </p>
        </div>
      </section>

      <PlanningGuideSections guide={guide} />

      <CTASection
        title="Need help deciding if Express Pass is worth it?"
        description="Compare Universal deal windows, hotel options, and crowd pressure first, then request advisor support for your final package path."
        primaryButtonText="Review Universal Deals"
        primaryButtonLink="/special-offers#universal-deals"
        secondaryButtonText="Request Express Pass Strategy"
        secondaryButtonLink="/contact?source=universal-express-pass-guide&destination=Universal%20Orlando"
      />
    </main>
  );
}
