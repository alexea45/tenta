import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedPartners } from "@/components/TrustedPartners";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustedPartners />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
