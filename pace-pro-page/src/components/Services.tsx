import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gavel, Car, Ship, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Services = () => {
  const services = [
    {
      icon: Gavel,
      title: "Bidding Services",
      description: "We bid on your dream car from US and Canada auctions, handling the entire process for you.",
      features: ["Access to Major Auctions", "Proxy Bidding", "Inspection Services"],
      image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=600&h=400&fit=crop&crop=center",
      slug: "bidding"
    },
    {
      icon: Car,
      title: "Buying Services",
      description: "Purchase your dream car from US and Canada dealerships at affordable rates.",
      features: ["Nationwide Dealership Network", "Price Negotiation", "Secure Payments"],
      image: "https://hips.hearstapps.com/hmg-prod/images/classicconvertibles-1614973682.jpg",
      slug: "buying"
    },
    {
      icon: Ship,
      title: "Shipping Services",
      description: "Trusted A-Z shipping services to transport your car from the US or Canada to the UAE safely and securely.",
      features: ["Towing and Transport", "Ocean Freight", "Customs Clearance"],
      image: "https://www.savinodelbene.com/wp-content/uploads/2023/10/ocean-freight-shipping.png",
      slug: "shipping"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-logistics-dark mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A seamless, end-to-end car buying and shipping experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a href={`/services/${service.slug}`} key={index}>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-gradient-card overflow-hidden h-full">
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
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <ArrowRight
                            size={16}
                            className="text-logistics-green"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <a href="/services">
            <Button
              size="lg"
              className="bg-logistics-blue hover:bg-logistics-blue/90 text-white px-8 py-4 text-lg font-semibold"
            >
              View All Services
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};