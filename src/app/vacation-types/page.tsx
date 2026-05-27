import type { Metadata } from "next";
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

      <CTASection
        title="Ready for a trip strategy built around your group?"
        description="Use our planning form to share who is traveling, your budget range, and the experiences that matter most."
        primaryButtonText="Start Planning"
        primaryButtonLink="/contact?source=vacation-types-hub"
        secondaryButtonText="Book Free Consultation"
        secondaryButtonLink="mailto:travel.midnightco@gmail.com?subject=Free%20Consultation%20Request"
      />
    </main>
  );
}
