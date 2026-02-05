export default function SignatureExperiences() {
  const experiences = [
    {
      category: "Culinary",
      title: "Curated Dining Experiences",
      description: "From intimate fine dining to character breakfasts, we secure reservations at the most sought-after restaurants and create memorable culinary moments.",
      items: [
        "Character dining reservations",
        "Fine dining experiences",
        "Private dining arrangements",
        "Special dietary accommodations",
      ],
    },
    {
      category: "Events",
      title: "Special Occasions",
      description: "Celebrate life's special moments with thoughtfully planned events. Whether it's a milestone birthday, anniversary, or family reunion, we make it extraordinary.",
      items: [
        "Birthday celebrations",
        "Anniversary packages",
        "Family reunions",
        "Surprise arrangements",
      ],
    },
  ];

  return (
    <section className="py-20 bg-midnight text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
            Signature Experiences
          </h2>
          <p className="text-xl text-cloud/80 max-w-2xl mx-auto font-light leading-relaxed">
            Thoughtfully curated moments that elevate your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal/50 to-midnight/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-charcoal/30 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                <div className="mb-4">
                  <span className="text-gold text-sm font-light tracking-wider uppercase">
                    {experience.category}
                  </span>
                </div>
                <h3 className="text-3xl font-light mb-4 tracking-tight">
                  {experience.title}
                </h3>
                <p className="text-cloud/80 mb-6 leading-relaxed font-light">
                  {experience.description}
                </p>
                <ul className="space-y-3">
                  {experience.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-cloud/90">
                      <span className="text-gold mr-3 mt-1">•</span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
