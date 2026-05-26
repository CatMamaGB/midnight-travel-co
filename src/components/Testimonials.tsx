export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with Alexa completely changed how we travel. She planned every detail of our family Disney trip, from dining reservations to park strategy, and somehow made it feel stress-free. We saved hours of research and actually got to enjoy the vacation instead of managing it.",
      author: "Sarah M.",
      location: "Family Vacation Client",
    },
    {
      quote:
        "I travel often for work and usually handle everything myself, but Alexa planned our corporate retreat better than any agency we have used before. The hotel, transportation, excursions, and scheduling all ran smoothly. It felt polished, organized, and effortless for our team.",
      author: "Daniel R.",
      location: "Corporate Travel Client",
    },
    {
      quote:
        "Alexa planned my dream trip to Paris for the Taylor Swift concert, and it honestly felt magical from start to finish. She handled the flights, hotel recommendations, transportation, and even helped us navigate the city around the concert dates. Everything was organized perfectly, and I got to fully enjoy the experience instead of stressing about logistics.",
      author: "Brianna and Laura",
      location: "Paris Concert Travel Client",
    },
  ];

  return (
    <section className="py-20 bg-cloud">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed">
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
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-silver/30 pt-4">
                <p className="text-midnight font-medium">{testimonial.author}</p>
                <p className="text-charcoal/75 text-sm font-light">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
