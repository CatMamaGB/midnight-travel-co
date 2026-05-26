import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { getAllBlogPosts } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Blog",
  "Travel planning insights, Disney and Universal guides, and practical destination advice from The Midnight Travel Co.",
  "/blog"
);

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
              Journal
            </p>
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
              Travel insights, destination guidance, and planning tips
            </h1>
            <p className="text-lg leading-8 text-charcoal/80">
              Destination guidance, planning strategies, and curated travel advice from The Midnight
              Travel Co.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-gold px-3 py-1 font-medium text-midnight">
                  {post.category}
                </span>
                <span className="text-charcoal/60">{post.readingTime}</span>
                <span className="text-charcoal/60">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h2 className="mb-3 text-3xl font-semibold tracking-tight text-midnight">
                {post.title}
              </h2>
              <p className="mb-5 text-lg leading-8 text-charcoal/80">{post.excerpt}</p>
              <p className="mb-6 text-sm font-medium text-charcoal/60">{post.author}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex rounded-md bg-midnight px-5 py-3 font-medium text-white transition-colors hover:bg-royal"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Need a trip plan that actually fits your travel style?"
        description="Use our contact form to start planning a Disney, Universal, luxury, or group experience tailored to your goals."
        primaryButtonText="Start Planning"
        primaryButtonLink="/contact"
      />
    </main>
  );
}
