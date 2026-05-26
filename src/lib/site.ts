export const SITE_NAME = "The Midnight Travel Co.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://themidnighttravelco.com";
export const SITE_DESCRIPTION =
  "Luxury travel planning for Disney, Universal, VIP concierge services, special occasions, and group experiences.";
export const CONTACT_EMAIL = "travel.midnightco@gmail.com";
export const LEGAL_LAST_UPDATED = "May 22, 2026";
export const HOST_AGENCY_NAME = "Mainstreet Travel";

export const PRIMARY_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_LINKS = [
  { href: "/disney", label: "Disney" },
  { href: "/universal", label: "Universal" },
  { href: "/vip-concierge", label: "VIP Concierge" },
  { href: "/special-events", label: "Special Events" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclosures", label: "Disclosures" },
  { href: "/accessibility", label: "Accessibility" },
] as const;
