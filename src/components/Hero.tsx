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
            Global Logistics Solutions
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            You Buy We Ship
          </h1>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            We provide you with full package services, from bidding on your favorite cars 
            in the US auctions and delivering to your desired locations worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-logistics-green hover:bg-logistics-green/90 text-white px-8 py-4 text-lg font-semibold"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-logistics-dark px-8 py-4 text-lg font-semibold flex items-center gap-2"
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