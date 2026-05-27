import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";

const packingLists = [
  {
    title: "Family Park Day Essentials",
    items: [
      "Cooling towels and refillable water bottles",
      "Portable charger and charging cables",
      "Rain ponchos and compact stroller cover",
      "Kid snacks and backup outfit",
    ],
  },
  {
    title: "Adults-Only Trip Essentials",
    items: [
      "Comfortable footwear for long park days",
      "Light evening layer for dining and shows",
      "Crossbody bag with quick-access essentials",
      "Reservation confirmations and ID backup",
    ],
  },
  {
    title: "Summer + Rain Season Additions",
    items: [
      "Quick-dry clothing and socks",
      "Mini fan and electrolyte packets",
      "Waterproof phone pouch",
      "Zipper pouches for electronics",
    ],
  },
];

export const metadata: Metadata = buildPageMetadata(
  "Disney and Universal Packing Lists",
  "Practical Disney and Universal packing lists for families, adults-only trips, and warm-weather park travel.",
  "/planning-tools/packing-lists"
);

export default function PackingListsPage() {
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

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          {packingLists.map((list) => (
            <article key={list.title} className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-midnight">{list.title}</h2>
              <ul className="space-y-3 text-charcoal/80">
                {list.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Need a packing strategy matched to your itinerary?"
        description="Tell us your destination and travel dates and we will include custom prep guidance in your trip plan."
        primaryButtonText="Start Planning"
        primaryButtonLink="/contact?source=packing-lists"
      />
    </main>
  );
}
