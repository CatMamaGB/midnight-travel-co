import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Luxury Disney and Universal Vacations",
  "Luxury Disney and Universal travel planning with premium resort selection, concierge support, and elevated itinerary strategy.",
  "/vacation-types/luxury"
);

export default function LuxuryVacationTypePage() {
  return (
    <ServicePageTemplate
      title="Luxury Vacations"
      subtitle="Vacation Type"
      heroDescription="Luxury-focused theme park travel planning that balances premium experiences with practical trip flow and concierge-level support."
      included={[
        {
          title: "Premium Resort Guidance",
          description:
            "Compare high-end resorts and room categories for comfort, convenience, and experience quality.",
        },
        {
          title: "VIP Experience Strategy",
          description:
            "Prioritize upgrades such as VIP tours, premium dining, and curated private-style experiences.",
        },
        {
          title: "Concierge-Level Coordination",
          description:
            "Receive elevated planning support from destination comparison through final itinerary details.",
        },
      ]}
      whoItsFor={{
        title: "Travelers Prioritizing Elevated Detail and Convenience",
        description:
          "Great for adults-only escapes, milestone trips, and families seeking a polished premium experience.",
      }}
      premiumFocus={{
        title: "Luxury Planning Priorities",
        description: "Where luxury travelers see the biggest value gains",
        items: [
          "Deluxe resort fit and location",
          "VIP tour and premium access options",
          "Fine dining and lounge sequencing",
          "Private transfer and comfort upgrades",
          "Signature add-ons and celebration touches",
          "Time-saving itinerary architecture",
        ],
      }}
      cta={{
        title: "Ready to Plan a Luxury Theme Park Vacation?",
        primaryButtonText: "Request Luxury Planning",
        primaryButtonLink: "/contact?source=vacation-type-luxury&tripType=luxury",
      }}
    />
  );
}
