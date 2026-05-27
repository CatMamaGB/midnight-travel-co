import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PlanningGuideSections from "@/components/PlanningGuideSections";
import { planningToolGuides } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Best Time to Visit Disney World (Crowds, Value, and Weather Guide)",
  "Use seasonal crowd and value patterns to choose stronger Disney World travel windows and avoid peak-pressure dates.",
  "/planning-tools/crowd-calendar",
  ["best time to visit disney world", "disney crowd calendar", "disney shoulder season"]
);

export default function CrowdCalendarPage() {
  const guide = planningToolGuides["crowd-calendar"];

  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tool
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Best Time to Visit Disney World
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Crowd levels change every year, but seasonal tendencies can still help you pick better
            travel windows and set realistic expectations.
          </p>
        </div>
      </section>

      <PlanningGuideSections guide={guide} />

      <CTASection
        title="Need help picking your best dates?"
        description="Start with our seasonal offers and trip-style paths, then request advisor matching once your date window is narrowed."
        primaryButtonText="View Seasonal Offers"
        primaryButtonLink="/special-offers#seasonal-offers"
        secondaryButtonText="Request Date Matching Help"
        secondaryButtonLink="/contact?source=crowd-calendar"
      />
    </main>
  );
}
