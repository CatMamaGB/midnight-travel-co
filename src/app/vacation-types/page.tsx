import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import FunnelCardGrid from "@/components/FunnelCardGrid";
import { vacationTypeCards } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Vacation Types",
  "Start with how you travel: family trips, adults-only escapes, luxury planning, and first-time park vacations.",
  "/vacation-types"
);

export default function VacationTypesHubPage() {
  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Vacation Types
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Start with the trip style that fits your group best
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Most travelers need guidance on what kind of Disney or Universal trip fits their group.
            Choose your vacation type to get focused recommendations and a faster plan.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <FunnelCardGrid cards={vacationTypeCards} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            Recommended planning tools by trip type
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/planning-tools/ride-height-guide"
              className="rounded-xl border border-silver/60 px-6 py-5 text-midnight transition-colors hover:bg-midnight hover:text-white"
            >
              Families: ride height planning
            </Link>
            <Link
              href="/planning-tools/dining-guide"
              className="rounded-xl border border-silver/60 px-6 py-5 text-midnight transition-colors hover:bg-midnight hover:text-white"
            >
              Adults-only: dining strategy
            </Link>
            <Link
              href="/planning-tools/crowd-calendar"
              className="rounded-xl border border-silver/60 px-6 py-5 text-midnight transition-colors hover:bg-midnight hover:text-white"
            >
              First-time: crowd and date timing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            Offers aligned to trip goals
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/special-offers#kids-free-promos"
              className="rounded-xl bg-white px-6 py-5 text-midnight shadow-sm transition-colors hover:bg-midnight hover:text-white"
            >
              Family and kids-focused offers
            </Link>
            <Link
              href="/special-offers#dining-plans"
              className="rounded-xl bg-white px-6 py-5 text-midnight shadow-sm transition-colors hover:bg-midnight hover:text-white"
            >
              Dining plan opportunities
            </Link>
            <Link
              href="/special-offers#seasonal-offers"
              className="rounded-xl bg-white px-6 py-5 text-midnight shadow-sm transition-colors hover:bg-midnight hover:text-white"
            >
              Seasonal timing offers
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for a trip strategy built around your group?"
        description="Navigate to the most relevant planning tools and offers first, then share your details for an advisor-built final plan."
        primaryButtonText="Open Planning Tools"
        primaryButtonLink="/planning-tools"
        secondaryButtonText="Request Trip-Type Matching"
        secondaryButtonLink="/contact?source=vacation-types-hub"
      />
    </main>
  );
}
