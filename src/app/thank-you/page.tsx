import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your travel inquiry has been received by The Midnight Travel Co.",
  robots: {
    index: false,
    follow: false,
  },
};

interface ThankYouPageProps {
  searchParams?: Promise<{
    leadId?: string;
    status?: string;
  }>;
}

export default async function ThankYou({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;
  const hasPartialWarning = params?.status === "partial";

  return (
    <main className="min-h-screen bg-cloud py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Confirmation Section */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-midnight"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-semibold text-midnight mb-3">
              Thank You!
            </h1>
            <div className="max-w-xl mx-auto">
              <p className="text-xl text-charcoal mb-2">
                Your travel inquiry has been successfully submitted.
              </p>
              <p className="text-lg text-charcoal">
                We&apos;re delighted to confirm that we have received your request and our team is
                already reviewing it.
              </p>
              {params?.leadId && (
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-charcoal/60">
                  Reference ID: {params.leadId}
                </p>
              )}
            </div>
          </div>

          {/* Confirmation Box */}
          <div className="bg-cloud border-l-4 border-gold p-6 rounded-md mb-8">
            <p className="text-midnight font-medium text-lg mb-2">
              ✓ Confirmation Received
            </p>
            <p className="text-charcoal">
              Your inquiry is now in our system and has been assigned to one of our dedicated
              travel concierges.
            </p>
            {hasPartialWarning ? (
              <p className="mt-3 text-charcoal">
                We received your inquiry, but one part of the delivery process needed a manual
                fallback. If you do not hear from us within 48 hours, email us directly so we can
                prioritize your request.
              </p>
            ) : (
              <p className="mt-3 text-charcoal">
                You should receive a confirmation email shortly with all the details of your
                submission.
              </p>
            )}
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-midnight mb-8 text-center">
            What Happens Next?
          </h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-royal rounded-full flex items-center justify-center">
                  <span className="text-xl font-semibold text-white">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-midnight mb-2">
                  Email Confirmation
                </h3>
                <p className="text-charcoal">
                  Check your inbox for a confirmation email from our team. This email 
                  contains a summary of your inquiry and important next steps.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-royal rounded-full flex items-center justify-center">
                  <span className="text-xl font-semibold text-white">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-midnight mb-2">
                  Expert Review
                </h3>
                <p className="text-charcoal">
                  Our travel specialists are carefully reviewing your preferences, 
                  destination, and vision to begin curating personalized recommendations 
                  tailored specifically to your needs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-xl font-semibold text-midnight">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-midnight mb-2">
                  24-48 Hour Response
                </h3>
                <p className="text-charcoal mb-2">
                  You can expect to hear from one of our travel concierges within
                  <strong className="text-midnight"> 24-48 hours</strong>. They will 
                  reach out with detailed recommendations and next steps to bring your
                  travel dreams to life.
                </p>
                <p className="text-sm text-charcoal italic">
                  We understand that every journey is unique, and we&apos;re committed to
                  crafting an experience that exceeds your expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Helpful Links */}
          <div className="mt-10 pt-8 border-t border-silver">
            <h3 className="text-xl font-medium text-midnight mb-4 text-center">
              While You Wait
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/faq"
                className="px-6 py-2 bg-cloud text-midnight rounded-md hover:bg-silver transition-colors"
              >
                Visit FAQ
              </Link>
              <Link
                href="/blog"
                className="px-6 py-2 bg-cloud text-midnight rounded-md hover:bg-silver transition-colors"
              >
                Read the {SITE_NAME} Blog
              </Link>
              <Link
                href="/about"
                className="px-6 py-2 bg-cloud text-midnight rounded-md hover:bg-silver transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Return Home */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-royal text-white rounded-md hover:bg-opacity-90 transition-colors font-medium"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
