import Link from "next/link";
import { CONTACT_EMAIL, LEGAL_LAST_UPDATED, SITE_NAME } from "@/lib/site";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-cloud py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-charcoal/70 mb-8 font-light">
          Last updated: {LEGAL_LAST_UPDATED}
        </p>

        <div className="prose prose-lg max-w-none text-charcoal space-y-8">
          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Agreement to Terms</h2>
            <p className="leading-relaxed font-light">
              By accessing or using the {SITE_NAME} website and services, you agree to be bound
              by these Terms of Service. If you disagree with any part of these terms, you may not 
              access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Services</h2>
            <p className="leading-relaxed font-light">
              {SITE_NAME} provides travel planning and concierge services, including but
              not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light mt-4">
              <li>Travel itinerary planning and consultation</li>
              <li>Booking coordination for accommodations, transportation, and activities</li>
              <li>VIP concierge services</li>
              <li>Special event planning</li>
              <li>Travel advisory and support services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Third-Party Suppliers</h2>
            <p className="leading-relaxed font-light mb-4">
              We act as an intermediary between you and third-party suppliers, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Hotels and accommodations</li>
              <li>Airlines and transportation providers</li>
              <li>Tour operators and activity providers</li>
              <li>Restaurants and dining establishments</li>
              <li>Theme parks and entertainment venues</li>
              <li>Other travel service providers</li>
            </ul>
            <p className="leading-relaxed font-light mt-4">
              When you book travel services through us, you are entering into separate contracts with 
              these third-party suppliers. We are not responsible for the acts, errors, omissions, 
              representations, warranties, breaches, or negligence of any such suppliers, or for any 
              personal injuries, death, property damage, or other damages or expenses resulting therefrom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">No Guarantees</h2>
            <p className="leading-relaxed font-light mb-4">
              While we strive to provide exceptional service and accurate information, we make no 
              guarantees, warranties, or representations regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>The availability of specific accommodations, flights, or services</li>
              <li>Pricing accuracy or availability at time of booking</li>
              <li>Weather conditions or other circumstances beyond our control</li>
              <li>The performance or quality of third-party suppliers</li>
              <li>Specific outcomes or experiences during your travels</li>
            </ul>
            <p className="leading-relaxed font-light mt-4">
              Travel involves inherent risks, and we cannot guarantee that your travel experience will 
              be free from delays, cancellations, or other disruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Pricing and Payments</h2>
            <p className="leading-relaxed font-light">
              All prices are subject to change without notice until booking is confirmed. Prices are 
              based on availability at the time of booking and may vary. Payment terms and cancellation 
              policies vary by supplier and will be communicated to you at the time of booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Cancellations and Refunds</h2>
            <p className="leading-relaxed font-light">
              Cancellation policies are set by third-party suppliers and vary by service provider. 
              We will communicate applicable cancellation policies at the time of booking. Refunds, 
              when available, are subject to supplier terms and conditions and may take time to process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Travel Documents</h2>
            <p className="leading-relaxed font-light">
              You are responsible for ensuring you have valid travel documents, including passports, 
              visas, and any required health certificates. We are not responsible for denied boarding 
              or entry due to invalid or missing travel documents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Limitation of Liability</h2>
            <p className="leading-relaxed font-light">
              To the maximum extent permitted by law, {SITE_NAME}, its agents, employees,
              and representatives shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages, or any loss of profits or revenues, whether incurred directly or 
              indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from 
              your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Indemnification</h2>
            <p className="leading-relaxed font-light">
              You agree to indemnify and hold harmless {SITE_NAME} and its officers, directors,
              employees, and agents from any claims, damages, losses, liabilities, and expenses (including 
              legal fees) arising out of or relating to your use of our services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Modifications to Terms</h2>
            <p className="leading-relaxed font-light">
              We reserve the right to modify these Terms of Service at any time. We will notify you of 
              any material changes by posting the updated terms on this page and updating the &quot;Last updated&quot;
              date. Your continued use of our services after such modifications constitutes acceptance 
              of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Governing Law</h2>
            <p className="leading-relaxed font-light">
              These Terms of Service shall be governed by and construed in accordance with the laws
              of the jurisdiction of our principal place of business, without regard to its conflict
              of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Contact Information</h2>
            <p className="leading-relaxed font-light">
              If you have questions about these Terms of Service, please contact us at:
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
