import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Gavel,
  Car,
  Ship,
  ArrowRight,
  Truck,
  Upload,
  BadgeCheck,
  CalendarClock,
  Scissors,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Gavel,
      title: "Bidding Services",
      description:
        "We bid on your dream car from US and Canada auctions, handling the entire process for you.",
      fullDescription:
        "Our professional bidding services give you access to the largest car auctions in the US and Canada. We handle the bidding process, paperwork, and logistics, ensuring you get the best price for your dream car.",
      features: [
        "Access to Major Auctions",
        "Proxy Bidding",
        "Inspection Services",
        "Paperwork Handling",
      ],
      image:
        "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=600&h=400&fit=crop&crop=center",
      slug: "bidding",
    },
    {
      icon: Car,
      title: "Buying Services",
      description:
        "Purchase your dream car from US and Canada dealerships at affordable rates.",
      fullDescription:
        "Our buying services help you find and purchase your dream car from dealerships across the US and Canada. We negotiate the best price, handle the paperwork, and arrange for transportation to our facility.",
      features: [
        "Nationwide Dealership Network",
        "Price Negotiation",
        "Secure Payments",
        "Vehicle History Reports",
      ],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/classicconvertibles-1614973682.jpg",
      slug: "buying",
    },
    {
      icon: Ship,
      title: "Shipping Services",
      description:
        "Trusted A-Z shipping services to transport your car from the US or Canada to the UAE safely and securely.",
      fullDescription:
        "Our A-Z shipping services cover everything from towing your car from the auction or dealership to freight and delivery in the UAE. We handle all logistics, customs, and paperwork to ensure a smooth and secure process.",
      features: [
        "Towing and Transport",
        "Ocean Freight",
        "Customs Clearance",
        "Door-to-Door Delivery",
      ],
      image:
        "https://www.savinodelbene.com/wp-content/uploads/2023/10/ocean-freight-shipping.png",
      slug: "shipping",
    },
    {
      icon: Gavel,
      title: "Auction Account Services",
      description:
        "We help you set up, verify, and fund your Copart, IAAI, and Manheim accounts so you’re ready to bid instantly.",
      features: [
        "Account setup & verification",
        "Deposit guidance",
        "Login support",
      ],
      image: "https://file3.autolookout.net/35074/029544/4929/Ow==/autonation-auto-auction-los-angeles-2.jpg",
      slug: "auction-account",
    },
    {
      icon: Truck,
      title: "Towing Services",
      description:
        "We arrange vehicle pickup from auction yards and transport to warehouses or ports.",
      features: ["Local auction towing", "Port drop-off", "Fast turnaround time"],
      image: "https://www.montebellotowing.us/_next/image?url=https%3A%2F%2Fmontebellotowing.us%2Fapi%2Fimages%2F5a13b07c116c872d-18fc65a337d4535a5493fa110f738df8.jpg&w=3840&q=75",
      slug: "towing",
    },
    {
      icon: Upload,
      title: "Loading Services",
      description:
        "We safely load your vehicles into containers or onto RORO vessels for secure international shipping.",
      features: ["Forklift/container handling", "Loading photos", "Damage prevention"],
      image: "https://blog.trans-rak.com/hs-fs/hubfs/IMG_8389.jpg?width=4032&name=IMG_8389.jpg",
      slug: "loading",
    },
    {
      icon: BadgeCheck,
      title: "Clearance Services",
      description:
        "We handle customs clearance at destination ports so your car is released without issues.",
      features: ["Import docs", "Port coordination", "Duties/taxes guidance"],
      image: "https://ship4wd.com/wp-content/uploads/Customs-Clearance-Delay-6-Reasons-and-Solutions-Explained.webp",
      slug: "clearance",
    },
    {
      icon: CalendarClock,
      title: "Booking Services",
      description:
        "We book your vehicle space on the fastest, most cost-effective shipping routes.",
      features: ["Weekly sailings", "Port-to-port scheduling", "ETA notifications"],
      image: "https://www.bookitlive.net/content/wp-content/uploads/2021/03/How-does-booking-system-work.jpg",
      slug: "booking",
    },
    {
      icon: Scissors,
      title: "Dismantling Services",
      description:
        "We dismantle vehicles professionally to ship them as parts and save on import taxes.",
      features: ["Engine separation", "Body disassembly", "Export prep"],
      image: "https://carpart.com.au/uploads/blog/354299/half-cut-cars-1671004607.jpeg",
      slug: "half-cut",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner for buying and shipping cars from the US to Dubai. 
            We handle everything from bidding at auctions to delivering your car to your doorstep.
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
            Contact us today for a personalized quote and consultation. Our experts are ready to help you find and ship your dream car.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
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