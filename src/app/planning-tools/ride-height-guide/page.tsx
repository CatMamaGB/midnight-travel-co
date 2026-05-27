import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";

const rideHeightReference = [
  { range: "32-38 inches", recommendations: "Focus on family attractions and gentler dark rides." },
  { range: "40-47 inches", recommendations: "Mix family rides with select thrill options by park." },
  { range: "48 inches and up", recommendations: "Most major coasters and headline attractions open up." },
];

export const metadata: Metadata = buildPageMetadata(
  "Disney and Universal Ride Height Guide",
  "Ride height planning reference for Disney and Universal vacations to help families set better attraction expectations.",
  "/planning-tools/ride-height-guide"
);

export default function RideHeightGuidePage() {
  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tool
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Ride Height Guide
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Use this quick reference to align expectations and avoid attraction surprises for
            younger travelers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {rideHeightReference.map((entry) => (
            <article key={entry.range} className="rounded-xl bg-white p-7 shadow-sm">
              <h2 className="mb-3 text-2xl font-semibold text-midnight">{entry.range}</h2>
              <p className="leading-8 text-charcoal/80">{entry.recommendations}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Want a custom attraction strategy by age range?"
        description="We can map ride priorities by party profile so your family plan stays realistic and fun."
        primaryButtonText="Start Family Trip Planning"
        primaryButtonLink="/contact?source=ride-height-guide&tripType=families"
      />
    </main>
  );
}
