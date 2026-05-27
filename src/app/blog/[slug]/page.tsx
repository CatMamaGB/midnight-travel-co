import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.seoTitle,
    description: post.excerpt,
    keywords: post.seoKeywords,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: SITE_NAME,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/twitter-image"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllBlogPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((firstPost, secondPost) => Number(secondPost.category === post.category) - Number(firstPost.category === post.category))
    .slice(0, 2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-cloud">
      <article>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-20">
            <Link
              href="/blog"
              className="mb-6 inline-flex text-sm font-medium text-royal transition-colors hover:text-midnight"
            >
              &larr; Back to Blog
            </Link>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
              {post.heroKicker}
            </p>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
              {post.title}
            </h1>
            <p className="mb-6 text-xl leading-8 text-charcoal/80">{post.heroSubtitle}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal/60">
              <span>{post.author}</span>
              <span>{post.readingTime}</span>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl space-y-10 px-4">
            <div className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
              <div className="space-y-6 text-lg leading-8 text-charcoal/85">
                {post.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {post.sections.map((section) => (
              <section key={section.title} className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-midnight">
                  {section.title}
                </h2>

                {section.intro && (
                  <div className="mb-6 space-y-4 text-lg leading-8 text-charcoal/85">
                    {section.intro.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {section.bulletPoints && (
                  <ul className="mb-6 list-disc space-y-3 pl-6 text-lg leading-8 text-charcoal/85 marker:text-gold">
                    {section.bulletPoints.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.subSections && (
                  <div className="space-y-10">
                    {section.subSections.map((subSection) => (
                      <div key={subSection.title}>
                        <h3 className="mb-4 text-2xl font-semibold text-midnight">
                          {subSection.title}
                        </h3>

                        {subSection.intro && (
                          <div className="mb-4 space-y-4 text-lg leading-8 text-charcoal/85">
                            {subSection.intro.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        )}

                        {subSection.bulletPoints && (
                          <ul className="list-disc space-y-3 pl-6 text-lg leading-8 text-charcoal/85 marker:text-gold">
                            {subSection.bulletPoints.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.comparisonTable && (
                  <div className="overflow-hidden rounded-xl border border-silver/50">
                    <div className="grid grid-cols-2 bg-midnight text-sm font-semibold uppercase tracking-wide text-white">
                      <div className="px-4 py-3">{section.comparisonTable.columns[0]}</div>
                      <div className="px-4 py-3">{section.comparisonTable.columns[1]}</div>
                    </div>
                    {section.comparisonTable.rows.map((row) => (
                      <div
                        key={row.travelerType}
                        className="grid grid-cols-2 border-t border-silver/40 bg-white text-base text-charcoal"
                      >
                        <div className="px-4 py-3 font-medium">{row.travelerType}</div>
                        <div className="px-4 py-3">{row.bestDestination}</div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <section className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-midnight">
                Final Thoughts From Alexa
              </h2>
              <div className="space-y-4 text-lg leading-8 text-charcoal/85">
                {post.finalThoughts.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            {relatedPosts.length > 0 && (
              <section className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
                <h2 className="mb-5 text-2xl font-semibold text-midnight">Keep Reading</h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="rounded-xl border border-silver/40 p-5 transition-colors hover:border-midnight/20 hover:bg-cloud/40"
                    >
                      <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-royal">
                        {relatedPost.category}
                      </p>
                      <h3 className="mb-2 text-xl font-semibold text-midnight">
                        {relatedPost.title}
                      </h3>
                      <p className="leading-7 text-charcoal/75">{relatedPost.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>
      </article>

      <CTASection
        title="Want help choosing the right Disney or Universal experience?"
        description="Tell us about your travel style, group, and priorities, and we will build a plan that fits from the start."
        primaryButtonText="Start Planning My Trip"
        primaryButtonLink={`/contact?source=blog-${post.slug}`}
        secondaryButtonText="Get a Free Custom Quote"
        secondaryButtonLink={`/contact?source=blog-${post.slug}&mode=quote`}
      />
    </main>
  );
}
