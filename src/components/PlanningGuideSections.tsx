import Link from "next/link";
import type { PlanningToolGuide } from "@/lib/funnel";

interface PlanningGuideSectionsProps {
  guide: PlanningToolGuide;
}

export default function PlanningGuideSections({ guide }: PlanningGuideSectionsProps) {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-midnight">Who this is for</h2>
            <p className="leading-8 text-charcoal/80">{guide.bestFor}</p>
          </article>
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-midnight">Key takeaways</h2>
            <ul className="space-y-3 text-charcoal/80">
              {guide.keyTakeaways.map((takeaway) => (
                <li key={takeaway} className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            Strategy framework
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {guide.framework.map((item) => (
              <article key={item.title} className="rounded-xl border border-silver/60 p-7">
                <h3 className="mb-3 text-xl font-semibold text-midnight">{item.title}</h3>
                <p className="leading-8 text-charcoal/80">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-midnight">
              Common planning mistakes to avoid
            </h2>
            <ul className="space-y-3 text-charcoal/80">
              {guide.commonMistakes.map((mistake) => (
                <li key={mistake} className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-midnight">Next best steps</h2>
            <ol className="space-y-4">
              {guide.nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-midnight text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-charcoal/80">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {guide.faqItems.map((item) => (
              <article key={item.question} className="rounded-xl border border-silver/60 p-6">
                <h3 className="mb-3 text-lg font-semibold text-midnight">{item.question}</h3>
                <p className="leading-7 text-charcoal/80">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            Related resources
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {guide.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl bg-white px-6 py-5 text-midnight shadow-sm transition-colors hover:bg-midnight hover:text-white"
              >
                <span className="text-base font-semibold">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
