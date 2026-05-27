import { tripTypeTestimonials } from "@/lib/funnel";

export default function TripTypeTestimonials() {
  return (
    <section className="bg-cloud py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            Trusted by Different Traveler Types
          </h2>
          <p className="text-lg leading-8 text-charcoal/80">
            Families, couples, and groups use the same guided process with recommendations tailored
            to their goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tripTypeTestimonials.map((testimonial) => (
            <article key={testimonial.author} className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
                {testimonial.type}
              </p>
              <p className="mb-6 leading-8 text-charcoal/80">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="font-medium text-midnight">{testimonial.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
