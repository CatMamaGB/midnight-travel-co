import MultiStepForm from "@/components/MultiStepForm";

export default function Contact() {
  return (
    <main className="min-h-screen bg-cloud">
      {/* Intro Section */}
      <div className="bg-white border-b border-silver">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-semibold text-midnight mb-4">
            Let's Plan Your Dream Journey
          </h1>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            At The Midnight Travel Co., we believe every journey should be extraordinary. 
            Our dedicated concierge team specializes in crafting personalized travel experiences 
            that transform your vision into reality.
          </p>
          <p className="text-base text-charcoal leading-relaxed">
            Whether you're planning a magical Disney adventure, exploring Universal Studios, 
            seeking VIP concierge services, or organizing a special event, we're here to 
            handle every detail with precision and care. Simply share your preferences below, 
            and let us begin curating your perfect escape.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-8">
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
              <h3 className="text-xl font-medium text-midnight mb-2">Submit Your Inquiry</h3>
              <p className="text-charcoal">
                Complete the form above with your travel preferences, dates, and vision. 
                Every detail helps us understand your unique needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-royal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold text-white">2</span>
              </div>
              <h3 className="text-xl font-medium text-midnight mb-2">We Review & Curate</h3>
              <p className="text-charcoal">
                Our travel specialists carefully review your inquiry and begin crafting 
                personalized recommendations tailored specifically to your preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold text-midnight">3</span>
              </div>
              <h3 className="text-xl font-medium text-midnight mb-2">24-48 Hour Response</h3>
              <p className="text-charcoal">
                You'll receive a detailed response from one of our travel concierges within 
                24-48 hours, ready to bring your travel dreams to life.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-cloud rounded-lg border-l-4 border-royal">
            <p className="text-charcoal text-center">
              <strong className="text-midnight">Have questions?</strong> Visit our{" "}
              <a href="/faq" className="text-royal hover:underline font-medium">
                Frequently Asked Questions
              </a>{" "}
              page or reach out directly. We're here to help every step of the way.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
