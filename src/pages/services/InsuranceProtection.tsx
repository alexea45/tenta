import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Phone, CheckCircle, ArrowRight } from "lucide-react";

const InsuranceProtection = () => {
  const features = [
    "Full Coverage Plans",
    "Claims Processing", 
    "Risk Assessment",
    "24/7 Support",
    "Worldwide Coverage",
    "Competitive Rates"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Complete Protection",
      description: "Comprehensive insurance coverage and protection plans for all your valuable shipments."
    },
    {
      icon: FileText,
      title: "Easy Claims",
      description: "Streamlined claims processing with dedicated support team for quick resolution."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your insurance and protection needs."
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
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Insurance & Protection</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive insurance coverage and protection plans for all your valuable shipments. 
              Protect your investments with our comprehensive insurance plans. We offer full coverage 
              options tailored to the value and type of your cargo.
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
                  Complete Cargo Protection
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Protect your investments with our comprehensive insurance plans. We offer full coverage 
                  options tailored to the value and type of your cargo. Our experienced team provides 
                  risk assessment and customized protection solutions for all your shipping needs.
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
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&h=400&fit=crop&crop=center"
                  alt="Insurance and protection services"
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
              Why Choose Our Insurance Protection?
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive coverage with dedicated support and streamlined claims processing.
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

      {/* Coverage Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-logistics-dark mb-4">
              Coverage Options
            </h2>
            <p className="text-xl text-gray-600">
              Flexible insurance plans tailored to your specific cargo and risk requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Basic Coverage", 
                desc: "Essential protection for standard shipments",
                coverage: "Up to $50,000",
                features: ["Loss Protection", "Damage Coverage", "Basic Support"]
              },
              { 
                title: "Premium Coverage", 
                desc: "Enhanced protection for valuable cargo",
                coverage: "Up to $250,000", 
                features: ["Full Coverage", "Expedited Claims", "Priority Support"]
              },
              { 
                title: "Custom Coverage", 
                desc: "Tailored protection for specialized shipments",
                coverage: "Unlimited",
                features: ["Risk Assessment", "Custom Terms", "Dedicated Manager"]
              }
            ].map((plan, index) => (
              <Card key={index} className="text-center border-0 shadow-card bg-gradient-card">
                <CardHeader>
                  <div className="bg-logistics-green p-4 rounded-full w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-logistics-dark">{plan.title}</CardTitle>
                  <p className="text-logistics-blue font-semibold text-lg">{plan.coverage}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">{plan.desc}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-logistics-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-logistics-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Protect Your Valuable Cargo</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't leave your shipments unprotected. Get comprehensive insurance coverage 
            tailored to your specific needs. Contact us today for a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
                Get Insurance Quote
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

export default InsuranceProtection; 