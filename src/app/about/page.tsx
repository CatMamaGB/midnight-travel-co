import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "About",
  "Meet The Midnight Travel Co. and learn how Alexa plans elevated Disney, Universal, VIP concierge, and special occasion travel experiences.",
  "/about"
);

const values = [
  {
    title: "Thoughtful Planning",
    description:
      "Every trip begins with listening. We take time to understand your style, priorities, and the moments that matter most before making recommendations.",
  },
  {
    title: "Elevated Support",
    description:
      "From the first inquiry to final details, we stay present in the process so your experience feels organized, calm, and well cared for.",
  },
  {
    title: "Personalized Experiences",
    description:
      "We believe memorable travel comes from intentional details, not one-size-fits-all itineraries. The result is a journey that feels distinctively yours.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-cloud">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-royal">
            About The Midnight Travel Co.
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-midnight md:text-5xl">
            Travel planning with warmth, care, and elevated detail
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-charcoal/80">
            The Midnight Travel Co. was created for travelers who want more than bookings and
            logistics. We create polished, personalized experiences that feel seamless from the
            first idea to the final itinerary.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-5 h-1 w-14 rounded-full bg-gold" />
              <h2 className="mb-3 text-2xl font-semibold text-midnight">{value.title}</h2>
              <p className="leading-7 text-charcoal/80">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-royal">
              Meet Alexa
            </p>
            <h2 className="mb-5 text-3xl font-semibold tracking-tight text-midnight">
              A planning partner who cares about the experience as much as the itinerary
            </h2>
            <div className="space-y-4 leading-8 text-charcoal/80">
              <p>
                Alexa leads The Midnight Travel Co. with a planning style centered on clarity,
                responsiveness, and elevated detail. Her approach is built for travelers who want
                professional guidance without losing the personal feel of a trip designed around
                their own priorities.
              </p>
              <p>
                From Disney and Universal vacations to special events, couples trips, and group
                travel, Alexa helps clients sort through the noise, make confident decisions, and
                move from scattered ideas to a polished plan.
              </p>
              <p>
                Every recommendation is shaped around your group dynamic, budget, pace, and what
                matters most once you arrive, whether that means easier park days, smoother
                logistics, or a more thoughtful overall experience.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-midnight p-8 text-white shadow-sm md:p-10">
            <h2 className="mb-5 text-3xl font-semibold tracking-tight">How Alexa plans</h2>
            <ul className="space-y-4 text-base leading-7 text-cloud/85">
              <li>Thoughtful discovery before recommendations are made.</li>
              <li>Clear trip strategy tailored to your timeline and travel style.</li>
              <li>Refined options instead of overwhelming information overload.</li>
              <li>Support that stays organized from inquiry to final details.</li>
              <li>Destination knowledge focused on fit, not just popularity.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white px-6 py-12 text-center shadow-sm md:px-12">
          <h2 className="mb-4 text-3xl font-semibold text-midnight">What working with us feels like</h2>
          <p className="leading-8 text-charcoal/80">
            Clear communication, refined recommendations, and a process designed to make planning
            feel easier. Whether you are dreaming of Disney, Universal, VIP services, or a special
            celebration, we help shape the trip around your priorities with care and intention.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to Start Planning?"
        description="Tell us what you are dreaming about, and we will help turn it into a polished travel experience."
      />
    </main>
  );
}
