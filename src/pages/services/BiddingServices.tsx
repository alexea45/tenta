import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gavel, CheckCircle } from "lucide-react";

const BiddingServices = () => {
  const features = [
    "Access to Major US and Canada Car Auctions",
    "Proxy Bidding on Your Behalf",
    "Pre-Auction Vehicle Inspections",
    "All Paperwork and Documentation Handled",
    "Competitive Bidding Strategy",
    "Secure Payment Processing"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Gavel className="h-16 w-16 mx-auto mb-4 text-white" />
          <h1 className="text-5xl font-bold mb-6">Bidding Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your gateway to US and Canada's biggest car auctions. Bid on your dream car and let us handle the rest.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&h=600&fit=crop&crop=center"
                alt="Bidding on a car at an auction"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-logistics-dark mb-6">
                Bid with Confidence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our professional bidding services provide you with direct access to the largest car auctions across the United States and Canada. We act as your official broker, managing the entire bidding process from start to finish. We'll help you secure the best possible price on your dream car, handling all the complicated paperwork and logistics so you don't have to.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-logistics-green" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-logistics-dark mb-6">
            Ready to Start Bidding?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to get started. Our auction specialists are ready to help you find and win your dream car.
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
              Get Started
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BiddingServices; 