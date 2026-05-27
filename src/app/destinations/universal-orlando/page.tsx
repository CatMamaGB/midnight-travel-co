import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Universal Orlando Travel Agent | Express Pass Strategy + Itinerary Planning",
  "Plan Universal Orlando with expert support for resort choices, Express Pass value, and ride-focused park-day strategy.",
  "/destinations/universal-orlando",
  ["universal orlando travel agent", "universal vacation planner", "express pass strategy"]
);

export default function UniversalOrlandoPage() {
  return (
    <ServicePageTemplate
      title="Universal Orlando Travel Agent"
      subtitle="Express Pass + Itinerary Planning"
      heroDescription="A Universal Orlando plan built around thrill priorities, wait-time strategy, and resort advantages so your park days move faster and feel easier."
      included={[
        {
          title: "Ride Priority Planning",
          description:
            "We structure your days around must-do attractions, park opening strategy, and realistic pacing.",
        },
        {
          title: "Express Pass Guidance",
          description:
            "We help decide when Express Pass delivers strong value based on dates, crowds, and party type.",
        },
        {
          title: "Hotel & Bundle Support",
          description:
            "Compare on-site and partner hotels with bundle options to find the strongest package path.",
        },
      ]}
      whoItsFor={{
        title: "Thrill Seekers, Teens, and Mixed-Age Groups",
        description:
          "Universal Orlando works best when your itinerary reflects ride intensity, downtime needs, and hotel convenience from the start.",
      }}
      premiumFocus={{
        title: "Universal Orlando Priority Decisions",
        description: "Key planning choices that improve park efficiency",
        items: [
          "Islands of Adventure vs Universal Studios split",
          "Express Pass and Early Entry timing",
          "Hagrid and VelociCoaster ride strategy",
          "Resort tier selection for convenience",
          "Dining and CityWalk pacing",
          "Multi-day itinerary sequencing",
        ],
      }}
      cta={{
        title: "Ready to Plan Universal Orlando?",
        description:
          "Explore Universal deal windows first, then request a practical advisor-built itinerary for your exact trip goals.",
        primaryButtonText: "Review Universal Deals",
        primaryButtonLink: "/special-offers#universal-deals",
        secondaryButtonText: "Plan My Universal Vacation",
        secondaryButtonLink:
          "/contact?source=destination-universal-orlando&destination=Universal%20Orlando&tripType=group-travel",
      }}
    />
  );
}
