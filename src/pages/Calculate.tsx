import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calculator, Package, Truck, Ship, DollarSign } from "lucide-react";
import { useState } from "react";

const Calculate = () => {
  const [calculation, setCalculation] = useState(null);
  const [formData, setFormData] = useState({
    serviceType: "",
    origin: "",
    destination: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    vehicleType: ""
  });

  const handleCalculate = () => {
    // Simulate price calculation
    const basePrice = 500;
    const weightMultiplier = parseFloat(formData.weight) * 0.5 || 0;
    const distanceMultiplier = 300; // Base distance cost
    const serviceMultiplier = formData.serviceType === "express" ? 1.5 : 1;
    
    const totalPrice = (basePrice + weightMultiplier + distanceMultiplier) * serviceMultiplier;
    
    setCalculation({
      basePrice,
      weightCost: weightMultiplier,
      distanceCost: distanceMultiplier,
      serviceCost: (totalPrice - basePrice - weightMultiplier - distanceMultiplier),
      totalPrice: totalPrice,
      estimatedDays: formData.serviceType === "express" ? "3-5" : "7-14"
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Calculate Shipping Cost</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get an instant quote for your shipping needs with our easy-to-use calculator
          </p>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-logistics-dark flex items-center gap-2">
                    <Calculator className="h-6 w-6" />
                    Shipping Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="serviceType">Service Type</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard Shipping</SelectItem>
                          <SelectItem value="express">Express Shipping</SelectItem>
                          <SelectItem value="auto">Auto Transport</SelectItem>
                          <SelectItem value="container">Container Shipping</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="vehicleType">Vehicle Type (if applicable)</Label>
                      <Select value={formData.vehicleType} onValueChange={(value) => setFormData({...formData, vehicleType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="truck">Pickup Truck</SelectItem>
                          <SelectItem value="luxury">Luxury Car</SelectItem>
                          <SelectItem value="motorcycle">Motorcycle</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="origin">Origin City</Label>
                      <Input 
                        id="origin"
                        placeholder="e.g., Houston, TX"
                        value={formData.origin}
                        onChange={(e) => setFormData({...formData, origin: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="destination">Destination City</Label>
                      <Input 
                        id="destination"
                        placeholder="e.g., Los Angeles, CA"
                        value={formData.destination}
                        onChange={(e) => setFormData({...formData, destination: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="weight">Weight (lbs)</Label>
                      <Input 
                        id="weight"
                        type="number"
                        placeholder="0"
                        value={formData.weight}
                        onChange={(e) => setFormData({...formData, weight: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="length">Length (ft)</Label>
                      <Input 
                        id="length"
                        type="number"
                        placeholder="0"
                        value={formData.length}
                        onChange={(e) => setFormData({...formData, length: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="width">Width (ft)</Label>
                      <Input 
                        id="width"
                        type="number"
                        placeholder="0"
                        value={formData.width}
                        onChange={(e) => setFormData({...formData, width: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="height">Height (ft)</Label>
                      <Input 
                        id="height"
                        type="number"
                        placeholder="0"
                        value={formData.height}
                        onChange={(e) => setFormData({...formData, height: e.target.value})}
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={handleCalculate}
                    className="w-full bg-logistics-blue hover:bg-logistics-blue/90 py-3 text-lg"
                  >
                    Calculate Shipping Cost
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                {calculation && (
                  <Card className="shadow-card border-0 bg-gradient-card">
                    <CardHeader>
                      <CardTitle className="text-2xl text-logistics-dark flex items-center gap-2">
                        <DollarSign className="h-6 w-6" />
                        Shipping Quote
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Base Service Fee:</span>
                          <span>${calculation.basePrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Weight/Size Fee:</span>
                          <span>${calculation.weightCost.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Distance Fee:</span>
                          <span>${calculation.distanceCost.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Service Premium:</span>
                          <span>${calculation.serviceCost.toFixed(2)}</span>
                        </div>
                        <hr className="border-gray-300" />
                        <div className="flex justify-between text-xl font-bold text-logistics-blue">
                          <span>Total Cost:</span>
                          <span>${calculation.totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="text-center text-sm text-gray-600">
                          Estimated delivery: {calculation.estimatedDays} business days
                        </div>
                      </div>
                      
                      <div className="space-y-2 pt-4">
                        <Button className="w-full bg-logistics-green hover:bg-logistics-green/90">
                          Book This Shipment
                        </Button>
                        <Button variant="outline" className="w-full border-logistics-blue text-logistics-blue hover:bg-logistics-blue hover:text-white">
                          Get Detailed Quote
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Service Features */}
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="text-xl text-logistics-dark">Why Choose Tenta Logistics?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Package className="h-5 w-5 text-logistics-blue" />
                      <span className="text-sm">Comprehensive insurance coverage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-logistics-green" />
                      <span className="text-sm">Real-time tracking updates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Ship className="h-5 w-5 text-logistics-blue" />
                      <span className="text-sm">Global shipping network</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-logistics-green" />
                      <span className="text-sm">Competitive pricing</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-logistics-dark mb-6">
            Need a Custom Quote?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            For complex shipments or special requirements, our experts can provide a personalized quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
                Contact Expert
              </Button>
            </a>
            <a href="/services">
              <Button variant="outline" size="lg" className="border-logistics-green text-logistics-green hover:bg-logistics-green hover:text-white px-8 py-4">
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

export default Calculate;