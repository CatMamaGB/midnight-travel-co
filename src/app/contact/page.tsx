import type { Metadata } from "next";
import Link from "next/link";
import MultiStepForm from "@/components/MultiStepForm";
import { buildPageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata(
  "Plan My Vacation",
  "Start planning your Disney or Universal vacation with a guided multi-step inquiry and concierge-level support.",
  "/contact"
);

export default function Contact() {
  return (
    <main className="min-h-screen bg-cloud">
      {/* Intro Section */}
      <div className="bg-white border-b border-silver">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-semibold text-midnight mb-4">
            Start Planning Your Vacation
          </h1>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            We guide Disney and Universal travelers from dream to booking with practical, curated
            recommendations built around your group, budget, and trip style.
          </p>
          <p className="text-base text-charcoal leading-relaxed">
            Complete this planning form and we will follow up with destination and package
            recommendations tailored to your priorities. It is a consultative process designed to
            reduce overwhelm, not a generic booking portal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#plan-my-vacation-form"
              className="inline-flex rounded-md bg-midnight px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-royal"
            >
              Start Planning
            </Link>
            <Link
              href="/contact?source=custom-quote-request"
              className="inline-flex rounded-md border border-midnight/20 bg-white px-5 py-3 text-sm font-medium text-midnight transition-colors hover:border-midnight hover:bg-cloud"
            >
              Get a Custom Quote
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Free%20Consultation%20Request`}
              className="inline-flex rounded-md border border-midnight/20 bg-white px-5 py-3 text-sm font-medium text-midnight transition-colors hover:border-midnight hover:bg-cloud"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div id="plan-my-vacation-form" className="py-8">
        <MultiStepForm />
      </div>

      {/* What Happens Next Section */}
      <div className="bg-white border-t border-silver">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-semibold text-midnight mb-6 text-center">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-royal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold text-white">1</span>
              </div>
              <h3 className="text-xl font-medium text-midnight mb-2">Tell Us About Your Trip</h3>
              <p className="text-charcoal">
                Complete the guided form with destination goals, traveler details, budget range, and
                interests so we can recommend the right fit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-royal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold text-white">2</span>
              </div>
              <h3 className="text-xl font-medium text-midnight mb-2">We Build Recommendations</h3>
              <p className="text-charcoal">
                Our specialists compare destination and package options to build recommendations
                around your travel style and timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold text-midnight">3</span>
              </div>
              <h3 className="text-xl font-medium text-midnight mb-2">Plan + Booking Support</h3>
              <p className="text-charcoal">
                You&apos;ll hear from a travel advisor within 24-48 hours with next-step recommendations
                and package guidance to move toward booking.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-cloud rounded-lg border-l-4 border-royal">
            <p className="text-charcoal text-center">
              <strong className="text-midnight">Have questions?</strong> Visit our{" "}
              <a href="/faq" className="text-royal hover:underline font-medium">
                Frequently Asked Questions
              </a>{" "}
              page or reach out directly at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-royal hover:underline font-medium"
              >
                {CONTACT_EMAIL}
              </a>
              . We&apos;re here to help every step of the way.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
