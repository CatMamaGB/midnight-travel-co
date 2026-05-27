import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Walt Disney World Vacations",
  "Plan a Walt Disney World vacation with park-by-park strategy, resort matching, dining support, and concierge-level planning.",
  "/destinations/disney-world"
);

export default function DisneyWorldPage() {
  return (
    <ServicePageTemplate
      title="Walt Disney World"
      subtitle="Destination Guide"
      heroDescription="A fully customized Disney World plan built around your group size, age range, budget, and pace. We help you avoid planning overload and focus on a smoother vacation."
      included={[
        {
          title: "Park-by-Park Strategy",
          description:
            "We map which parks to prioritize, where to build rest windows, and how to structure each day for your group dynamic.",
        },
        {
          title: "Resort Match Guidance",
          description:
            "Choose the best fit resort based on transportation, convenience, amenities, and budget tier.",
        },
        {
          title: "Dining & Ride Planning",
          description:
            "We help prioritize dining reservations, Lightning Lane usage, and high-value experiences.",
        },
      ]}
      whoItsFor={{
        title: "Families, First-Timers, and Multi-Generational Groups",
        description:
          "Disney World can be incredible when the strategy fits your travelers. This planning path is built for groups who want strong recommendations and less stress.",
      }}
      premiumFocus={{
        title: "Popular Disney World Planning Priorities",
        description: "High-impact decisions that shape your overall experience",
        items: [
          "Magic Kingdom vs EPCOT day allocation",
          "Monorail, Skyliner, and resort transit fit",
          "Character dining vs quick-service balance",
          "Lightning Lane priorities by age range",
          "Rest day and pool day placement",
          "Special event and seasonal planning windows",
        ],
      }}
      cta={{
        title: "Ready to Plan Walt Disney World?",
        description:
          "Review Disney-focused offers and strategy tools first, then request your custom Disney World roadmap.",
        primaryButtonText: "Review Disney Offers",
        primaryButtonLink: "/special-offers#disney-discounts",
        secondaryButtonText: "Plan My Disney World Vacation",
        secondaryButtonLink:
          "/contact?source=destination-disney-world&destination=Walt%20Disney%20World&tripType=families",
      }}
    />
  );
}
