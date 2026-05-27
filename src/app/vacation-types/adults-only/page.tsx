import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Adults-Only Disney and Universal Vacations",
  "Plan an adults-only Disney or Universal trip with elevated dining, resort fit guidance, and curated itinerary strategy.",
  "/vacation-types/adults-only"
);

export default function AdultsOnlyVacationTypePage() {
  return (
    <ServicePageTemplate
      title="Adults-Only Trips"
      subtitle="Vacation Type"
      heroDescription="A more elevated Disney or Universal experience for couples and friends who want better dining, smarter pacing, and polished trip flow."
      included={[
        {
          title: "Resort and Dining Strategy",
          description:
            "We prioritize properties and reservations that match your preferred atmosphere and budget.",
        },
        {
          title: "Experience-First Itineraries",
          description:
            "Plan around festivals, lounges, nightlife, and key attractions without exhausting all-day schedules.",
        },
        {
          title: "Flexible Trip Design",
          description:
            "Build a vacation that combines high-energy days with downtime and optional upgrades.",
        },
      ]}
      whoItsFor={{
        title: "Couples and Adult Friend Groups",
        description:
          "Best for travelers who want a less kid-centric park strategy with stronger food and resort recommendations.",
      }}
      premiumFocus={{
        title: "Adults-Only Trip Focus",
        description: "High-impact decisions for a better adults-only park vacation",
        items: [
          "EPCOT and nightlife-centered planning",
          "Universal thrill and event strategy",
          "Signature dining reservation windows",
          "Resort location for convenience",
          "Special event integration",
          "Pacing by energy level and trip goals",
        ],
      }}
      cta={{
        title: "Ready to Plan an Adults-Only Escape?",
        primaryButtonText: "Plan My Adults-Only Trip",
        primaryButtonLink: "/contact?source=vacation-type-adults-only&tripType=adults-only",
      }}
    />
  );
}
