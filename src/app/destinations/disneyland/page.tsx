import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Disneyland Vacations",
  "Compare Disneyland hotels, park strategy, and short-trip planning options with expert support from The Midnight Travel Co.",
  "/destinations/disneyland"
);

export default function DisneylandPage() {
  return (
    <ServicePageTemplate
      title="Disneyland"
      subtitle="Destination Guide"
      heroDescription="A streamlined Disneyland planning approach for travelers who want Disney magic with a more walkable, compact footprint and less complexity."
      included={[
        {
          title: "Compact Park Strategy",
          description:
            "We map park hopping and ride priorities for shorter trips so you can still hit your must-do experiences.",
        },
        {
          title: "Hotel Fit Recommendations",
          description:
            "Pick the right Disneyland-area hotel based on walkability, room needs, and budget.",
        },
        {
          title: "California Add-On Planning",
          description:
            "We help connect Disneyland with nearby dining, entertainment, and Southern California extensions.",
        },
      ]}
      whoItsFor={{
        title: "Adults, Couples, and First-Time Disney Travelers",
        description:
          "Disneyland is often a strong fit for shorter visits, adults-only travel, and travelers who want Disney without Disney World scale.",
      }}
      premiumFocus={{
        title: "Disneyland Planning Highlights",
        description: "What matters most for a smooth California Disney itinerary",
        items: [
          "Park Hopper pacing for 2-3 day trips",
          "Rope drop and evening strategy",
          "Dining reservation priorities",
          "On-site vs off-site hotel tradeoffs",
          "Genie+ and Lightning Lane fit",
          "Trip combinations with local attractions",
        ],
      }}
      cta={{
        title: "Ready to Plan Disneyland?",
        description: "Start with your dates and priorities, and we will build your custom itinerary strategy.",
        primaryButtonText: "Plan My Disneyland Vacation",
        primaryButtonLink:
          "/contact?source=destination-disneyland&destination=Disneyland&tripType=first-time-visitors",
      }}
    />
  );
}
