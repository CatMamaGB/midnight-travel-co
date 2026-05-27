import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Disney and Universal Honeymoons",
  "Honeymoon travel planning for Disney and Universal destinations with romantic resort and dining recommendations.",
  "/vacation-types/honeymoons"
);

export default function HoneymoonsVacationTypePage() {
  return (
    <ServicePageTemplate
      title="Honeymoons"
      subtitle="Vacation Type"
      heroDescription="Romance-forward honeymoon planning with destination guidance, polished pacing, and elevated details for a memorable first trip together."
      included={[
        {
          title: "Romantic Destination Matching",
          description:
            "Compare Disney and Universal options based on dining, atmosphere, and preferred trip pace.",
        },
        {
          title: "Resort and Dining Priorities",
          description:
            "Build your honeymoon around room category, convenience, and celebration-worthy reservations.",
        },
        {
          title: "Custom Honeymoon Flow",
          description:
            "Balance signature moments with downtime to keep your honeymoon relaxing and meaningful.",
        },
      ]}
      whoItsFor={{
        title: "Couples Wanting a Thoughtful Theme Park Honeymoon",
        description:
          "Ideal for couples who want park magic with a more curated, adult-focused planning approach.",
      }}
      premiumFocus={{
        title: "Honeymoon Planning Focus",
        description: "The details that make honeymoon travel feel elevated",
        items: [
          "Romantic resort recommendations",
          "Signature dining experiences",
          "Celebration add-ons and surprises",
          "Adults-only evening plans",
          "Photo-friendly itinerary moments",
          "Balanced activity and relaxation pacing",
        ],
      }}
      cta={{
        title: "Ready to Plan Your Honeymoon?",
        primaryButtonText: "Plan Our Honeymoon",
        primaryButtonLink: "/contact?source=vacation-type-honeymoons&tripType=honeymoons",
      }}
    />
  );
}
