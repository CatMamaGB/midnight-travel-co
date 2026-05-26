import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/services",
  "/faq",
  "/contact",
  "/blog",
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
