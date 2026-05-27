import Link from "next/link";
import { faqs } from "@/lib/faqs";

export default function FAQPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed">
            Common questions from Disney and Universal travelers
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {faqs.slice(0, 4).map((faq, index) => (
            <div
              key={index}
              className="border-b border-silver/50 pb-6 last:border-0"
            >
              <h3 className="text-xl font-light text-midnight mb-3 tracking-tight">
                {faq.question}
              </h3>
              <p className="text-charcoal/80 leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center text-royal hover:text-midnight transition-colors font-light"
          >
            <span>View All Questions</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
