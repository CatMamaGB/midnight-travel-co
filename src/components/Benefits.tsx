export default function Benefits() {
  const benefits = [
    {
      title: "Personalized Planning",
      description: "Every journey is unique. We take time to understand your preferences, priorities, and vision to craft an experience that reflects who you are.",
    },
    {
      title: "Expert Knowledge",
      description: "Years of experience and insider knowledge ensure you have access to the best experiences, dining, and accommodations available.",
    },
    {
      title: "Time Saved",
      description: "Let us handle the research, bookings, and logistics. Your time is valuable—spend it anticipating your journey, not planning it.",
    },
    {
      title: "Peace of Mind",
      description: "Travel with confidence knowing every detail has been thoughtfully considered and arranged. We're here to support you throughout your journey.",
    },
    {
      title: "Exclusive Access",
      description: "Our relationships and expertise open doors to experiences and opportunities that may not be available through standard channels.",
    },
    {
      title: "Ongoing Support",
      description: "From initial planning through your return home, we're available to assist with questions, changes, or unexpected needs.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
            Why Work With a Travel Advisor
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed">
            Thoughtful planning, expert guidance, and dedicated support throughout your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="h-1 w-12 bg-gold mb-6 group-hover:w-16 transition-all duration-300" />
              <h3 className="text-2xl font-light text-midnight mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-charcoal/80 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
