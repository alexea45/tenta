import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, CheckCircle } from "lucide-react";

const ShippingServicesPage = () => {
  const features = [
    "A-to-Z Logistics Management",
    "Towing from Auction or Dealership",
    "Secure Ocean Freight to the UAE",
    "All Customs Clearance and Paperwork Handled",
    "Real-Time Shipment Tracking",
    "Door-to-Door Delivery in Dubai"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Ship className="h-16 w-16 mx-auto mb-4 text-white" />
          <h1 className="text-5xl font-bold mb-6">Shipping Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Reliable and secure A-Z shipping for your car, from the US and Canada to your doorstep in Dubai.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1579586337278-35aa24b33436?w=800&h=600&fit=crop&crop=center"
                alt="Car being shipped"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-logistics-dark mb-6">
                Ship with Peace of Mind
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our comprehensive, A-Z shipping service handles every aspect of transporting your car from the US or Canada to the UAE. We manage everything from the initial towing from the auction or dealership, to the ocean freight, and all the way through customs clearance in Dubai. We provide a seamless, secure, and transparent shipping process, so you can have complete peace of mind.
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
            Ready to Ship Your Car?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free shipping quote. We'll handle all the details to get your car to you safely and securely.
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
              Get a Quote
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingServicesPage; 