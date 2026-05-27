export interface ServiceSummary {
  title: string;
  description: string;
  href: string;
  accentColor: string;
}

export const serviceSummaries: ServiceSummary[] = [
  {
    title: "Disney World & Disneyland",
    description:
      "Resort and ticket guidance, dining reservations, Lightning Lane strategy, and day-by-day park plans for Disney vacations.",
    href: "/destinations/disney-world",
    accentColor: "bg-gold",
  },
  {
    title: "Universal Orlando & Hollywood",
    description:
      "Express Pass value checks, hotel strategy, early-entry planning, and ride-focused itineraries for Universal trips.",
    href: "/destinations/universal-orlando",
    accentColor: "bg-gold",
  },
  {
    title: "Disney Cruise Add-Ons",
    description:
      "Pair park time with Disney Cruise Line planning, pre-cruise stays, transfers, and family-friendly sailing strategy.",
    href: "/destinations/disney-cruise-line",
    accentColor: "bg-gold",
  },
  {
    title: "Universal Hollywood",
    description:
      "Studio-focused California trips with park strategy, hotel recommendations, and Los Angeles add-on planning.",
    href: "/destinations/universal-hollywood",
    accentColor: "bg-gold",
  },
];
