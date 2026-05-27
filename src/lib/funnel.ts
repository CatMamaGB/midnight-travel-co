export interface FunnelCard {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}

export interface OfferCard {
  id: string;
  title: string;
  description: string;
  timeline: string;
  ctaHref: string;
}

export const destinationCards: FunnelCard[] = [
  {
    title: "Walt Disney World",
    description:
      "Compare park styles, resort tiers, and itinerary pacing for a smoother Orlando Disney vacation.",
    href: "/destinations/disney-world",
    ctaLabel: "Explore Disney World",
  },
  {
    title: "Disneyland",
    description:
      "Find out when Disneyland is the better fit for shorter trips, adults-only escapes, and first-timers.",
    href: "/destinations/disneyland",
    ctaLabel: "Explore Disneyland",
  },
  {
    title: "Universal Orlando",
    description:
      "Build a trip around thrill rides, Express Pass strategy, and resort options that match your pace.",
    href: "/destinations/universal-orlando",
    ctaLabel: "Explore Universal Orlando",
  },
  {
    title: "Universal Hollywood",
    description:
      "Plan a studio-focused California getaway with curated park strategy and city add-on ideas.",
    href: "/destinations/universal-hollywood",
    ctaLabel: "Explore Universal Hollywood",
  },
  {
    title: "Disney Cruise Line",
    description:
      "Pair Disney magic with ocean itineraries and concierge-level cruise planning support.",
    href: "/destinations/disney-cruise-line",
    ctaLabel: "Explore Disney Cruise Line",
  },
  {
    title: "Aulani",
    description:
      "Blend resort relaxation with Disney service standards for a premium Hawaii family escape.",
    href: "/destinations/aulani",
    ctaLabel: "Explore Aulani",
  },
];

export const vacationTypeCards: FunnelCard[] = [
  {
    title: "Families With Kids",
    description:
      "Age-aware park plans, flexible dining, and nap-friendly pacing built around your family dynamic.",
    href: "/vacation-types/families",
    ctaLabel: "Plan a Family Trip",
  },
  {
    title: "Adults Only Trips",
    description:
      "Elevated resort and dining recommendations for couples and friends who want a polished trip.",
    href: "/vacation-types/adults-only",
    ctaLabel: "Plan an Adults-Only Trip",
  },
  {
    title: "Luxury Theme Park Travel",
    description:
      "Premium resort, VIP tour, and concierge planning options for travelers who value elevated details.",
    href: "/vacation-types/luxury",
    ctaLabel: "Plan a Luxury Trip",
  },
  {
    title: "First-Time Visitors",
    description:
      "Guided destination selection and park strategy so you can avoid overwhelm and plan confidently.",
    href: "/vacation-types/first-time-visitors",
    ctaLabel: "Plan Your First Trip",
  },
  {
    title: "Honeymoons",
    description:
      "Romance-forward resort, dining, and activity recommendations that still keep logistics easy.",
    href: "/vacation-types/honeymoons",
    ctaLabel: "Plan a Honeymoon",
  },
  {
    title: "Group Travel",
    description:
      "Structured planning support for milestones, reunions, and corporate trips with multiple stakeholders.",
    href: "/vacation-types/group-travel",
    ctaLabel: "Plan Group Travel",
  },
];

export const planningToolCards: FunnelCard[] = [
  {
    title: "Budget Calculator",
    description:
      "Estimate realistic trip ranges for Disney and Universal vacations by party size and travel style.",
    href: "/planning-tools/budget-calculator",
    ctaLabel: "Open Calculator",
  },
  {
    title: "Dining Guide",
    description:
      "Identify reservation priorities and dining strategy by destination, age range, and trip goals.",
    href: "/planning-tools/dining-guide",
    ctaLabel: "View Dining Guide",
  },
  {
    title: "Packing Lists",
    description:
      "Use practical family, adults-only, and summer/rainy season checklists for smoother park days.",
    href: "/planning-tools/packing-lists",
    ctaLabel: "View Packing Lists",
  },
  {
    title: "Crowd Calendar",
    description:
      "Learn which seasons and event windows usually offer better park flow and value opportunities.",
    href: "/planning-tools/crowd-calendar",
    ctaLabel: "View Crowd Guide",
  },
  {
    title: "Ride Height Guide",
    description:
      "Check attraction height requirements to set better expectations before your family arrives.",
    href: "/planning-tools/ride-height-guide",
    ctaLabel: "View Ride Heights",
  },
  {
    title: "Lightning Lane Guide",
    description:
      "Understand where Lightning Lane saves time and where other strategies create better value.",
    href: "/planning-tools/lightning-lane-guide",
    ctaLabel: "View Guide",
  },
];

export const specialOfferCards: OfferCard[] = [
  {
    id: "disney-discounts",
    title: "Disney Discounts",
    description:
      "Limited-time room and ticket combinations for Walt Disney World and Disneyland select dates.",
    timeline: "Rolling offers, updated weekly",
    ctaHref: "/contact?source=special-offers&destination=Disney%20Destinations",
  },
  {
    id: "universal-deals",
    title: "Universal Deals",
    description:
      "Bundle options with preferred hotels and ticket packages for Universal Orlando and Hollywood.",
    timeline: "Seasonal and event-driven",
    ctaHref: "/contact?source=special-offers&destination=Universal%20Destinations",
  },
  {
    id: "seasonal-offers",
    title: "Seasonal Offers",
    description:
      "Holiday, spring break, and shoulder-season pricing opportunities based on current inventory.",
    timeline: "Quarterly refresh",
    ctaHref: "/contact?source=special-offers&tripType=first-time-visitors",
  },
  {
    id: "kids-free-promos",
    title: "Kids Free Promos",
    description:
      "Select promotions that lower per-child package cost for qualifying family travel windows.",
    timeline: "Date restricted",
    ctaHref: "/contact?source=special-offers&tripType=families",
  },
  {
    id: "dining-plans",
    title: "Dining Plan Offers",
    description:
      "Dining-credit and plan opportunities paired with park and resort recommendations for your group.",
    timeline: "Offer-specific windows",
    ctaHref: "/contact?source=special-offers&interests=dining",
  },
];

export const planningProcess = [
  {
    title: "Tell Us About Your Trip",
    description:
      "Share destination ideas, travel dates, budget range, and who is traveling in your party.",
  },
  {
    title: "We Build Recommendations",
    description:
      "We compare destinations, resorts, and itinerary structures based on your travel style.",
  },
  {
    title: "We Finalize & Book",
    description:
      "Once your package direction is approved, we lock in reservations and map your strategy.",
  },
  {
    title: "You Travel With Support",
    description:
      "You leave with a clear plan and advisor support for updates, tips, and last-mile guidance.",
  },
] as const;

export const tripTypeTestimonials = [
  {
    type: "Families",
    quote:
      "Our Disney World trip with a 4-year-old and 8-year-old felt effortless. The pacing, dining, and park strategy were exactly what we needed.",
    author: "Jenna P.",
  },
  {
    type: "Adults Only",
    quote:
      "We wanted EPCOT, Universal, and great restaurants without overplanning. The recommendations were spot on and easy to follow.",
    author: "Kim & Alex",
  },
  {
    type: "Group Travel",
    quote:
      "Planning a 14-person celebration seemed impossible until we had a clear itinerary and booking strategy. It ran smoothly start to finish.",
    author: "The Campbell Family",
  },
] as const;
