import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-midnight text-white overflow-hidden">
      <Image
        src="/home-hero-collage.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/75 to-charcoal/85 z-0" />
      <div className="absolute inset-0 bg-midnight/25 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight">
          Disney &amp; Universal Vacation Planning
          <span className="block text-gold font-normal mt-2">Built Around Your Family</span>
        </h1>
        <p className="text-xl md:text-2xl text-cloud/90 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
          Independent advisor support for Disney World, Disneyland, Universal Orlando, and more.
        </p>
        <p className="text-lg text-silver mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop juggling blogs and spreadsheets. Get a clear park plan, dining strategy, and
          booking support before your trip ever begins.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact?source=homepage-hero"
            className="px-8 py-4 bg-gold text-midnight rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium text-lg"
          >
            Start Planning My Trip
          </Link>
          <Link
            href="/destinations"
            className="px-8 py-4 border-2 border-gold text-gold rounded-md hover:bg-gold/10 transition-all duration-300 font-medium text-lg"
          >
            Compare Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
