import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";

const crowdWindows = [
  {
    season: "Lower Crowd Tendencies",
    timing: "Late January, early February, and select early September weeks",
    note: "Strong fit for flexible travelers who value shorter waits and easier pacing.",
  },
  {
    season: "Moderate Crowd Periods",
    timing: "Late April to early May and select late August windows",
    note: "Good balance when combined with smart ride and dining strategy.",
  },
  {
    season: "High Crowd Seasons",
    timing: "Holiday weeks, spring break, and major event windows",
    note: "Requires stronger planning around reservations and park-day sequencing.",
  },
];

export const metadata: Metadata = buildPageMetadata(
  "Disney and Universal Crowd Calendar Guide",
  "Seasonal Disney and Universal crowd guidance to help choose better travel windows and planning strategies.",
  "/planning-tools/crowd-calendar"
);

export default function CrowdCalendarPage() {
  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tool
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Crowd Calendar Guide
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Crowd levels change every year, but seasonal tendencies can still help you pick better
            travel windows and set realistic expectations.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4">
          {crowdWindows.map((window) => (
            <article key={window.season} className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="mb-2 text-2xl font-semibold text-midnight">{window.season}</h2>
              <p className="mb-4 text-charcoal/80">{window.timing}</p>
              <p className="leading-8 text-charcoal/80">{window.note}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Need help picking your best dates?"
        description="Share your date flexibility and goals, and we will recommend the best-fit travel windows."
        primaryButtonText="Plan Around Better Dates"
        primaryButtonLink="/contact?source=crowd-calendar"
      />
    </main>
  );
}
