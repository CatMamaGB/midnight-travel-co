import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { serviceSummaries } from "@/lib/services";

export const metadata: Metadata = buildPageMetadata(
  "Services",
  "Explore Disney, Universal, VIP concierge, special event, family, and group travel planning services from The Midnight Travel Co.",
  "/services"
);

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Services
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Travel planning designed around how you actually travel
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Whether you are planning a theme park vacation, a milestone celebration, a VIP escape,
            or a polished group experience, we shape the details around your priorities, pace, and
            budget.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          {serviceSummaries.map((service) => (
            <article key={service.href} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className={`mb-5 h-1 w-16 rounded-full ${service.accentColor}`} />
              <h2 className="mb-3 text-3xl font-semibold tracking-tight text-midnight">
                {service.title}
              </h2>
              <p className="mb-6 leading-8 text-charcoal/80">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex rounded-md bg-midnight px-5 py-3 font-medium text-white transition-colors hover:bg-royal"
              >
                Explore {service.title}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white px-6 py-12 text-center shadow-sm md:px-12">
          <h2 className="mb-4 text-3xl font-semibold text-midnight">
            Need help choosing the right fit?
          </h2>
          <p className="leading-8 text-charcoal/80">
            Share your destination ideas, group type, and travel goals, and we will guide you
            toward the service level that makes the most sense for your trip.
          </p>
        </div>
      </section>

      <CTASection
        title="Start with your travel vision"
        description="Tell us what you are planning and we will build a travel experience around the details that matter most."
        primaryButtonText="Start Planning"
        primaryButtonLink="/contact"
      />
    </main>
  );
}
