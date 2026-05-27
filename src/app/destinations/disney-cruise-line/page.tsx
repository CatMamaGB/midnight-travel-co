import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Disney Cruise Line Vacations",
  "Plan Disney Cruise Line vacations with itinerary guidance, stateroom recommendations, and family-friendly sailing strategy.",
  "/destinations/disney-cruise-line"
);

export default function DisneyCruiseLinePage() {
  return (
    <ServicePageTemplate
      title="Disney Cruise Line"
      subtitle="Destination Guide"
      heroDescription="Cruise planning support that combines Disney service with practical itinerary, stateroom, and excursion strategy for your family."
      included={[
        {
          title: "Sailing Selection",
          description:
            "Compare itineraries, ports, and seasonal windows based on your preferred trip pace and budget.",
        },
        {
          title: "Stateroom Guidance",
          description:
            "Match room type and deck location to your family size, routine, and comfort preferences.",
        },
        {
          title: "Onboard + Port Planning",
          description:
            "Prioritize onboard experiences, dining rotations, and port-day plans before final booking.",
        },
      ]}
      whoItsFor={{
        title: "Disney Families Wanting a Cruise Experience",
        description:
          "Ideal for families who want Disney quality and entertainment with the convenience of unpacking once.",
      }}
      premiumFocus={{
        title: "Cruise Planning Highlights",
        description: "Top choices that shape your Disney Cruise outcome",
        items: [
          "Itinerary length and ship selection",
          "Stateroom type and location",
          "Dining rotation and specialty experiences",
          "Port excursion fit by age range",
          "Pre/post cruise stay options",
          "Budget balancing for extras",
        ],
      }}
      cta={{
        title: "Ready to Plan Disney Cruise Line?",
        description: "Share your preferred dates and group details for a custom cruise recommendation.",
        primaryButtonText: "Plan My Cruise",
        primaryButtonLink:
          "/contact?source=destination-disney-cruise&destination=Disney%20Cruise%20Line&tripType=families",
      }}
    />
  );
}
