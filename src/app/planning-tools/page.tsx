import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import FunnelCardGrid from "@/components/FunnelCardGrid";
import { planningToolCards } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Planning Tools",
  "Use in-depth Disney and Universal planning tools for budget, dining, packing, crowd timing, ride eligibility, and Lightning Lane strategy.",
  "/planning-tools"
);

export default function PlanningToolsHubPage() {
  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tools
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Practical tools to help you make smarter vacation decisions
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            These resources are designed to simplify key planning questions before you book, from
            realistic budget ranges to ride planning and dining strategy.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <FunnelCardGrid cards={planningToolCards} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            How to use these tools together
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Step 1: Set your budget range",
                description:
                  "Start with the calculator so every next decision has realistic financial guardrails.",
              },
              {
                title: "Step 2: Choose timing and strategy",
                description:
                  "Use crowd and Lightning Lane guidance to shape dates and park-day structure.",
              },
              {
                title: "Step 3: Finalize execution details",
                description:
                  "Layer in dining and packing strategy so your final itinerary is practical, not just aspirational.",
              },
            ].map((step) => (
              <article key={step.title} className="rounded-xl border border-silver/60 p-7">
                <h3 className="mb-3 text-xl font-semibold text-midnight">{step.title}</h3>
                <p className="leading-8 text-charcoal/80">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            Pair tools with current offers
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/special-offers#seasonal-offers"
              className="rounded-xl bg-white px-6 py-5 text-midnight shadow-sm transition-colors hover:bg-midnight hover:text-white"
            >
              Seasonal date windows and crowd value
            </Link>
            <Link
              href="/special-offers#dining-plans"
              className="rounded-xl bg-white px-6 py-5 text-midnight shadow-sm transition-colors hover:bg-midnight hover:text-white"
            >
              Dining plan opportunities and meal pacing
            </Link>
            <Link
              href="/special-offers#kids-free-promos"
              className="rounded-xl bg-white px-6 py-5 text-midnight shadow-sm transition-colors hover:bg-midnight hover:text-white"
            >
              Family and kids-focused promotions
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Want expert help applying these tools to your trip?"
        description="Follow the offer and destination paths first, then request a custom itinerary strategy based on your selections."
        primaryButtonText="Explore Special Offers"
        primaryButtonLink="/special-offers"
        secondaryButtonText="Request Custom Planning Help"
        secondaryButtonLink="/contact?source=planning-tools-hub"
      />
    </main>
  );
}
