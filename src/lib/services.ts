export interface ServiceSummary {
  title: string;
  description: string;
  href: string;
  accentColor: string;
}

export const serviceSummaries: ServiceSummary[] = [
  {
    title: "Disney Experiences",
    description:
      "Magical adventures crafted with attention to every detail. From character dining to Lightning Lane strategy, we create unforgettable moments.",
    href: "/disney",
    accentColor: "bg-gold",
  },
  {
    title: "Universal Studios",
    description:
      "Thrilling theme park experiences and exclusive access. Let us handle the planning so you can focus on the adventure.",
    href: "/universal",
    accentColor: "bg-gold",
  },
  {
    title: "VIP Concierge",
    description:
      "Personalized service that anticipates your needs. Every detail curated, every moment elevated to perfection.",
    href: "/vip-concierge",
    accentColor: "bg-gold",
  },
  {
    title: "Special Events",
    description:
      "Celebrations, milestones, and unforgettable group moments planned with polish, personality, and seamless coordination.",
    href: "/special-events",
    accentColor: "bg-gold",
  },
];
