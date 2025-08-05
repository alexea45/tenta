import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Scissors } from "lucide-react";

const HalfCut = () => {
  const service = {
    icon: Scissors,
    heroTitle: "Half-Cut Services",
    heroSubtitle: "Professionally dismantled and shipped as parts to save on import costs.",
    sectionTitle: "Save on Taxes, Ship Smarter",
    sectionParagraphs: [
      "We offer half-cut dismantling for customers looking to import only key components. This reduces tax burdens and enables easier port entry for select markets.",
      "Our trained team separates the engine and body, packages them securely, and prepares all supporting documents.",
    ],
    features: [
      "Engine separation",
      "Body disassembly",
      "Export preparation",
    ],
    images: [
      "https://i.imgur.com/F4jkAHw.jpeg",
      "https://i.imgur.com/A3U6NCF.jpeg"
    ],
    imageAlt: "Half-Cut Services",
    ctaTitle: "Ready to Go Half-Cut?",
    ctaSubtitle: "Book dismantling and save on your next shipment.",
  };

  return <ServicePageLayout {...service} />;
};

export default HalfCut; 