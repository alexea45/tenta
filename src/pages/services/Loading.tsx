import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Upload } from "lucide-react";

const Loading = () => {
  const service = {
    icon: Upload,
    heroTitle: "Loading Services",
    heroSubtitle: "Secure container and RORO loading for safe overseas transport.",
    sectionTitle: "Packed for Protection",
    sectionParagraphs: [
      "We professionally load vehicles into containers or onto RORO vessels at major ports. From forklifts to tie-downs, our team handles the loading with care — minimizing damage and ensuring export compliance.",
      "You’ll also receive visual documentation of the process for added peace of mind.",
    ],
    features: [
      "Forklift and container loading",
      "Tie-down and damage protection",
      "Loading photos",
    ],
    image: "https://blog.trans-rak.com/hs-fs/hubfs/IMG_8389.jpg?width=4032&name=IMG_8389.jpg",
    imageAlt: "Loading Services",
    ctaTitle: "Ready to Load and Ship?",
    ctaSubtitle: "Trust our team to load your car safely and securely.",
  };

  return <ServicePageLayout {...service} />;
};

export default Loading; 