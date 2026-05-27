import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FunnelCardGrid from "@/components/FunnelCardGrid";
import PlanningProcessSection from "@/components/PlanningProcessSection";
import TripTypeTestimonials from "@/components/TripTypeTestimonials";
import { destinationCards } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Destinations",
  "Explore Disney and Universal destination options with side-by-side planning guidance from The Midnight Travel Co.",
  "/destinations"
);

export default function DestinationsHubPage() {
  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Explore Destinations
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Find the Disney or Universal destination that fits your travel style
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Use these destination guides to compare park styles, resort options, and trip pacing,
            then move into a custom planning flow that matches your group and budget.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <FunnelCardGrid cards={destinationCards} />
        </div>
      </section>

      <PlanningProcessSection />
      <TripTypeTestimonials />

      <CTASection
        title="Want help choosing the best destination?"
        description="Tell us your group details, priorities, and budget range, and we will recommend the strongest-fit destination options."
        primaryButtonText="Plan My Vacation"
        primaryButtonLink="/contact?source=destinations-hub"
        secondaryButtonText="Get a Custom Quote"
        secondaryButtonLink="/contact?source=destinations-hub&tripType=first-time-visitors"
      />
    </main>
  );
}
