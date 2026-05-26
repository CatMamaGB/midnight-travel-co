import Link from "next/link";
import { CONTACT_EMAIL, LEGAL_LAST_UPDATED, SITE_NAME } from "@/lib/site";

export default function Accessibility() {
  return (
    <main className="min-h-screen bg-cloud py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
          Accessibility Statement
        </h1>
        <p className="text-charcoal/70 mb-8 font-light">
          Last updated: {LEGAL_LAST_UPDATED}
        </p>

        <div className="prose prose-lg max-w-none text-charcoal space-y-8">
          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Our Commitment</h2>
            <p className="leading-relaxed font-light">
              {SITE_NAME} is committed to ensuring digital accessibility for people with
              disabilities. We are continually improving the user experience for everyone and applying 
              the relevant accessibility standards to achieve these goals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Accessibility Standards</h2>
            <p className="leading-relaxed font-light mb-4">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
              standards. These guidelines explain how to make web content more accessible for people 
              with disabilities and user-friendly for everyone.
            </p>
            <p className="leading-relaxed font-light">
              Our efforts include:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light mt-4">
              <li>Providing alternative text for images</li>
              <li>Ensuring sufficient color contrast</li>
              <li>Making content keyboard navigable</li>
              <li>Using semantic HTML structure</li>
              <li>Providing clear headings and labels</li>
              <li>Ensuring forms are accessible</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Ongoing Efforts</h2>
            <p className="leading-relaxed font-light">
              We are actively working to improve the accessibility of our website. This includes 
              regular audits, user testing, and updates to ensure we meet or exceed accessibility 
              standards. We welcome feedback on how we can improve accessibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Known Issues</h2>
            <p className="leading-relaxed font-light">
              We are aware that some parts of our website may not be fully accessible. We are working 
              to address these issues and improve accessibility across all pages. If you encounter 
              any accessibility barriers, please contact us so we can address them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Assistive Technologies</h2>
            <p className="leading-relaxed font-light mb-4">
              Our website is designed to work with common assistive technologies, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Screen readers</li>
              <li>Voice recognition software</li>
              <li>Keyboard navigation</li>
              <li>Screen magnification tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Feedback</h2>
            <p className="leading-relaxed font-light">
              We welcome your feedback on the accessibility of the {SITE_NAME} website.
              If you encounter accessibility barriers or have suggestions for improvement, please 
              contact us:
            </p>
            <p className="leading-relaxed font-light mt-4">
              <strong>{SITE_NAME}</strong><br />
              Email: {CONTACT_EMAIL}<br />
              Please include &quot;Accessibility&quot; in the subject line.
            </p>
            <p className="leading-relaxed font-light mt-4">
              We aim to respond to accessibility feedback within 5 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Third-Party Content</h2>
            <p className="leading-relaxed font-light">
              Some content on our website may be provided by third parties, such as embedded videos 
              or maps. We cannot guarantee the accessibility of third-party content, but we strive 
              to work with providers who share our commitment to accessibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Travel Services Accessibility</h2>
            <p className="leading-relaxed font-light">
              We are committed to helping all clients plan accessible travel experiences. When you 
              work with us, please let us know about any accessibility needs or requirements, and 
              we will do our best to accommodate them in your travel planning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Updates to This Statement</h2>
            <p className="leading-relaxed font-light">
              We will review and update this accessibility statement regularly to reflect our 
              ongoing commitment and improvements. We will notify users of significant changes 
              to our accessibility practices.
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
