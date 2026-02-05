import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Disney() {
  return (
    <ServicePageTemplate
      title="Disney Experiences"
      subtitle="Magical Adventures"
      heroDescription="Transform your Disney dreams into reality with meticulously planned experiences. From character dining to VIP tours, we create moments that become cherished memories."
      included={[
        {
          title: "Comprehensive Planning",
          description: "Complete itinerary planning including park tickets, accommodations, dining reservations, and FastPass+ selections. We handle all the details so you can focus on the magic.",
        },
        {
          title: "Expert Guidance",
          description: "Insider knowledge and expertise to help you navigate the parks efficiently, avoid crowds, and discover hidden gems that make your visit truly special.",
        },
        {
          title: "Ongoing Support",
          description: "Dedicated support before, during, and after your trip. We're here to answer questions, make adjustments, and ensure everything runs smoothly.",
        },
      ]}
      whoItsFor={{
        title: "Perfect for Families, Couples, and Disney Enthusiasts",
        description: "Whether you're planning your first visit or your fiftieth, our Disney planning services are ideal for anyone seeking a seamless, magical experience. We work with families creating memories, couples celebrating special moments, and Disney enthusiasts who want to maximize every moment of their visit.",
      }}
      premiumFocus={{
        title: "Premium Dining & Experiences",
        description: "Access to exclusive dining experiences and special events",
        items: [
          "Character dining reservations",
          "Fine dining at signature restaurants",
          "VIP tour experiences",
          "Special event access",
          "Private dining arrangements",
          "Behind-the-scenes experiences",
        ]}
      }
    />
  );
}
