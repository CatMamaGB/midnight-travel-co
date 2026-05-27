import type { Metadata } from "next";
import Link from "next/link";
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

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            Pair destination research with planning tools
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/planning-tools/crowd-calendar"
              className="rounded-xl border border-silver/60 px-6 py-5 text-midnight transition-colors hover:bg-midnight hover:text-white"
            >
              Crowd and date strategy
            </Link>
            <Link
              href="/planning-tools/budget-calculator"
              className="rounded-xl border border-silver/60 px-6 py-5 text-midnight transition-colors hover:bg-midnight hover:text-white"
            >
              Budget range planning
            </Link>
            <Link
              href="/planning-tools/dining-guide"
              className="rounded-xl border border-silver/60 px-6 py-5 text-midnight transition-colors hover:bg-midnight hover:text-white"
            >
              Dining and pacing strategy
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            Related offer categories
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/special-offers#disney-discounts"
              className="rounded-xl bg-white px-6 py-5 text-midnight shadow-sm transition-colors hover:bg-midnight hover:text-white"
            >
              Disney discounts
            </Link>
            <Link
              href="/special-offers#universal-deals"
              className="rounded-xl bg-white px-6 py-5 text-midnight shadow-sm transition-colors hover:bg-midnight hover:text-white"
            >
              Universal deals
            </Link>
            <Link
              href="/special-offers#seasonal-offers"
              className="rounded-xl bg-white px-6 py-5 text-midnight shadow-sm transition-colors hover:bg-midnight hover:text-white"
            >
              Seasonal offers
            </Link>
          </div>
        </div>
      </section>

      <PlanningProcessSection />
      <TripTypeTestimonials />

      <CTASection
        title="Want help choosing the best destination?"
        description="Use the planning tools and offer categories first, then request advisor support for your final destination decision."
        primaryButtonText="Open Planning Tools"
        primaryButtonLink="/planning-tools"
        secondaryButtonText="Request Destination Matching"
        secondaryButtonLink="/contact?source=destinations-hub&tripType=first-time-visitors"
      />
    </main>
  );
}
