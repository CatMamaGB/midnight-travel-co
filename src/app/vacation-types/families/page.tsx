import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Family Disney and Universal Vacations",
  "Family-focused Disney and Universal vacation planning with age-aware recommendations, pacing support, and itinerary strategy.",
  "/vacation-types/families"
);

export default function FamilyVacationTypePage() {
  return (
    <ServicePageTemplate
      title="Families With Kids"
      subtitle="Vacation Type"
      heroDescription="Family trip planning designed around age ranges, realistic pacing, and smoother park days so everyone can enjoy the vacation."
      included={[
        {
          title: "Age-Aware Itinerary Strategy",
          description:
            "We map rides, meals, and break windows around your children's actual rhythm and needs.",
        },
        {
          title: "Resort Fit Matching",
          description:
            "Choose hotels based on convenience, transportation, room layout, and family comfort.",
        },
        {
          title: "Stress-Reduction Support",
          description:
            "We simplify decisions and reduce overwhelm with clear recommendations and next steps.",
        },
      ]}
      whoItsFor={{
        title: "Parents Planning Disney or Universal With Children",
        description:
          "Ideal for families with toddlers through teens who want practical support and better park-day flow.",
      }}
      premiumFocus={{
        title: "Family Planning Priorities",
        description: "The details that have the biggest impact for family travel",
        items: [
          "Nap-friendly park schedules",
          "Ride planning by height and age",
          "Dining reservations that support pacing",
          "Split-day and rest-day strategy",
          "Stroller and transport considerations",
          "Weather and crowd contingency planning",
        ],
      }}
      cta={{
        title: "Ready to Plan Your Family Vacation?",
        primaryButtonText: "Start Family Trip Planning",
        primaryButtonLink: "/contact?source=vacation-type-families&tripType=families",
      }}
    />
  );
}
