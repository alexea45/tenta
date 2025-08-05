import { ServicePageLayout } from "@/components/ServicePageLayout";
import { BadgeCheck } from "lucide-react";

const Clearance = () => {
  const service = {
    icon: BadgeCheck,
    heroTitle: "Clearance Services",
    heroSubtitle: "We handle customs clearance so your vehicle arrives without delays.",
    sectionTitle: "Clear the Way",
    sectionParagraphs: [
      "Our team handles all the necessary import documentation and port coordination to clear your vehicle at the destination country. We help prevent avoidable delays and guide you on duties and taxes.",
      "With deep experience in UAE customs, we ensure a smooth delivery from port to warehouse.",
    ],
    features: [
      "Import documentation",
      "Port coordination",
      "Duties and tax guidance",
    ],
    image: "https://ship4wd.com/wp-content/uploads/Customs-Clearance-Delay-6-Reasons-and-Solutions-Explained.webp",
    imageAlt: "Clearance Services",
    ctaTitle: "Need Customs Cleared?",
    ctaSubtitle: "Let us handle the paperwork so you don’t have to.",
  };

  return <ServicePageLayout {...service} />;
};

export default Clearance; 