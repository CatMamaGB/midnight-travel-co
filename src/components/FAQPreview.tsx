import Link from "next/link";

export default function FAQPreview() {
  const faqs = [
    {
      question: "How does the planning process work?",
      answer: "We begin with a conversation to understand your vision, preferences, and priorities. From there, we curate personalized recommendations and handle all the details.",
    },
    {
      question: "What destinations do you specialize in?",
      answer: "We specialize in Disney destinations, Universal Studios, VIP concierge services, and special event planning. Our expertise extends to creating memorable experiences across these areas.",
    },
    {
      question: "How far in advance should I book?",
      answer: "While we can work with various timelines, we recommend reaching out at least 60-90 days in advance for the best availability and options. However, we're happy to assist with shorter timelines when possible.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
            Common questions about our services and process
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {faqs.map((faq, index) => (
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
