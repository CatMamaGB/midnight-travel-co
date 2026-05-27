import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "First-Time Disney & Universal Vacation Planner",
  "Get first-time trip support for Disney and Universal with destination comparison, itinerary planning, and booking guidance.",
  "/vacation-types/first-time-visitors",
  ["first time disney planner", "first time universal vacation", "disney vacation planner specialist"]
);

export default function FirstTimeVisitorsVacationTypePage() {
  return (
    <ServicePageTemplate
      title="First-Time Disney & Universal Vacation Planner"
      subtitle="First-Time Visitor Specialist"
      heroDescription="Start with clarity instead of overwhelm. We help first-time Disney and Universal visitors compare options and move quickly to a confident plan."
      included={[
        {
          title: "Destination Comparison Guidance",
          description:
            "Compare Disney and Universal options with practical recommendations for your group and timeline.",
        },
        {
          title: "Step-by-Step Planning Support",
          description:
            "We break down what to prioritize first, what can wait, and what decisions create the best outcome.",
        },
        {
          title: "Simple Booking Roadmap",
          description:
            "Move from idea to confirmed itinerary with a clear process and advisor-backed recommendations.",
        },
      ]}
      whoItsFor={{
        title: "Travelers Planning Their First Park-Focused Vacation",
        description:
          "Best for families, couples, and groups who want guidance navigating Disney or Universal planning complexity.",
      }}
      premiumFocus={{
        title: "First-Time Planning Priorities",
        description: "The highest-value decisions for first-time travelers",
        items: [
          "Choosing Disney vs Universal",
          "Trip length and park count strategy",
          "Resort tier and location fit",
          "Dining reservation timing",
          "Ride planning and skip-the-line strategy",
          "Budget range alignment",
        ],
      }}
      cta={{
        title: "Ready to Plan Your First Trip?",
        description:
          "Start with date and crowd strategy first, then request expert trip matching once your direction is clear.",
        primaryButtonText: "Use Crowd Calendar Guide",
        primaryButtonLink: "/planning-tools/crowd-calendar",
        secondaryButtonText: "Start First-Time Planning",
        secondaryButtonLink:
          "/contact?source=vacation-type-first-time-visitors&tripType=first-time-visitors",
      }}
    />
  );
}
