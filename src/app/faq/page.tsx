import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { faqs } from "@/lib/faqs";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "FAQ",
  "Answers to common questions about Disney, Universal, VIP concierge, family trips, and how The Midnight Travel Co. plans personalized travel.",
  "/faq"
);

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-cloud">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            FAQ
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Answers to common planning questions
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            Here are the questions we hear most often about our process, timing, and how we help
            shape memorable travel experiences.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-6 px-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-xl bg-white p-8 shadow-sm">
              <h2 className="mb-3 text-2xl font-semibold text-midnight">{faq.question}</h2>
              <p className="leading-7 text-charcoal/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Share your trip details with us and we will follow up with guidance tailored to your plans."
        primaryButtonText="Contact Our Team"
        primaryButtonLink="/contact"
      />
    </main>
  );
}
