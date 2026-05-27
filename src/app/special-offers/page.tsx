import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { specialOfferCards } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Special Offers",
  "Current Disney and Universal offer categories including seasonal promotions, dining incentives, and family-focused package opportunities.",
  "/special-offers"
);

export default function SpecialOffersPage() {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Special Offers
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Disney and Universal offer categories we actively track
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            We monitor promotions and package opportunities so you can plan around real pricing
            windows instead of guessing. Offer details change quickly, so this page is refreshed
            often.
          </p>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.15em] text-charcoal/60">
            Last updated: {today}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          {specialOfferCards.map((offer) => (
            <article key={offer.id} id={offer.id} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-5 h-1 w-14 rounded-full bg-gold" />
              <h2 className="mb-3 text-2xl font-semibold tracking-tight text-midnight">
                {offer.title}
              </h2>
              <p className="mb-5 leading-8 text-charcoal/80">{offer.description}</p>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-charcoal/60">
                {offer.timeline}
              </p>
              <Link
                href={offer.ctaHref}
                className="inline-flex rounded-md bg-midnight px-5 py-3 font-medium text-white transition-colors hover:bg-royal"
              >
                Request an Offer Match
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Want us to match your dates with current promos?"
        description="Tell us your destination, date flexibility, and budget. We will recommend the strongest package path based on active offers."
        primaryButtonText="Get a Custom Quote"
        primaryButtonLink="/contact?source=special-offers"
      />
    </main>
  );
}
