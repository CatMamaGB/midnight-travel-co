import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Universal Hollywood Vacations",
  "Plan Universal Studios Hollywood with attraction priorities, ticket strategy, and California itinerary support.",
  "/destinations/universal-hollywood"
);

export default function UniversalHollywoodPage() {
  return (
    <ServicePageTemplate
      title="Universal Hollywood"
      subtitle="Destination Guide"
      heroDescription="A Universal Hollywood strategy for travelers who want a high-impact park day with smart scheduling and optional Los Angeles add-ons."
      included={[
        {
          title: "Park Day Structure",
          description:
            "We prioritize rides and experiences based on line patterns and your party's energy level.",
        },
        {
          title: "Ticket & Timing Advice",
          description:
            "Choose the right ticket and arrival strategy to avoid avoidable wait-time bottlenecks.",
        },
        {
          title: "LA Add-On Recommendations",
          description:
            "Pair your park day with nearby neighborhoods and experiences that fit your travel style.",
        },
      ]}
      whoItsFor={{
        title: "California Visitors and Adults-Only Trips",
        description:
          "Universal Hollywood can be ideal for shorter California trips, movie fans, and adult travelers combining theme parks with city experiences.",
      }}
      premiumFocus={{
        title: "Universal Hollywood Planning Focus",
        description: "The decisions that produce a smoother one-to-two-day trip",
        items: [
          "Upper vs Lower Lot ride sequencing",
          "Studio Tour timing strategy",
          "Express Pass value check",
          "Dining and show-time planning",
          "Hotel location near park vs city center",
          "Pairing with Disneyland or LA attractions",
        ],
      }}
      cta={{
        title: "Ready to Plan Universal Hollywood?",
        description: "Get a custom game plan for a smoother park day and better California itinerary flow.",
        primaryButtonText: "Start Planning",
        primaryButtonLink:
          "/contact?source=destination-universal-hollywood&destination=Universal%20Hollywood&tripType=adults-only",
      }}
    />
  );
}
