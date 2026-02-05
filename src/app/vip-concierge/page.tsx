import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function VIPConcierge() {
  return (
    <ServicePageTemplate
      title="VIP Concierge Services"
      subtitle="Personalized Excellence"
      heroDescription="Elevate your travel experience with our comprehensive VIP concierge services. Every detail thoughtfully considered, every moment carefully orchestrated to create an experience that reflects your unique preferences."
      included={[
        {
          title: "Personal Concierge",
          description: "Dedicated concierge service that anticipates your needs and handles every aspect of your journey. From initial planning through your return, we're your single point of contact for everything.",
        },
        {
          title: "Customized Experiences",
          description: "Completely personalized itineraries crafted around your preferences, interests, and vision. Every recommendation is tailored specifically to you, ensuring an experience that feels uniquely yours.",
        },
        {
          title: "24/7 Support",
          description: "Round-the-clock assistance during your travels. Whether you need last-minute changes, recommendations, or support with unexpected situations, we're here whenever you need us.",
        },
      ]}
      whoItsFor={{
        title: "Designed for Discerning Travelers",
        description: "Our VIP concierge services are ideal for those who value personalized attention, seamless experiences, and the peace of mind that comes with having every detail handled. Perfect for busy professionals, special celebrations, or anyone seeking a truly elevated travel experience where excellence is the standard.",
      }}
      premiumFocus={{
        title: "Premium Services & Experiences",
        description: "Access to exclusive services and curated experiences",
        items: [
          "Private transportation arrangements",
          "Exclusive restaurant reservations",
          "Personal shopping assistance",
          "Spa and wellness bookings",
          "Private event coordination",
          "Custom experience creation",
        ]}
      }
    />
  );
}
