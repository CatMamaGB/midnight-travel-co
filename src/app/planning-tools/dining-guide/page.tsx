import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";

const diningPriorityFramework = [
  {
    title: "Pick One Signature Meal Per Day",
    description:
      "Anchor each day with one dining priority and keep other meals flexible so reservations do not overcontrol your itinerary.",
  },
  {
    title: "Match Reservations to Park Flow",
    description:
      "Book meals near where you will already be, instead of adding long transportation windows that break momentum.",
  },
  {
    title: "Use Character Meals Strategically",
    description:
      "For families with younger kids, character meals can replace multiple standalone character waits.",
  },
  {
    title: "Protect Recovery Time",
    description:
      "Avoid late heavy dinners after intense park days unless your group is used to long activity windows.",
  },
];

export const metadata: Metadata = buildPageMetadata(
  "Disney and Universal Dining Guide",
  "Plan dining reservations and meal pacing with practical guidance for Disney and Universal vacations.",
  "/planning-tools/dining-guide"
);

export default function DiningGuidePage() {
  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Planning Tool
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Dining Strategy Guide
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Use this framework to build reservations around your vacation rhythm instead of letting
            reservations control the whole trip.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2">
          {diningPriorityFramework.map((item) => (
            <article key={item.title} className="rounded-xl bg-white p-7 shadow-sm">
              <h2 className="mb-3 text-2xl font-semibold text-midnight">{item.title}</h2>
              <p className="leading-8 text-charcoal/80">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Need dining recommendations matched to your itinerary?"
        description="We can map reservations, park flow, and pacing for your specific travel dates and group style."
        primaryButtonText="Start Planning"
        primaryButtonLink="/contact?source=dining-guide&interests=dining"
      />
    </main>
  );
}
