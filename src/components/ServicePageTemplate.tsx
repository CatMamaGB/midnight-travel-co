import CTASection from "./CTASection";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  heroDescription: string;
  included: {
    title: string;
    description: string;
  }[];
  whoItsFor: {
    title: string;
    description: string;
  };
  premiumFocus: {
    title: string;
    description: string;
    items: string[];
  };
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroDescription,
  included,
  whoItsFor,
  premiumFocus,
}: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-midnight text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/95 via-midnight to-charcoal/80 z-0" />
        <div className="absolute inset-0 opacity-10 z-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
          <p className="text-gold text-sm font-light tracking-wider uppercase mb-4">
            {subtitle}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-cloud/90 max-w-3xl mx-auto leading-relaxed font-light">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-cloud">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
              What&apos;s Included
            </h2>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive planning and support throughout your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {included.map((item, index) => (
              <div key={index} className="group">
                <div className="h-1 w-12 bg-gold mb-6 group-hover:w-16 transition-all duration-300" />
                <h3 className="text-2xl font-light text-midnight mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
              Who It&apos;s For
            </h2>
          </div>

          <div className="bg-cloud rounded-lg p-8 md:p-12 border-l-4 border-royal">
            <h3 className="text-2xl font-light text-midnight mb-4 tracking-tight">
              {whoItsFor.title}
            </h3>
            <p className="text-lg text-charcoal/80 leading-relaxed font-light">
              {whoItsFor.description}
            </p>
          </div>
        </div>
      </section>

      {/* Premium Focus Section */}
      <section className="py-20 bg-midnight text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              {premiumFocus.title}
            </h2>
            <p className="text-xl text-cloud/80 max-w-2xl mx-auto font-light leading-relaxed">
              {premiumFocus.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFocus.items.map((item, index) => (
              <div
                key={index}
                className="bg-charcoal/30 backdrop-blur-sm rounded-lg p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300"
              >
                <div className="flex items-start">
                  <span className="text-gold mr-3 mt-1 text-xl">•</span>
                  <p className="text-cloud/90 font-light leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready to Experience ${title}?`}
        description="Let's begin planning your extraordinary journey. Share your vision with us, and we'll handle every detail."
        primaryButtonText="Start Planning"
        primaryButtonLink="/contact"
      />
    </main>
  );
}
