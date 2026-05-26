import { blogPosts } from "@/content/blog";
export type { BlogPost, BlogSection } from "@/content/blog/types";

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
