import Link from "next/link";
import { CONTACT_EMAIL, HOST_AGENCY_NAME, LEGAL_LAST_UPDATED, SITE_NAME } from "@/lib/site";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-cloud py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-charcoal/70 mb-8 font-light">
          Last updated: {LEGAL_LAST_UPDATED}
        </p>

        <div className="prose prose-lg max-w-none text-charcoal space-y-8">
          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Introduction</h2>
            <p className="leading-relaxed font-light">
              {SITE_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Information We Collect</h2>
            
            <h3 className="text-xl font-light text-midnight mb-3 mt-6">Information You Provide</h3>
            <p className="leading-relaxed font-light mb-4">
              When you use our contact form or request our services, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Name and contact information (email address, phone number)</li>
              <li>Travel preferences and requirements</li>
              <li>Budget information</li>
              <li>Special requests or accessibility needs</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-light text-midnight mb-3 mt-6">Automatically Collected Information</h3>
            <p className="leading-relaxed font-light">
              When you visit our website, we may automatically receive limited technical information
              such as browser type, device details, IP address, and basic diagnostic information
              provided through standard website hosting and security logs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">How We Use Your Information</h2>
            <p className="leading-relaxed font-light mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Provide, operate, and maintain our travel planning services</li>
              <li>Process your travel inquiries and requests</li>
              <li>Communicate with you about your travel plans</li>
              <li>Send you confirmation emails and updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Email Communications</h2>
            <p className="leading-relaxed font-light">
              When you submit a travel inquiry through our contact form, we will send you:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light mt-4">
              <li>A confirmation email acknowledging receipt of your inquiry</li>
              <li>Follow-up communications regarding your travel plans</li>
              <li>Service-related updates and information</li>
            </ul>
            <p className="leading-relaxed font-light mt-4">
              You may opt out of marketing communications at any time by following the unsubscribe 
              instructions in our emails or by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Website Analytics</h2>
            <p className="leading-relaxed font-light">
              We do not currently use third-party analytics or advertising trackers on this website.
              If analytics tools are added in the future, we will update this policy and any
              related consent experience to reflect those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Information Sharing</h2>
            <p className="leading-relaxed font-light mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>
                Our host agency, {HOST_AGENCY_NAME}, and third-party suppliers (hotels, airlines,
                tour operators) necessary to fulfill your travel arrangements
              </li>
              <li>Service providers who assist us in operating our website and conducting our business</li>
              <li>Legal authorities when required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Data Security</h2>
            <p className="leading-relaxed font-light">
              We implement appropriate technical and organizational measures to protect your personal 
              information. However, no method of transmission over the Internet or electronic storage 
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Your Rights</h2>
            <p className="leading-relaxed font-light mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
            </ul>
            <p className="leading-relaxed font-light mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Children&apos;s Privacy</h2>
            <p className="leading-relaxed font-light">
              Our services are not directed to individuals under the age of 18. We do not knowingly 
              collect personal information from children. If you believe we have collected information 
              from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Changes to This Policy</h2>
            <p className="leading-relaxed font-light">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Contact Us</h2>
            <p className="leading-relaxed font-light">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="leading-relaxed font-light mt-4">
              <strong>{SITE_NAME}</strong><br />
              Email: {CONTACT_EMAIL}
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-silver">
          <Link
            href="/"
            className="text-royal hover:text-midnight transition-colors font-light"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
