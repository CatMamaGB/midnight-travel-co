import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/destinations",
  "/destinations/disney-world",
  "/destinations/disneyland",
  "/destinations/universal-orlando",
  "/destinations/universal-hollywood",
  "/destinations/disney-cruise-line",
  "/destinations/aulani",
  "/vacation-types",
  "/vacation-types/families",
  "/vacation-types/adults-only",
  "/vacation-types/luxury",
  "/vacation-types/first-time-visitors",
  "/vacation-types/honeymoons",
  "/vacation-types/group-travel",
  "/planning-tools",
  "/planning-tools/budget-calculator",
  "/planning-tools/dining-guide",
  "/planning-tools/packing-lists",
  "/planning-tools/crowd-calendar",
  "/planning-tools/ride-height-guide",
  "/planning-tools/lightning-lane-guide",
  "/planning-tools/universal-express-pass-guide",
  "/special-offers",
  "/services",
  "/faq",
  "/contact",
  "/blog",
  "/blog/category/disney",
  "/blog/category/universal",
  "/blog/category/travel-tips",
  "/blog/category/food-guides",
  "/blog/category/group-travel",
  "/blog/category/packing",
  "/disney",
  "/universal",
  "/vip-concierge",
  "/special-events",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/disclosures",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [
    ...routes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified,
    })),
    ...blogRoutes,
  ];
}
