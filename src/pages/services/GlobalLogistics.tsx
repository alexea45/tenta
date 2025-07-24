import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Warehouse, FileText, CheckCircle, ArrowRight } from "lucide-react";

const GlobalLogistics = () => {
  const features = [
    "Supply Chain Management",
    "Customs Clearance", 
    "Warehousing",
    "Distribution Network",
    "Inventory Management",
    "End-to-End Solutions"
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Worldwide Network",
      description: "End-to-end logistics solutions connecting businesses worldwide with efficient supply chain management."
    },
    {
      icon: Warehouse,
      title: "Strategic Warehousing",
      description: "Secure warehousing facilities strategically located for optimal distribution efficiency."
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete documentation and customs clearance support for international shipments."
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
              <Globe className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Global Logistics</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              End-to-end logistics solutions connecting businesses worldwide with efficient supply chain management. 
              Our global logistics solutions streamline your supply chain with comprehensive services from origin 
              to destination, including customs clearance, warehousing, and distribution.
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
                  Comprehensive Supply Chain Solutions
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our global logistics solutions streamline your supply chain with comprehensive services from origin 
                  to destination, including customs clearance, warehousing, and distribution. We handle the complexity 
                  of international logistics so you can focus on growing your business.
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
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center"
                  alt="Global logistics solutions"
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
              Why Choose Our Global Logistics?
            </h2>
            <p className="text-xl text-gray-600">
              Streamlined supply chain management with worldwide reach and local expertise.
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
              Our Logistics Process
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive approach to global supply chain management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Planning", desc: "Analyze requirements and design optimal logistics strategy" },
              { step: "2", title: "Execution", desc: "Implement supply chain solutions with global partners" },
              { step: "3", title: "Monitoring", desc: "Track progress and optimize operations in real-time" },
              { step: "4", title: "Delivery", desc: "Ensure timely delivery and complete documentation" }
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
          <h2 className="text-3xl font-bold mb-6">Streamline Your Global Operations</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us handle your global logistics challenges with our comprehensive supply chain solutions. 
            Contact us today to optimize your international operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
                Get Logistics Solution
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

export default GlobalLogistics; 