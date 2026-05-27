import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FunnelCardGrid from "@/components/FunnelCardGrid";
import { planningToolCards } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Planning Tools",
  "Use practical Disney and Universal planning tools for budget, dining, packing, crowd timing, and Lightning Lane strategy.",
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

      <CTASection
        title="Want expert help applying these tools to your trip?"
        description="Share your travel details and we will turn these planning inputs into a custom itinerary strategy."
        primaryButtonText="Plan My Vacation"
        primaryButtonLink="/contact?source=planning-tools-hub"
      />
    </main>
  );
}
