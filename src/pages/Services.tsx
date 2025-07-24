import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Package, Ship, Globe, Car, Shield, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Towing Services",
      description: "We pride ourselves in providing the best dispatch service with the least amount of wait time.",
      fullDescription: "Our professional towing services ensure your vehicles are safely transported from auction sites to our secure facilities. With a network of certified drivers and state-of-the-art equipment, we guarantee minimal wait times and maximum care for your investment.",
      features: ["24/7 Dispatch Service", "GPS Tracking", "Certified Professional Drivers", "Damage-Free Guarantee"],
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&crop=center",
      slug: "towing-services"
    },
    {
      icon: Package,
      title: "Loading Services", 
      description: "Having multiple protection layers from utilizing best materials, we ensure that you have peace of mind of your shipment.",
      fullDescription: "Our expert loading services use industry-leading materials and techniques to protect your cargo during transit. Multiple layers of protection ensure your items arrive in perfect condition.",
      features: ["Multi-Layer Protection", "Professional Packing", "Fragile Item Handling", "Climate Control"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center",
      slug: "loading-services"
    },
    {
      icon: Ship,
      title: "Shipping Services",
      description: "Our extensive network provides reliable shipping solutions across all major international routes.",
      fullDescription: "From container shipping to express delivery, our comprehensive shipping services connect your business to global markets with reliable, cost-effective solutions.",
      features: ["Global Network", "Container & LCL Options", "Express Delivery", "Real-time Tracking"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center",
      slug: "shipping-services"
    },
    {
      icon: Globe,
      title: "Global Logistics",
      description: "End-to-end logistics solutions connecting businesses worldwide with efficient supply chain management.",
      fullDescription: "Our global logistics solutions streamline your supply chain with comprehensive services from origin to destination, including customs clearance, warehousing, and distribution.",
      features: ["Supply Chain Management", "Customs Clearance", "Warehousing", "Distribution Network"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center",
      slug: "global-logistics"
    },
    {
      icon: Car,
      title: "Auto Transport",
      description: "Specialized vehicle transportation services for cars, motorcycles, and commercial vehicles.",
      fullDescription: "Specializing in auto transport from US auctions to worldwide destinations. We handle everything from luxury cars to commercial vehicles with the utmost care and professionalism.",
      features: ["Auction Pickup", "Door-to-Door Service", "Enclosed Transport", "Vehicle Inspection"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
      slug: "auto-transport"
    },
    {
      icon: Shield,
      title: "Insurance & Protection",
      description: "Comprehensive insurance coverage and protection plans for all your valuable shipments.",
      fullDescription: "Protect your investments with our comprehensive insurance plans. We offer full coverage options tailored to the value and type of your cargo.",
      features: ["Full Coverage Plans", "Claims Processing", "Risk Assessment", "24/7 Support"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&h=400&fit=crop&crop=center",
      slug: "insurance-protection"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your specific needs. 
            From vehicle transport to global shipping, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-card overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-logistics-blue p-3 rounded-full">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-logistics-dark group-hover:text-logistics-blue transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <ArrowRight size={16} className="text-logistics-green" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={`/services/${service.slug}`}>
                      <Button variant="outline" className="w-full mt-4 border-logistics-blue text-logistics-blue hover:bg-logistics-blue hover:text-white">
                        Learn More
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-logistics-dark mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and consultation. Our experts are ready to help you find the perfect logistics solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
                Get Quote
              </Button>
            </a>
            <a href="/tracking">
              <Button variant="outline" size="lg" className="border-logistics-green text-logistics-green hover:bg-logistics-green hover:text-white px-8 py-4">
                Track Shipment
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;