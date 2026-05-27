import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { BLOG_CATEGORY_TAXONOMY } from "@/lib/blogCategories";
import { getBlogPostsByCategorySlug, getKnownBlogCategories } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/metadata";

interface BlogCategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getKnownBlogCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryConfig = BLOG_CATEGORY_TAXONOMY.find((item) => item.slug === category);

  if (!categoryConfig) {
    return buildPageMetadata("Blog Category", "Travel insights from The Midnight Travel Co.", "/blog");
  }

  return buildPageMetadata(
    `${categoryConfig.label} Guides`,
    categoryConfig.description,
    `/blog/category/${categoryConfig.slug}`
  );
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { category } = await params;
  const categoryConfig = BLOG_CATEGORY_TAXONOMY.find((item) => item.slug === category);

  if (!categoryConfig) {
    notFound();
  }

  const posts = getBlogPostsByCategorySlug(categoryConfig.slug);

  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            Blog Category
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            {categoryConfig.label}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-charcoal/80">{categoryConfig.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post.slug} className="rounded-2xl bg-white p-8 shadow-sm">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-charcoal/60">
                  {post.readingTime}
                </p>
                <h2 className="mb-3 text-3xl font-semibold tracking-tight text-midnight">
                  {post.title}
                </h2>
                <p className="mb-6 text-lg leading-8 text-charcoal/80">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex rounded-md bg-midnight px-5 py-3 font-medium text-white transition-colors hover:bg-royal"
                >
                  Read article
                </Link>
              </article>
            ))
          ) : (
            <article className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-midnight">
                Articles Coming Soon
              </h2>
              <p className="mx-auto max-w-2xl leading-8 text-charcoal/80">
                This category is part of our expanded content roadmap. In the meantime, explore our
                latest Disney and planning strategy guides.
              </p>
              <Link
                href="/blog"
                className="mt-7 inline-flex rounded-md bg-midnight px-5 py-3 font-medium text-white transition-colors hover:bg-royal"
              >
                View All Articles
              </Link>
            </article>
          )}
        </div>
      </section>

      <CTASection
        title="Want this planning guidance applied to your trip?"
        description="Tell us your destination and travel goals and we will build recommendations around your priorities."
        primaryButtonText="Plan My Vacation"
        primaryButtonLink={`/contact?source=blog-category-${categoryConfig.slug}`}
      />
    </main>
  );
}
