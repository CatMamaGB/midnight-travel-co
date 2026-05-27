import Link from "next/link";
import { FunnelCard } from "@/lib/funnel";

interface FunnelCardGridProps {
  cards: FunnelCard[];
  columns?: "three" | "two";
}

export default function FunnelCardGrid({ cards, columns = "three" }: FunnelCardGridProps) {
  const gridClass =
    columns === "two" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={`grid gap-8 ${gridClass}`}>
      {cards.map((card) => (
        <article key={card.href} className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="mb-5 h-1 w-14 rounded-full bg-gold" />
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-midnight">{card.title}</h2>
          <p className="mb-6 leading-8 text-charcoal/80">{card.description}</p>
          <Link
            href={card.href}
            className="inline-flex rounded-md bg-midnight px-5 py-3 font-medium text-white transition-colors hover:bg-royal"
          >
            {card.ctaLabel}
          </Link>
        </article>
      ))}
    </div>
  );
}
