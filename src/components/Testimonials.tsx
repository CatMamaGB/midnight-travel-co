export default function Testimonials() {
  // Placeholder testimonials - replace with real data later
  const testimonials = [
    {
      quote: "The attention to detail and personalized service exceeded our expectations. Every moment was thoughtfully planned.",
      author: "Sarah M.",
      location: "Disney Family Vacation",
    },
    {
      quote: "Working with The Midnight Travel Co. transformed our trip from good to extraordinary. Their expertise made all the difference.",
      author: "Michael R.",
      location: "Universal Studios Experience",
    },
    {
      quote: "The VIP concierge service was exceptional. They anticipated our needs and created experiences we'll never forget.",
      author: "Jennifer L.",
      location: "Special Event Planning",
    },
  ];

  return (
    <section className="py-20 bg-cloud">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
            Experiences that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm border border-silver/30"
            >
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-gold/50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-charcoal mb-6 leading-relaxed font-light italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-silver/30 pt-4">
                <p className="text-midnight font-medium">{testimonial.author}</p>
                <p className="text-charcoal/60 text-sm font-light">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
