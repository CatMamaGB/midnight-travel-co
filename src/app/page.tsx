import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Benefits from "@/components/Benefits";
import FAQPreview from "@/components/FAQPreview";
import CTASection from "@/components/CTASection";
import FunnelCardGrid from "@/components/FunnelCardGrid";
import PlanningProcessSection from "@/components/PlanningProcessSection";
import TripTypeTestimonials from "@/components/TripTypeTestimonials";
import { destinationCards, vacationTypeCards } from "@/lib/funnel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBadges />
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
              Choose Your Destination
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-charcoal/80">
              Compare Disney and Universal destination options, then move into a customized planning
              flow.
            </p>
          </div>
          <FunnelCardGrid cards={destinationCards.slice(0, 4)} columns="two" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
              Pick Your Vacation Type
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-charcoal/80">
              Not sure what fits best? Start with your travel style and we will guide the rest.
            </p>
          </div>
          <FunnelCardGrid cards={vacationTypeCards.slice(0, 4)} columns="two" />
        </div>
      </section>

      <Benefits />
      <PlanningProcessSection />
      <TripTypeTestimonials />
      <FAQPreview />
      <CTASection
        title="Dream, Explore, Compare, Then Book With Confidence"
        description="Start planning with a guided inquiry flow built for Disney and Universal travelers."
        primaryButtonText="Plan My Vacation"
        primaryButtonLink="/contact?source=homepage-cta"
        secondaryButtonText="Get a Custom Quote"
        secondaryButtonLink="/contact?source=homepage-cta&tripType=first-time-visitors"
      />
    </main>
  );
}
