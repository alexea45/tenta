import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full">
      {/* Top contact bar */}
      <div className="bg-logistics-dark text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-logistics-blue transition-colors">
              <Phone size={16} />
              +1 (234) 567-890
            </a>
            <a href="mailto:support@logistics.com" className="flex items-center gap-2 hover:text-logistics-blue transition-colors">
              <Mail size={16} />
              support@logistics.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Globe size={16} />
            <span>Global Shipping Solutions</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-logistics-dark">
            <span className="text-logistics-blue">Global</span>
            <span className="text-logistics-green">Logistics</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium">
              Services
            </a>
            <a href="#tracking" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium">
              Tracking
            </a>
            <a href="#calculate" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium">
              Calculate Shipping
            </a>
            <a href="#contact" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium">
              Contact Us
            </a>
            <Button variant="default" className="bg-logistics-blue hover:bg-logistics-blue/90">
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};