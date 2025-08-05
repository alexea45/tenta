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
  };

  return <ServicePageLayout {...service} />;
};

export default AuctionAccount; 