import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Scissors, Car, Wrench, Package } from "lucide-react";

const HalfCut = () => {
  const service = {
    icon: Scissors,
    heroTitle: "Dismantling Services",
    heroSubtitle: "Professionally dismantled and shipped as parts to save on import costs.",
    sectionTitle: "Save on Taxes, Ship Smarter",
    sectionParagraphs: [
      "We offer professional dismantling services for customers looking to import only key components. This reduces tax burdens and enables easier port entry for select markets.",
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
    imageAlt: "Dismantling Services",
    ctaTitle: "Ready for Professional Dismantling?",
    ctaSubtitle: "Book dismantling services and save on your next shipment.",
    // Adding custom sections for the three cut types
    customSections: [
      {
        title: "Types of Dismantling Cuts",
        subtitle: "We offer three specialized dismantling options to meet your specific needs",
        items: [
          {
            icon: Car,
            title: "Half Cut",
            description: "Complete front section including engine, transmission, and front suspension. Ideal for major repairs and engine swaps.",
            features: ["Engine & transmission", "Front suspension", "Dashboard & interior", "Electrical components"]
          },
          {
            icon: Wrench, 
            title: "Nose Cut",
            description: "Front end assembly without the engine. Perfect for collision repairs and front-end restoration projects.",
            features: ["Front bumper & lights", "Radiator & cooling system", "Front fenders", "Hood & grille"]
          },
          {
            icon: Package,
            title: "Egyptian Cut", 
            description: "Strategic cut behind the front doors, preserving the cabin and rear section. Optimal for interior and rear component needs.",
            features: ["Complete interior", "Rear suspension", "Fuel tank & system", "Rear electrical harness"]
          }
        ]
      }
    ]
  };

  return <ServicePageLayout {...service} />;
};

export default HalfCut; 