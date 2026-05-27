import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PlanningGuideSections from "@/components/PlanningGuideSections";
import { planningToolGuides } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Disney and Universal Packing Lists",
  "Practical Disney and Universal packing lists for families, adults-only trips, and warm-weather park travel.",
  "/planning-tools/packing-lists"
);

export default function PackingListsPage() {
  const guide = planningToolGuides["packing-lists"];

  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tool
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Disney and Universal Packing Lists
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Pack with your trip style in mind so park days feel smoother and less reactive once you
            arrive.
          </p>
        </div>
      </section>

      <PlanningGuideSections guide={guide} />

      <CTASection
        title="Need a packing strategy matched to your itinerary?"
        description="Start with your trip type and weather window, then request personalized prep guidance for your exact itinerary."
        primaryButtonText="Explore Family Planning Path"
        primaryButtonLink="/vacation-types/families"
        secondaryButtonText="Request Custom Prep Plan"
        secondaryButtonLink="/contact?source=packing-lists"
      />
    </main>
  );
}
