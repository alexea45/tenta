import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Package, Truck, Ship, CheckCircle, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTracking = () => {
    // Simulate tracking result
    setTrackingResult({
      id: trackingNumber || "TL-2024-001234",
      status: "In Transit",
      origin: "Houston, TX",
      destination: "Los Angeles, CA", 
      estimatedDelivery: "March 15, 2024",
      currentLocation: "Phoenix, AZ",
      timeline: [
        { status: "Order Received", date: "Mar 10, 2024", time: "09:00 AM", completed: true },
        { status: "Picked Up", date: "Mar 11, 2024", time: "02:30 PM", completed: true },
        { status: "In Transit", date: "Mar 12, 2024", time: "06:45 AM", completed: true },
        { status: "Out for Delivery", date: "Mar 15, 2024", time: "08:00 AM", completed: false },
        { status: "Delivered", date: "Mar 15, 2024", time: "TBD", completed: false },
      ]
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Track Your Shipment</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated on your shipment's progress with real-time tracking information
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-card border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-logistics-dark">Enter Tracking Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Input 
                    placeholder="Enter tracking number (e.g., TL-2024-001234)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleTracking}
                    className="bg-logistics-blue hover:bg-logistics-blue/90 px-8"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Track
                  </Button>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have a tracking number? <a href="/contact" className="text-logistics-blue hover:underline">Contact us</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingResult && (
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Status Overview */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-logistics-dark">Shipment Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <Package className="h-8 w-8 text-logistics-blue mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Tracking ID</p>
                      <p className="font-semibold">{trackingResult.id}</p>
                    </div>
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-logistics-green mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Status</p>
                      <p className="font-semibold text-logistics-blue">{trackingResult.status}</p>
                    </div>
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-logistics-blue mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Current Location</p>
                      <p className="font-semibold">{trackingResult.currentLocation}</p>
                    </div>
                    <div className="text-center">
                      <Truck className="h-8 w-8 text-logistics-green mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Est. Delivery</p>
                      <p className="font-semibold">{trackingResult.estimatedDelivery}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Route Information */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-logistics-dark">Route Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="bg-logistics-green p-3 rounded-full w-fit mx-auto mb-2">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <p className="font-semibold">Origin</p>
                      <p className="text-gray-600">{trackingResult.origin}</p>
                    </div>
                    <div className="flex-1 h-px bg-gray-300 mx-4 relative">
                      <Ship className="h-6 w-6 text-logistics-blue absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
                    </div>
                    <div className="text-center">
                      <div className="bg-logistics-blue p-3 rounded-full w-fit mx-auto mb-2">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <p className="font-semibold">Destination</p>
                      <p className="text-gray-600">{trackingResult.destination}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-logistics-dark">Shipment Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingResult.timeline.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className={`p-2 rounded-full ${item.completed ? 'bg-logistics-green' : 'bg-gray-300'}`}>
                          <CheckCircle className={`h-4 w-4 ${item.completed ? 'text-white' : 'text-gray-500'}`} />
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold ${item.completed ? 'text-logistics-dark' : 'text-gray-500'}`}>
                            {item.status}
                          </p>
                          <p className="text-sm text-gray-600">{item.date} at {item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-logistics-dark mb-6">
            Need Help with Tracking?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our customer support team is available 24/7 to assist you with any tracking inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
                Contact Support
              </Button>
            </a>
            <a href="/services">
              <Button variant="outline" size="lg" className="border-logistics-green text-logistics-green hover:bg-logistics-green hover:text-white px-8 py-4">
                View Services
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tracking;