import Link from "next/link";

export default function Disclosures() {
  return (
    <main className="min-h-screen bg-cloud py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
          Disclosures
        </h1>
        <p className="text-charcoal/70 mb-8 font-light">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none text-charcoal space-y-8">
          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Non-Affiliation with Disney and Universal</h2>
            <p className="leading-relaxed font-light mb-4">
              The Midnight Travel Co. is not affiliated with, endorsed by, or connected to The Walt Disney 
              Company, Disney Parks, Universal Studios, Universal Parks & Resorts, or any of their 
              subsidiaries or affiliates.
            </p>
            <p className="leading-relaxed font-light">
              We are an independent travel planning service that assists clients in planning visits to 
              Disney and Universal destinations. We do not represent these companies and are not authorized 
              to make representations on their behalf. All Disney and Universal trademarks, service marks, 
              and trade names are the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Affiliate Relationships</h2>
            <p className="leading-relaxed font-light mb-4">
              {/* TODO: Add specific affiliate disclosure language when affiliate relationships are established */}
              The Midnight Travel Co. may participate in affiliate programs with various travel suppliers 
              and service providers. This means we may receive compensation when you book travel services 
              through our links or recommendations.
            </p>
            <p className="leading-relaxed font-light">
              Our recommendations are based on our professional judgment and experience, and affiliate 
              relationships do not influence our commitment to providing honest, personalized travel 
              planning services. We only recommend services and suppliers that we believe will provide 
              value to our clients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Host Agency</h2>
            <p className="leading-relaxed font-light mb-4">
              {/* TODO: Verify exact Mainstreet Travel disclosure wording requirements */}
              The Midnight Travel Co. operates as an independent travel advisor under the host agency 
              of Mainstreet Travel. This relationship allows us to:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Access supplier relationships and booking systems</li>
              <li>Provide professional travel planning services</li>
              <li>Maintain industry certifications and credentials</li>
              <li>Offer competitive pricing and exclusive benefits</li>
            </ul>
            <p className="leading-relaxed font-light mt-4">
              While we operate under Mainstreet Travel's host agency, The Midnight Travel Co. maintains 
              independent operations and is responsible for all client communications and service delivery. 
              Mainstreet Travel provides support, resources, and industry connections that enable us to 
              serve our clients effectively.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Compensation and Fees</h2>
            <p className="leading-relaxed font-light">
              {/* TODO: Clarify fee structure with Mainstreet Travel if required */}
              The Midnight Travel Co. may receive commissions from travel suppliers when you book services 
              through us. In some cases, we may charge planning fees for our services, which will be 
              clearly disclosed before you commit to any services. We are committed to transparency 
              regarding our compensation structure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Professional Credentials</h2>
            <p className="leading-relaxed font-light">
              {/* TODO: Add specific credentials/licenses if required by Mainstreet Travel */}
              Our travel advisors maintain professional credentials and certifications as required by 
              industry standards and our host agency. We are committed to ongoing education and 
              professional development to serve our clients effectively.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Third-Party Suppliers</h2>
            <p className="leading-relaxed font-light">
              When booking travel services, you enter into separate contracts with third-party suppliers 
              (hotels, airlines, tour operators, etc.). We act as an intermediary and are not responsible 
              for the performance, quality, or actions of these suppliers. Please refer to our{" "}
              <Link href="/terms-of-service" className="text-royal hover:underline">
                Terms of Service
              </Link>{" "}
              for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-midnight mb-4 mt-8">Contact Information</h2>
            <p className="leading-relaxed font-light">
              If you have questions about these disclosures, please contact us at:
            </p>
            <p className="leading-relaxed font-light mt-4">
              <strong>The Midnight Travel Co.</strong><br />
              Email: travel.midnightco@gmail.com<br />
              {/* TODO: Add Mainstreet Travel contact information if required */}
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
