import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";

const lightningLaneFramework = [
  {
    title: "Prioritize By Wait-Time Risk",
    description:
      "Use paid skip-the-line options for the attractions that regularly produce the highest standby delays.",
  },
  {
    title: "Do Not Buy It Blindly",
    description:
      "Lightning Lane value depends on your dates, age range, and how many top-tier rides you plan to do.",
  },
  {
    title: "Pair It With Park Sequencing",
    description:
      "The strongest strategy combines reservation timing, rope drop planning, and a realistic midday reset.",
  },
];

export const metadata: Metadata = buildPageMetadata(
  "Lightning Lane Planning Guide",
  "Lightning Lane strategy guidance for Disney vacations including value checks and itinerary integration.",
  "/planning-tools/lightning-lane-guide"
);

export default function LightningLaneGuidePage() {
  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tool
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Lightning Lane Guide
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Understand when Lightning Lane improves your trip and when other strategy choices deliver
            better value.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {lightningLaneFramework.map((item) => (
            <article key={item.title} className="rounded-xl bg-white p-7 shadow-sm">
              <h2 className="mb-3 text-2xl font-semibold text-midnight">{item.title}</h2>
              <p className="leading-8 text-charcoal/80">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Need a Lightning Lane plan for your exact dates?"
        description="We can map a day-by-day strategy for ride priorities, reservation timing, and budget fit."
        primaryButtonText="Build My Park Strategy"
        primaryButtonLink="/contact?source=lightning-lane-guide&destination=Walt%20Disney%20World"
      />
    </main>
  );
}
