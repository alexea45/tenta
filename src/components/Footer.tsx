import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-logistics-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-logistics-blue">Tenta</span>
              <span className="text-logistics-green">Logistics</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for worldwide shipping and logistics solutions. 
              We deliver excellence in every shipment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-logistics-blue transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-logistics-blue transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-logistics-blue transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-logistics-blue transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-logistics-blue transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-logistics-blue">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/auto-transport" className="text-gray-300 hover:text-white transition-colors">Auto Transport</a></li>
              <li><a href="/services/shipping-services" className="text-gray-300 hover:text-white transition-colors">Container Shipping</a></li>
              <li><a href="/services/global-logistics" className="text-gray-300 hover:text-white transition-colors">Freight Services</a></li>
              <li><a href="/services/loading-services" className="text-gray-300 hover:text-white transition-colors">Warehouse Storage</a></li>
              <li><a href="/services/insurance-protection" className="text-gray-300 hover:text-white transition-colors">Insurance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-logistics-green">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-logistics-blue">Support</h3>
            <ul className="space-y-2">
              <li><a href="/tracking" className="text-gray-300 hover:text-white transition-colors">Track Shipment</a></li>
              <li><a href="/support" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/documentation" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Tenta Logistics. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};