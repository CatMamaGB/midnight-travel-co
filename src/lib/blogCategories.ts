export interface BlogCategoryConfig {
  slug: string;
  label: string;
  description: string;
}

export const BLOG_CATEGORY_TAXONOMY: BlogCategoryConfig[] = [
  {
    slug: "disney",
    label: "Disney",
    description: "Planning guides for Walt Disney World, Disneyland, and Disney vacation strategy.",
  },
  {
    slug: "universal",
    label: "Universal",
    description: "Universal-focused guides for attraction strategy, trip pacing, and destination fit.",
  },
  {
    slug: "cruises",
    label: "Cruises",
    description: "Cruise planning insights and itinerary guidance for Disney and family travelers.",
  },
  {
    slug: "travel-tips",
    label: "Travel Tips",
    description: "Practical vacation strategy for smoother planning and stronger trip outcomes.",
  },
  {
    slug: "packing",
    label: "Packing",
    description: "Packing and preparation guidance for Disney and Universal travelers.",
  },
  {
    slug: "food-guides",
    label: "Food Guides",
    description: "Dining and food-planning strategy by destination and traveler type.",
  },
  {
    slug: "group-travel",
    label: "Group Travel",
    description: "Planning support for celebration, reunion, and corporate group travel.",
  },
];
