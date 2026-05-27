export const SITE_NAME = "The Midnight Travel Co.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://themidnighttravelco.com";
export const SITE_DESCRIPTION =
  "Luxury travel planning for Disney, Universal, VIP concierge services, special occasions, and group experiences.";
export const CONTACT_EMAIL = "travel.midnightco@gmail.com";
export const LEGAL_LAST_UPDATED = "May 22, 2026";
export const HOST_AGENCY_NAME = "Mainstreet Travel";

export const PRIMARY_NAV_LINKS = [
  { href: "/destinations", label: "Destinations" },
  { href: "/vacation-types", label: "Vacation Types" },
  { href: "/planning-tools", label: "Planning Tools" },
  { href: "/special-offers", label: "Special Offers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const DESTINATION_LINKS = [
  { href: "/destinations/disney-world", label: "Walt Disney World" },
  { href: "/destinations/disneyland", label: "Disneyland" },
  { href: "/destinations/universal-orlando", label: "Universal Orlando" },
  { href: "/destinations/universal-hollywood", label: "Universal Hollywood" },
  { href: "/destinations/disney-cruise-line", label: "Disney Cruise Line" },
  { href: "/destinations/aulani", label: "Aulani" },
] as const;

export const VACATION_TYPE_LINKS = [
  { href: "/vacation-types/families", label: "Families" },
  { href: "/vacation-types/adults-only", label: "Adults Only" },
  { href: "/vacation-types/luxury", label: "Luxury" },
  { href: "/vacation-types/honeymoons", label: "Honeymoons" },
  { href: "/vacation-types/first-time-visitors", label: "First-Time Visitors" },
  { href: "/vacation-types/group-travel", label: "Group Travel" },
] as const;

export const PLANNING_TOOL_LINKS = [
  { href: "/planning-tools/budget-calculator", label: "Budget Calculator" },
  { href: "/planning-tools/dining-guide", label: "Dining Guide" },
  { href: "/planning-tools/packing-lists", label: "Packing Lists" },
  { href: "/planning-tools/crowd-calendar", label: "Crowd Calendar" },
  { href: "/planning-tools/ride-height-guide", label: "Ride Height Guide" },
  { href: "/planning-tools/lightning-lane-guide", label: "Lightning Lane Guide" },
  { href: "/planning-tools/universal-express-pass-guide", label: "Universal Express Pass Guide" },
] as const;

export const SPECIAL_OFFER_LINKS = [
  { href: "/special-offers#disney-discounts", label: "Disney Discounts" },
  { href: "/special-offers#universal-deals", label: "Universal Deals" },
  { href: "/special-offers#seasonal-offers", label: "Seasonal Offers" },
  { href: "/special-offers#kids-free-promos", label: "Kids Free Promos" },
  { href: "/special-offers#dining-plans", label: "Dining Plan Offers" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclosures", label: "Disclosures" },
  { href: "/accessibility", label: "Accessibility" },
] as const;
