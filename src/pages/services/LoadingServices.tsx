import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Shield, Thermometer, CheckCircle, ArrowRight } from "lucide-react";

const LoadingServices = () => {
  const features = [
    "Multi-Layer Protection",
    "Professional Packing", 
    "Fragile Item Handling",
    "Climate Control",
    "Damage Prevention",
    "Quality Assurance"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Maximum Protection",
      description: "Multiple protection layers using the best materials for complete peace of mind."
    },
    {
      icon: Package,
      title: "Expert Handling",
      description: "Professional packing techniques ensure your items are secure during transport."
    },
    {
      icon: Thermometer,
      title: "Climate Control",
      description: "Temperature and humidity controlled environment for sensitive items."
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
              <Package className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Loading Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Having multiple protection layers from utilizing best materials, we ensure that you have peace of mind 
              of your shipment. Our expert loading services use industry-leading materials and techniques to protect 
              your cargo during transit.
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
                  Professional Loading & Packing
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our expert loading services use industry-leading materials and techniques to protect your cargo 
                  during transit. Multiple layers of protection ensure your items arrive in perfect condition, 
                  regardless of the journey's length or complexity.
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
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center"
                  alt="Professional loading services"
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
              Why Choose Our Loading Services?
            </h2>
            <p className="text-xl text-gray-600">
              Professional packing and loading solutions that guarantee your cargo's safety and security.
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
              Our Loading Process
            </h2>
            <p className="text-xl text-gray-600">
              Systematic approach to ensure maximum protection and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", desc: "Evaluate cargo type and protection requirements" },
              { step: "2", title: "Material Selection", desc: "Choose appropriate packing materials" },
              { step: "3", title: "Professional Packing", desc: "Expert loading with multi-layer protection" },
              { step: "4", title: "Quality Check", desc: "Final inspection before transport" }
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
          <h2 className="text-3xl font-bold mb-6">Need Professional Loading Services?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Protect your valuable cargo with our expert loading and packing services. 
            Contact us today for a customized protection solution.
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

export default LoadingServices; 