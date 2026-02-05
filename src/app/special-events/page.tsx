import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function SpecialEvents() {
  return (
    <ServicePageTemplate
      title="Special Events"
      subtitle="Celebrating Life's Moments"
      heroDescription="Mark life's special occasions with thoughtfully planned events. From milestone birthdays to anniversaries, family reunions to celebrations, we create memorable experiences that honor these important moments."
      included={[
        {
          title: "Event Planning & Coordination",
          description: "Complete event planning including venue selection, catering arrangements, entertainment, and all logistics. We coordinate every detail so you can fully enjoy the celebration.",
        },
        {
          title: "Customized Celebrations",
          description: "Personalized event design that reflects your vision and style. Every element is carefully considered to create an experience that feels authentic and meaningful to you.",
        },
        {
          title: "Seamless Execution",
          description: "On-site coordination and support to ensure everything runs smoothly. We handle the details so you can focus on celebrating with your guests and creating memories.",
        },
      ]}
      whoItsFor={{
        title: "Perfect for Celebrations & Milestones",
        description: "Our special events services are ideal for anyone planning a meaningful celebration. Whether it's a milestone birthday, anniversary, family reunion, graduation, or any special occasion worth celebrating, we help you create an event that honors the moment and creates lasting memories for everyone involved.",
      }}
      premiumFocus={{
        title: "Premium Event Experiences",
        description: "Exclusive event elements and exceptional dining",
        items: [
          "Custom event design",
          "Premium catering options",
          "Entertainment coordination",
          "Themed experiences",
          "Private venue arrangements",
          "Surprise elements and special touches",
        ]}
      }
    />
  );
}
