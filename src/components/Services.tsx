import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Ship, Globe, Car, Shield } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Towing Services",
      description: "We pride ourselves in providing the best dispatch service with the least amount of wait time.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Package,
      title: "Loading Services", 
      description: "Having multiple protection layers from utilizing best materials, we ensure that you have peace of mind of your shipment.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Ship,
      title: "Shipping Services",
      description: "Our extensive network provides reliable shipping solutions across all major international routes.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Globe,
      title: "Global Logistics",
      description: "End-to-end logistics solutions connecting businesses worldwide with efficient supply chain management.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Car,
      title: "Auto Transport",
      description: "Specialized vehicle transportation services for cars, motorcycles, and commercial vehicles.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Shield,
      title: "Insurance & Protection",
      description: "Comprehensive insurance coverage and protection plans for all your valuable shipments.",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-logistics-dark mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tenta Logistics provides a wide array of services tailored to meet the diverse needs 
            of both car wholesalers and retailers. Whether you're looking for solutions in logistics, 
            transportation, or supply chain management, we have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceSlug = service.title.toLowerCase().replace(' ', '-');
            return (
              <a href={`/services/${serviceSlug}`} key={index}>
                <Card 
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-gradient-card overflow-hidden"
                >
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
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};