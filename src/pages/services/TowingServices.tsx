import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Clock, MapPin, Shield, CheckCircle, ArrowRight } from "lucide-react";

const TowingServices = () => {
  const features = [
    "24/7 Dispatch Service",
    "GPS Tracking", 
    "Certified Professional Drivers",
    "Damage-Free Guarantee",
    "Quick Response Time",
    "Secure Transportation"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Response",
      description: "Average pickup time of 30 minutes or less in major metropolitan areas."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All vehicles are fully insured and transported with utmost care."
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Available across all major auction sites and metropolitan areas."
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
              <Truck className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Towing Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We pride ourselves in providing the best dispatch service with the least amount of wait time. 
              Our professional towing services ensure your vehicles are safely transported from auction sites 
              to secure facilities with minimal delays.
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
                  Professional Vehicle Towing
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our professional towing services ensure your vehicles are safely transported from auction sites 
                  to our secure facilities. With a network of certified drivers and state-of-the-art equipment, 
                  we guarantee minimal wait times and maximum care for your investment.
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
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&crop=center"
                  alt="Professional towing service"
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
              Why Choose Our Towing Services?
            </h2>
            <p className="text-xl text-gray-600">
              Professional, reliable, and efficient towing solutions for all your vehicle transport needs.
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-logistics-dark mb-4">
              Our Towing Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, efficient, and transparent from pickup to delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Request Pickup", desc: "Contact us with vehicle details and location" },
              { step: "2", title: "Dispatch Driver", desc: "Certified driver dispatched to your location" },
              { step: "3", title: "Secure Loading", desc: "Vehicle carefully loaded onto transport truck" },
              { step: "4", title: "Safe Delivery", desc: "Vehicle delivered to destination facility" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-logistics-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-logistics-dark mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-logistics-blue mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-logistics-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Reliable Towing Services?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your vehicles transported safely and efficiently with our professional towing services. 
            Contact us today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
                Get Free Quote
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

export default TowingServices; 