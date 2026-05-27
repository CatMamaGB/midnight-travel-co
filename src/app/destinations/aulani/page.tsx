import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Aulani Vacations",
  "Plan a Disney Aulani vacation in Hawaii with resort guidance, activity strategy, and concierge-level support.",
  "/destinations/aulani"
);

export default function AulaniPage() {
  return (
    <ServicePageTemplate
      title="Aulani"
      subtitle="Destination Guide"
      heroDescription="A resort-first Hawaii planning path for travelers who want a balance of Disney service, island relaxation, and curated family experiences."
      included={[
        {
          title: "Resort-Centered Planning",
          description:
            "Build your schedule around pools, beach time, and signature experiences without overbooking your days.",
        },
        {
          title: "Island Activity Guidance",
          description:
            "Pair Aulani resort time with select Oahu excursions that match your travel style and energy.",
        },
        {
          title: "Trip Flow Coordination",
          description:
            "Plan arrival timing, room needs, and family logistics for a smoother Hawaii vacation.",
        },
      ]}
      whoItsFor={{
        title: "Families and Couples Wanting Disney Hospitality in Hawaii",
        description:
          "Aulani is a strong fit for travelers who want a polished Hawaii resort stay with family-friendly programming and simpler planning.",
      }}
      premiumFocus={{
        title: "Aulani Planning Priorities",
        description: "What to decide early for a better Oahu vacation",
        items: [
          "Best travel window by weather and crowds",
          "Room category and view preferences",
          "Resort activity reservation timing",
          "Spa, dining, and beach day balancing",
          "Excursion planning from Ko Olina",
          "Length-of-stay recommendations",
        ],
      }}
      cta={{
        title: "Ready to Plan Aulani?",
        description: "Tell us your travel style and we will design a balanced Aulani itinerary.",
        primaryButtonText: "Start Planning Aulani",
        primaryButtonLink: "/contact?source=destination-aulani&destination=Aulani&tripType=luxury",
      }}
    />
  );
}
