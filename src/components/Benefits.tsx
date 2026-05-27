import Link from "next/link";

export default function Benefits() {
  const benefits = [
    {
      title: "Destination Fit",
      description:
        "Compare Disney World, Disneyland, Universal Orlando, and more before you commit dates, tickets, or resorts.",
    },
    {
      title: "Park-Day Strategy",
      description:
        "Build realistic ride, show, and rest blocks, including Lightning Lane and Express Pass decisions.",
    },
    {
      title: "Dining That Works",
      description:
        "Prioritize reservations without overbooking your park flow or creating avoidable transportation stress.",
    },
    {
      title: "Offer & Budget Clarity",
      description:
        "Match promotions and package options to your real travel window, group size, and comfort level.",
    },
    {
      title: "Group Coordination",
      description:
        "Plan reunions, milestones, and multi-room trips with one clear itinerary direction and shared expectations.",
    },
    {
      title: "Support Through Travel Day",
      description:
        "Get updates, tips, and last-mile guidance before and during your Disney or Universal vacation.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
            Why Work With a Disney & Universal Planner
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed">
            Park-specific guidance for the decisions that most affect budget, wait times, dining, and daily pace.
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
        <div className="mt-12 text-center">
          <Link
            href="/planning-tools"
            className="inline-flex rounded-md border border-midnight/15 px-5 py-3 font-medium text-midnight transition-colors hover:border-midnight hover:bg-midnight hover:text-white"
          >
            Explore Planning Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
