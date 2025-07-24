import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, MapPin, Shield, CheckCircle, ArrowRight } from "lucide-react";

const AutoTransport = () => {
  const features = [
    "Auction Pickup",
    "Door-to-Door Service", 
    "Enclosed Transport",
    "Vehicle Inspection",
    "Real-time Tracking",
    "Insurance Coverage"
  ];

  const benefits = [
    {
      icon: Car,
      title: "Vehicle Expertise",
      description: "Specialized vehicle transportation services for cars, motorcycles, and commercial vehicles."
    },
    {
      icon: MapPin,
      title: "Auction Specialists",
      description: "Direct pickup from major US auction sites including Copart, IAAI, and Manheim."
    },
    {
      icon: Shield,
      title: "Protected Transport",
      description: "Enclosed transport options available for luxury and high-value vehicles."
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
              <Car className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Auto Transport</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Specialized vehicle transportation services for cars, motorcycles, and commercial vehicles. 
              Specializing in auto transport from US auctions to worldwide destinations, we handle everything 
              from luxury cars to commercial vehicles with the utmost care and professionalism.
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
                  Professional Vehicle Transportation
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Specializing in auto transport from US auctions to worldwide destinations. We handle everything 
                  from luxury cars to commercial vehicles with the utmost care and professionalism. Our network 
                  of certified carriers ensures your vehicles are transported safely and efficiently.
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
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
                  alt="Auto transport services"
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
              Why Choose Our Auto Transport?
            </h2>
            <p className="text-xl text-gray-600">
              Professional vehicle transportation with specialized handling and comprehensive protection.
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

      {/* Vehicle Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-logistics-dark mb-4">
              Vehicles We Transport
            </h2>
            <p className="text-xl text-gray-600">
              Professional transportation for all types of vehicles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Passenger Cars", 
                desc: "Sedans, SUVs, hatchbacks, and luxury vehicles",
                image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=250&fit=crop&crop=center"
              },
              { 
                title: "Motorcycles", 
                desc: "Sport bikes, cruisers, and custom motorcycles",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center"
              },
              { 
                title: "Commercial Vehicles", 
                desc: "Trucks, vans, and commercial fleet vehicles",
                image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop&crop=center"
              }
            ].map((vehicle, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-card bg-gradient-card">
                <div className="relative">
                  <img 
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-logistics-dark">{vehicle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{vehicle.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-logistics-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Vehicle Transportation?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Trust your vehicles to our professional auto transport services. From auction pickup to 
            international delivery, we handle it all with care and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
                Get Transport Quote
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

export default AutoTransport; 