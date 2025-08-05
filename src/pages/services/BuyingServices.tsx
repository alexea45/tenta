import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Car } from "lucide-react";

const BuyingServices = () => {
  const service = {
    icon: Car,
    heroTitle: "Buying Services",
    heroSubtitle:
      "Purchase your dream car from any US or Canada dealership at the best price, hassle-free.",
    sectionTitle: "Buy with Ease",
    sectionParagraphs: [
      "Our buying services make it easy to purchase a car from any dealership in the US and Canada. We leverage our extensive network to find the vehicle you want and negotiate the best possible price. We manage the entire transaction, from secure payments to all the necessary paperwork, ensuring a smooth and transparent buying experience.",
    ],
    features: [
      "Access to a Nationwide Network of Dealerships",
      "Expert Price Negotiation on Your Behalf",
      "Comprehensive Vehicle History Reports",
      "Secure and Transparent Payment Processing",
      "Coordination of Pre-Purchase Inspections",
      "Handling of All Purchase Paperwork",
    ],
    image:
      "https://hips.hearstapps.com/hmg-prod/images/classicconvertibles-1614973682.jpg",
    imageAlt: "Buying a car from a dealership",
    ctaTitle: "Ready to Buy Your Dream Car?",
    ctaSubtitle:
      "Let us help you find and purchase your perfect car. Contact us today to get started.",
  };

  return <ServicePageLayout {...service} />;
};

export default BuyingServices; 