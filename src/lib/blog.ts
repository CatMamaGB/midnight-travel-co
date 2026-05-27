import { blogPosts } from "@/content/blog";
import { BLOG_CATEGORY_TAXONOMY } from "@/lib/blogCategories";
export type { BlogPost, BlogSection } from "@/content/blog/types";

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function slugifyBlogCategory(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getBlogPostsByCategorySlug(categorySlug: string) {
  return blogPosts.filter((post) => slugifyBlogCategory(post.category) === categorySlug);
}

export function getKnownBlogCategories() {
  return BLOG_CATEGORY_TAXONOMY;
}
