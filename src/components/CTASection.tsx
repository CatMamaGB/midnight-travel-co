import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTASection({
  title = "Ready to Begin Your Journey?",
  description = "Let's start planning your extraordinary travel experience. Share your vision with us, and we'll handle the rest.",
  primaryButtonText = "Start Planning",
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-midnight text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-xl text-cloud/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButtonLink}
            className="px-8 py-4 bg-gold text-midnight rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium text-lg"
          >
            {primaryButtonText}
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link
              href={secondaryButtonLink}
              className="px-8 py-4 border-2 border-gold text-gold rounded-md hover:bg-gold/10 transition-all duration-300 font-medium text-lg"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
