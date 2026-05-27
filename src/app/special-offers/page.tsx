import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { specialOfferCards } from "@/lib/funnel";
import { buildPageMetadata } from "@/lib/metadata";
import { SPECIAL_OFFER_LINKS } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata(
  "Special Offers",
  "In-depth Disney and Universal offer guidance with eligibility notes, seasonal timing strategy, and route-specific next steps.",
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
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-10 grid gap-3 md:grid-cols-5">
            {SPECIAL_OFFER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-midnight shadow-sm transition-colors hover:bg-midnight hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 px-4">
          {specialOfferCards.map((offer) => (
            <article key={offer.id} id={offer.id} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-6 h-1 w-14 rounded-full bg-gold" />
              <div className="mb-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
                <div>
                  <h2 className="mb-3 text-2xl font-semibold tracking-tight text-midnight md:text-3xl">
                    {offer.title}
                  </h2>
                  <p className="mb-4 leading-8 text-charcoal/80">{offer.description}</p>
                  <p className="mb-2 text-sm font-medium uppercase tracking-[0.15em] text-charcoal/60">
                    Best for
                  </p>
                  <p className="mb-5 leading-8 text-charcoal/80">{offer.whoItsFor}</p>
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-charcoal/60">
                    {offer.timeline}
                  </p>
                </div>
                <div className="rounded-xl border border-silver/60 p-6">
                  <h3 className="mb-3 text-lg font-semibold text-midnight">Offer details</h3>
                  <ul className="mb-5 space-y-3 text-charcoal/80">
                    {offer.offerDetails.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="text-gold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="mb-2 text-base font-semibold text-midnight">Eligibility notes</h4>
                  <ul className="space-y-2 text-charcoal/80">
                    {offer.eligibility.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-gold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8 rounded-xl bg-cloud p-6">
                <h3 className="mb-3 text-lg font-semibold text-midnight">Stacking strategy</h3>
                <ul className="space-y-2 text-charcoal/80">
                  {offer.stackingTips.map((tip) => (
                    <li key={tip} className="flex gap-2">
                      <span className="text-gold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-lg font-semibold text-midnight">Related resources</h3>
                <div className="grid gap-3 md:grid-cols-3">
                  {offer.relatedLinks.map((relatedLink) => (
                    <Link
                      key={relatedLink.href}
                      href={relatedLink.href}
                      className="rounded-lg border border-silver/60 px-4 py-3 text-sm font-medium text-midnight transition-colors hover:bg-midnight hover:text-white"
                    >
                      {relatedLink.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={offer.primaryHref}
                  className="inline-flex rounded-md bg-midnight px-5 py-3 font-medium text-white transition-colors hover:bg-royal"
                >
                  {offer.primaryLabel}
                </Link>
                <Link
                  href={offer.secondaryHref}
                  className="inline-flex rounded-md border border-midnight px-5 py-3 font-medium text-midnight transition-colors hover:bg-midnight hover:text-white"
                >
                  {offer.secondaryLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            How to evaluate offer quality
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Compare total package value, not just headline discount percentage.",
              "Validate crowd and weather fit before selecting low-price windows.",
              "Confirm resort location and park strategy still support your goals.",
              "Use dining and ride planning tools to test if the offer fits real usage.",
            ].map((item) => (
              <article key={item} className="rounded-xl border border-silver/60 p-6">
                <p className="leading-7 text-charcoal/80">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            Special offers FAQ
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "How often do offer categories change?",
                answer:
                  "Offer categories stay consistent, but eligibility, inventory, and travel windows can change quickly. We monitor updates continuously.",
              },
              {
                question: "Can I combine multiple promotions?",
                answer:
                  "Sometimes, but stacking rules vary by supplier and package type. We compare valid combinations and trade-offs before booking.",
              },
              {
                question: "Should I pick the cheapest offer by default?",
                answer:
                  "Not always. The strongest offer is the one that still supports your destination fit, pacing, and must-have experiences.",
              },
              {
                question: "When should I contact an advisor for matching?",
                answer:
                  "After you identify your best destination and planning path. That usually produces a more accurate and useful offer match.",
              },
            ].map((faq) => (
              <article key={faq.question} className="rounded-xl bg-white p-7 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold text-midnight">{faq.question}</h3>
                <p className="leading-8 text-charcoal/80">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to turn offer research into a custom trip plan?"
        description="Choose your destination and planning tool path first, then request advisor matching for your exact dates and priorities."
        primaryButtonText="Compare Destinations"
        primaryButtonLink="/destinations"
        secondaryButtonText="Get a Custom Offer Quote"
        secondaryButtonLink="/contact?source=special-offers"
      />
    </main>
  );
}
