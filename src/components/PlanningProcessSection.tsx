import { planningProcess } from "@/lib/funnel";

interface PlanningProcessSectionProps {
  title?: string;
  description?: string;
  id?: string;
}

export default function PlanningProcessSection({
  title = "Our Planning Process",
  description = "A guided process designed to move your trip from dream to booked with less stress and better decisions.",
  id,
}: PlanningProcessSectionProps) {
  return (
    <section id={id} className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-midnight md:text-4xl">
            {title}
          </h2>
          <p className="text-lg leading-8 text-charcoal/80">{description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {planningProcess.map((step, index) => (
            <div key={step.title} className="rounded-xl border border-silver/40 bg-cloud/50 p-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-royal">
                Step {index + 1}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-midnight">{step.title}</h3>
              <p className="leading-7 text-charcoal/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
