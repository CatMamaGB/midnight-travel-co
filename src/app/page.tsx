import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Benefits from "@/components/Benefits";
import FAQPreview from "@/components/FAQPreview";
import CTASection from "@/components/CTASection";
import FunnelCardGrid from "@/components/FunnelCardGrid";
import PlanningProcessSection from "@/components/PlanningProcessSection";
import ServiceCards from "@/components/ServiceCards";
import TripTypeTestimonials from "@/components/TripTypeTestimonials";
import { destinationCards, planningToolCards, specialOfferCards, vacationTypeCards } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Disney & Universal Vacation Planner",
  "Plan first-time Disney and Universal family vacations with itinerary strategy, dining guidance, Lightning Lane and Express Pass support, and advisor-backed booking help.",
  "/",
  ["disney vacation planner", "universal vacation planner", "first time disney planner"]
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBadges />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-royal">
              Problem Solved
            </p>
            <h2 className="mb-5 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
              Theme park planning should not feel like a second job
            </h2>
            <p className="text-lg leading-8 text-charcoal/80">
              The Midnight Travel Co. compares destinations, shapes realistic park-day strategy,
              and matches your trip to active offers so you can move from overwhelmed to confident.
            </p>
          </div>
          <div className="rounded-2xl bg-cloud p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-semibold text-midnight">We help you avoid:</h3>
            <ul className="space-y-4 text-charcoal/85">
              {[
                "Genie+, Lightning Lane, and Universal Express confusion",
                "Dining reservation stress and overbooked park days",
                "Overpaying because dates, offers, and resort fit were not compared first",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#planning-process"
              className="mt-8 inline-flex rounded-md bg-midnight px-5 py-3 font-medium text-white transition-colors hover:bg-royal"
            >
              See How Planning Works
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
              Choose Your Destination
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-charcoal/80">
              Compare park style, resort tiers, and pacing, then open the guide that matches your trip.
            </p>
          </div>
          <FunnelCardGrid cards={destinationCards.slice(0, 4)} columns="two" />
          <div className="mt-10 text-center">
            <Link
              href="/destinations"
              className="inline-flex rounded-md border border-midnight/15 bg-white px-5 py-3 font-medium text-midnight transition-colors hover:border-midnight hover:bg-midnight hover:text-white"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
              Pick Your Vacation Type
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-charcoal/80">
              Start with who is traveling. We will narrow destinations, resorts, and daily pace from there.
            </p>
          </div>
          <FunnelCardGrid cards={vacationTypeCards.slice(0, 4)} columns="two" />
          <div className="mt-10 text-center">
            <Link
              href="/vacation-types"
              className="inline-flex rounded-md border border-midnight/15 px-5 py-3 font-medium text-midnight transition-colors hover:border-midnight hover:bg-midnight hover:text-white"
            >
              View All Vacation Types
            </Link>
          </div>
        </div>
      </section>

      <ServiceCards />
      <CTASection
        title="Ready for a clearer Disney or Universal plan?"
        description="Share your dates, budget range, and who is traveling. We will recommend a destination and resort direction before booking."
        primaryButtonText="Start Planning My Trip"
        primaryButtonLink="/contact?source=homepage-mid"
        secondaryButtonText="Use the Budget Calculator"
        secondaryButtonLink="/planning-tools/budget-calculator"
      />
      <Benefits />
      <PlanningProcessSection id="planning-process" />

      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
              Plan Smarter Before You Book
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-charcoal/80">
              Use high-intent tools to clarify budget, timing, and park strategy before requesting a custom plan.
            </p>
          </div>
          <FunnelCardGrid
            cards={planningToolCards.filter((card) =>
              ["Budget Calculator", "Crowd Calendar", "Lightning Lane Guide"].includes(card.title)
            )}
            columns="three"
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
              Current Offer Categories We Track
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-charcoal/80">
              Compare Disney, Universal, seasonal, family, and dining-related offer paths before you request a quote.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {specialOfferCards.slice(0, 3).map((offer) => (
              <Link
                key={offer.id}
                href={`/special-offers#${offer.id}`}
                className="rounded-xl border border-silver/60 px-6 py-5 text-midnight transition-colors hover:bg-midnight hover:text-white"
              >
                <span className="text-lg font-semibold">{offer.title}</span>
                <span className="mt-2 block text-sm opacity-80">{offer.timeline}</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/special-offers"
              className="inline-flex rounded-md bg-midnight px-5 py-3 font-medium text-white transition-colors hover:bg-royal"
            >
              Browse All Special Offers
            </Link>
          </div>
        </div>
      </section>

      <TripTypeTestimonials />
      <FAQPreview />
      <CTASection
        title="Get a Disney or Universal plan you can trust"
        description="Tell us your destination ideas, travel dates, and budget range. We will follow up with tailored recommendations within 24-48 hours."
        primaryButtonText="Start Planning My Trip"
        primaryButtonLink="/contact?source=homepage-cta"
        secondaryButtonText="Get a Free Custom Quote"
        secondaryButtonLink="/contact?source=homepage-cta&mode=quote&tripType=first-time-visitors"
      />
    </main>
  );
}
