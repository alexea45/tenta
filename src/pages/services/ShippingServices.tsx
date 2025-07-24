import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Globe, Clock, Package, CheckCircle, ArrowRight } from "lucide-react";

const ShippingServices = () => {
  const features = [
    "Global Network",
    "Container & LCL Options", 
    "Express Delivery",
    "Real-time Tracking",
    "Customs Clearance",
    "Door-to-Door Service"
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Worldwide Coverage",
      description: "Extensive network provides reliable shipping solutions across all major international routes."
    },
    {
      icon: Ship,
      title: "Flexible Options",
      description: "From container shipping to express delivery, we offer comprehensive shipping services."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Express shipping options available for time-sensitive cargo and urgent deliveries."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-logistics-blue p-4 rounded-full w-fit mx-auto mb-6">
              <Ship className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Shipping Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Our extensive network provides reliable shipping solutions across all major international routes. 
              From container shipping to express delivery, our comprehensive shipping services connect your 
              business to global markets with reliable, cost-effective solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-logistics-dark mb-6">
                  Global Shipping Solutions
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  From container shipping to express delivery, our comprehensive shipping services connect your 
                  business to global markets with reliable, cost-effective solutions. We handle everything from 
                  documentation to customs clearance, ensuring smooth international transactions.
                </p>
                <ul className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-logistics-green" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact">
                  <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
                    Get Quote
                  </Button>
                </a>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center"
                  alt="Global shipping services"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-logistics-dark mb-4">
              Why Choose Our Shipping Services?
            </h2>
            <p className="text-xl text-gray-600">
              Reliable, efficient, and cost-effective shipping solutions for businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-card bg-gradient-card">
                  <CardHeader>
                    <div className="bg-logistics-blue p-4 rounded-full w-fit mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-logistics-dark">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-logistics-dark mb-4">
              Shipping Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the shipping method that best fits your timeline and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Container Shipping", 
                desc: "Full container load (FCL) for large shipments",
                time: "15-30 days",
                icon: Ship
              },
              { 
                title: "LCL Shipping", 
                desc: "Less than container load for smaller shipments",
                time: "20-35 days", 
                icon: Package
              },
              { 
                title: "Express Shipping", 
                desc: "Fast delivery for urgent shipments",
                time: "3-7 days",
                icon: Clock
              }
            ].map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-card bg-gradient-card">
                  <CardHeader>
                    <div className="bg-logistics-green p-4 rounded-full w-fit mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-logistics-dark">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-3">{option.desc}</p>
                    <p className="text-logistics-blue font-semibold">Transit Time: {option.time}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-logistics-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ship Globally?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect your business to worldwide markets with our reliable shipping services. 
            Contact us today for competitive rates and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
                Get Shipping Quote
              </Button>
            </a>
            <a href="/services">
              <Button variant="outline" size="lg" className="border-white text-logistics-dark bg-white hover:bg-logistics-dark hover:text-white px-8 py-4">
                View All Services
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingServices; 