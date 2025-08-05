import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/logistics-hero.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-start bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
      }}
    >
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="whitespace-nowrap">From U.S. auctions to the Middle East</span> <br /> We Handle Everything
          </h1>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Tenta Logistics helps customers across the Middle East purchase vehicles from U.S. auctions and delivers them directly to your country. We manage the entire process: bidding, paperwork, shipping, and import clearance so you don’t have to.
          </p>
          
          <div className="flex justify-center">
            <a href="/contact">
              <Button 
                size="lg" 
                className="bg-logistics-green hover:bg-logistics-green/90 text-white px-8 py-4 text-lg font-semibold"
              >
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};