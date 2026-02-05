import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  accentColor: string;
}

function ServiceCard({ title, description, href, accentColor }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block relative overflow-hidden rounded-lg bg-midnight text-white h-full transition-all duration-500 hover:shadow-2xl"
    >
      {/* Dark background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-charcoal to-midnight opacity-90" />
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-2H0v-2h20v-2H0v-2h20z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Content */}
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between min-h-[400px]">
        <div>
          <div className={`w-12 h-1 ${accentColor} mb-6 group-hover:w-16 transition-all duration-300`} />
          <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
            {title}
          </h3>
          <p className="text-cloud/80 text-lg leading-relaxed font-light">
            {description}
          </p>
        </div>
        
        <div className="mt-8 flex items-center text-gold group-hover:translate-x-2 transition-transform duration-300">
          <span className="font-light tracking-wide">Explore</span>
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function ServiceCards() {
  const services = [
    {
      title: "Disney Experiences",
      description: "Magical adventures crafted with attention to every detail. From character dining to VIP tours, we create unforgettable moments.",
      href: "/disney",
      accentColor: "bg-gold",
    },
    {
      title: "Universal Studios",
      description: "Thrilling theme park experiences and exclusive access. Let us handle the planning so you can focus on the adventure.",
      href: "/universal",
      accentColor: "bg-gold",
    },
    {
      title: "VIP Concierge",
      description: "Personalized service that anticipates your needs. Every detail curated, every moment elevated to perfection.",
      href: "/vip-concierge",
      accentColor: "bg-gold",
    },
  ];

  return (
    <section className="py-20 bg-cloud">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-midnight mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed">
            Specialized travel experiences designed around your unique vision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
