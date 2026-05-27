import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Disney and Universal Group Travel",
  "Group travel planning for Disney and Universal trips, celebrations, and coordinated multi-party itineraries.",
  "/vacation-types/group-travel"
);

export default function GroupTravelVacationTypePage() {
  return (
    <ServicePageTemplate
      title="Group Travel"
      subtitle="Vacation Type"
      heroDescription="Structured group travel planning for celebrations, reunions, and team trips where smooth coordination matters as much as destination choice."
      included={[
        {
          title: "Group Coordination Support",
          description:
            "Manage logistics and decisions for multiple travelers without overwhelming the trip organizer.",
        },
        {
          title: "Destination and Resort Fit",
          description:
            "Match your group size and priorities with destination options that can support your pace.",
        },
        {
          title: "Milestone and Event Integration",
          description:
            "Build in celebration moments and group-friendly experiences while keeping the plan organized.",
        },
      ]}
      whoItsFor={{
        title: "Large Families, Friend Groups, and Corporate Retreats",
        description:
          "Best for trips with multiple stakeholders, varied preferences, and higher logistics complexity.",
      }}
      premiumFocus={{
        title: "Group Planning Priorities",
        description: "The planning decisions that prevent group-travel friction",
        items: [
          "Room and party structure strategy",
          "Group-friendly itinerary pacing",
          "Dining and activity coordination",
          "Arrival and departure logistics",
          "Budget alignment across travelers",
          "Host workload reduction",
        ],
      }}
      cta={{
        title: "Planning for a Group?",
        primaryButtonText: "Start Group Trip Planning",
        primaryButtonLink: "/contact?source=vacation-type-group-travel&tripType=group-travel",
      }}
    />
  );
}
