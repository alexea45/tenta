import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Truck } from "lucide-react";

const Towing = () => {
  const service = {
    icon: Truck,
    heroTitle: "Towing Services",
    heroSubtitle: "We transport your vehicles quickly and safely from auction lots to ports or warehouses.",
    sectionTitle: "Reliable Pickup & Delivery",
    sectionParagraphs: [
      "After you’ve won a vehicle, our towing services make sure it gets where it needs to go. We coordinate vehicle pickup from auction lots across the U.S. and deliver to designated yards, warehouses, or ports — all with secure handling and quick turnaround.",
      "Our national partner network allows us to offer fast service, frequent updates, and coverage in all major states.",
    ],
    features: [
      "Auction lot pickup",
      "Delivery to warehouse or port",
      "Same/next-day scheduling",
    ],
    image: "https://www.montebellotowing.us/_next/image?url=https%3A%2F%2Fmontebellotowing.us%2Fapi%2Fimages%2F5a13b07c116c872d-18fc65a337d4535a5493fa110f738df8.jpg&w=3840&q=75",
    imageAlt: "Towing Services",
    ctaTitle: "Get Your Car Moving Fast",
    ctaSubtitle: "Book a tow and let us handle the logistics.",
  };

  return <ServicePageLayout {...service} />;
};

export default Towing; 