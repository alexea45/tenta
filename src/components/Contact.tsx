import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-logistics-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start shipping? Contact us today for a free quote and consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-logistics-dark">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="border-gray-300" />
                <Input placeholder="Last Name" className="border-gray-300" />
              </div>
              <Input placeholder="Email Address" type="email" className="border-gray-300" />
              <Input placeholder="Phone Number" type="tel" className="border-gray-300" />
              <Input placeholder="Subject" className="border-gray-300" />
              <Textarea 
                placeholder="Your message..." 
                rows={6} 
                className="border-gray-300 resize-none"
              />
              <Button 
                className="w-full bg-logistics-blue hover:bg-logistics-blue/90 py-3 text-lg font-semibold"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-logistics-blue p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-logistics-dark mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (234) 567-890</p>
                    <p className="text-gray-600">+1 (832) 529-9283</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-logistics-green p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-logistics-dark mb-2">Email</h3>
                    <p className="text-gray-600">support@logistics.com</p>
                    <p className="text-gray-600">info@logistics.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-logistics-blue p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-logistics-dark mb-2">Address</h3>
                    <p className="text-gray-600">123 Logistics Boulevard</p>
                    <p className="text-gray-600">Houston, TX 77001, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-logistics-green p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-logistics-dark mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};