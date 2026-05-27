import Link from "next/link";

export default function TrustBadges() {
  const badges = [
    { label: "Independent Advisor (Host: Mainstreet Travel)", icon: "✓" },
    { label: "Disney + Universal Specialist Planning", icon: "✓" },
    { label: "Replies Within 24-48 Hours", icon: "✓" },
    { label: "Personalized Itinerary + Booking Support", icon: "✓" },
  ];

  return (
    <section className="py-16 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-midnight/50 flex items-center justify-center text-gold text-2xl group-hover:bg-midnight transition-all duration-300">
                {badge.icon}
              </div>
              <p className="text-cloud text-sm font-light tracking-wide">
                {badge.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-cloud/70">
          Advisor-supported planning with transparent disclosures.{" "}
          <Link href="/disclosures" className="font-medium text-gold transition-colors hover:text-white">
            See advisor disclosures
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
