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
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl text-white">
          <p className="text-lg mb-4 text-logistics-blue font-semibold">
            You Buy in America, We Ship to the Middle East
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            From U.S. auctions to your driveway - we handle everything
          </h1>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Tenta Logistics helps customers across the Middle East purchase vehicles from U.S. auctions and delivers them directly to your country. We manage the entire process: bidding, paperwork, shipping, and import clearance so you don’t have to.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact">
              <Button 
                size="lg" 
                className="bg-logistics-green hover:bg-logistics-green/90 text-white px-8 py-4 text-lg font-semibold"
              >
                Get Started
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-logistics-dark bg-white hover:bg-logistics-dark hover:text-white px-8 py-4 text-lg font-semibold flex items-center gap-2"
            >
              <Play size={20} />
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};