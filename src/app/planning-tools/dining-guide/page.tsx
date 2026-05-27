import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PlanningGuideSections from "@/components/PlanningGuideSections";
import { planningToolGuides } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Disney Dining Reservation Guide: Timelines, Priorities, and Strategy",
  "Learn when to book Disney dining reservations, which meals to prioritize, and how to align dining with park flow.",
  "/planning-tools/dining-guide",
  ["disney dining reservations", "when to book disney dining", "disney dining strategy"]
);

export default function DiningGuidePage() {
  const guide = planningToolGuides["dining-guide"];

  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tool
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Disney Dining Reservation Guide
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Use this framework to build reservations around your vacation rhythm instead of letting
            reservations control the whole trip.
          </p>
        </div>
      </section>

      <PlanningGuideSections guide={guide} />

      <CTASection
        title="Need dining recommendations matched to your itinerary?"
        description="Review current dining-related offers and budget fit first, then request a custom recommendation for your dates."
        primaryButtonText="View Dining Plan Offers"
        primaryButtonLink="/special-offers#dining-plans"
        secondaryButtonText="Request Dining Strategy Help"
        secondaryButtonLink="/contact?source=dining-guide&interests=dining"
      />
    </main>
  );
}
