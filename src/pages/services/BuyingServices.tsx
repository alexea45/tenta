import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, CheckCircle } from "lucide-react";

const BuyingServices = () => {
  const features = [
    "Access to a Nationwide Network of Dealerships",
    "Expert Price Negotiation on Your Behalf",
    "Comprehensive Vehicle History Reports",
    "Secure and Transparent Payment Processing",
    "Coordination of Pre-Purchase Inspections",
    "Handling of All Purchase Paperwork"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Car className="h-16 w-16 mx-auto mb-4 text-white" />
          <h1 className="text-5xl font-bold mb-6">Buying Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Purchase your dream car from any US or Canada dealership at the best price, hassle-free.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-logistics-dark mb-6">
                Buy with Ease
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our buying services make it easy to purchase a car from any dealership in the US and Canada. We leverage our extensive network to find the vehicle you want and negotiate the best possible price. We manage the entire transaction, from secure payments to all the necessary paperwork, ensuring a smooth and transparent buying experience.
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
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=center"
                alt="Buying a car from a dealership"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-logistics-dark mb-6">
            Ready to Buy Your Dream Car?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you find and purchase your perfect car. Contact us today to get started.
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

export default BuyingServices; 