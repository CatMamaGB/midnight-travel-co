import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ServiceCards from "@/components/ServiceCards";
import Benefits from "@/components/Benefits";
import SignatureExperiences from "@/components/SignatureExperiences";
import Testimonials from "@/components/Testimonials";
import FAQPreview from "@/components/FAQPreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBadges />
      <ServiceCards />
      <Benefits />
      <SignatureExperiences />
      <Testimonials />
      <FAQPreview />
      <CTASection />
    </main>
  );
}
