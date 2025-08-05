import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Gavel } from "lucide-react";

const AuctionAccount = () => {
  const service = {
    icon: Gavel,
    heroTitle: "Auction Account Services",
    heroSubtitle: "Seamlessly set up and manage your Copart, IAAI, and Manheim accounts.",
    sectionTitle: "Bid with Confidence",
    sectionParagraphs: [
      "Setting up auction accounts can be a hassle — but with our Auction Account Services, we simplify everything. Whether you’re new to Copart or a frequent Manheim buyer, we handle account creation, verification, and funding to get you bidding fast.",
      "We’ll walk you through every step: from submitting proper documents to linking your payment method. We also offer ongoing support for deposits, security holds, and auction dashboard navigation.",
    ],
    features: [
      "Account setup & verification",
      "Deposit assistance",
      "Live auction access support",
    ],
    image: "https://file3.autolookout.net/35074/029544/4929/Ow==/autonation-auto-auction-los-angeles-2.jpg",
    imageAlt: "Auction Account Services",
    ctaTitle: "Ready to Start Bidding?",
    ctaSubtitle: "We’ll get your account live and ready to go — reach out today.",
    logos: [
      { src: "https://companieslogo.com/img/orig/IAA_BIG-ff7e4abd.png?t=1720244492", alt: "IAA", href: "https://www.iaai.com/" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Copart_logo.svg/2560px-Copart_logo.svg.png", alt: "Copart", href: "https://www.copart.com/" },
      { src: "https://www.coxautoinc.com/wp-content/uploads/2017/07/Manheim-COLOR-Icon-with-CAI-BLACK-RGB-720x160-b81732b1-7422-4916-8d99-14239bc20107.png", alt: "Manheim", href: "https://www.manheim.com/" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AutoNation_logo.svg/1280px-AutoNation_logo.svg.png", alt: "AutoNation", href: "https://www.autonation.com/" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/6/60/Carmaxlogo2021.png", alt: "CarMax", href: "https://www.carmax.com/" },
    ],
  };

  return <ServicePageLayout {...service} />;
};

export default AuctionAccount; 