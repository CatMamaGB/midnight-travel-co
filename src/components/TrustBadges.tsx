export default function TrustBadges() {
  const badges = [
    { label: "Custom Disney Planning", icon: "✓" },
    { label: "Universal Vacation Planning", icon: "✓" },
    { label: "Corporate & Group Travel", icon: "✓" },
    { label: "Concierge-Level Support", icon: "✓" },
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
      </div>
    </section>
  );
}
