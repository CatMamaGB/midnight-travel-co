import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function buildPageMetadata(
  title: string,
  description: string,
  path = "/",
  keywords?: string[]
): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_URL}${path === "/" ? "" : path}`,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      siteName: SITE_NAME,
      type: "website",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/twitter-image"],
    },
  };
}
