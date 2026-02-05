import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Universal() {
  return (
    <ServicePageTemplate
      title="Universal Studios"
      subtitle="Thrilling Adventures"
      heroDescription="Experience the excitement of Universal Studios with expertly planned visits. From Wizarding World adventures to thrilling attractions, we create seamless experiences that maximize your fun."
      included={[
        {
          title: "Complete Itinerary Planning",
          description: "Full planning including park tickets, Express Pass options, hotel accommodations, and dining reservations. We optimize your schedule to minimize wait times and maximize enjoyment.",
        },
        {
          title: "Strategic Planning",
          description: "Expert knowledge of park layouts, crowd patterns, and attraction timing to help you experience more during your visit. We know when to visit which attractions for the best experience.",
        },
        {
          title: "Dedicated Assistance",
          description: "Support throughout your planning process and during your visit. We're available to answer questions, make changes, and ensure your Universal experience exceeds expectations.",
        },
      ]}
      whoItsFor={{
        title: "Ideal for Thrill Seekers, Movie Fans, and Families",
        description: "Our Universal Studios planning services are perfect for those seeking thrilling adventures, movie enthusiasts wanting to immerse themselves in their favorite films, and families looking for exciting experiences together. Whether it's your first visit or you're a returning guest, we help you discover new ways to enjoy the parks.",
      }}
      premiumFocus={{
        title: "Exclusive Experiences & Dining",
        description: "Access to premium experiences and exceptional dining",
        items: [
          "VIP experiences and tours",
          "Exclusive dining reservations",
          "Early park admission planning",
          "Special event access",
          "Private group experiences",
          "Behind-the-scenes opportunities",
        ]}
      }
    />
  );
}
