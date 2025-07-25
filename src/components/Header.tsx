import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full">
      {/* Top contact bar */}
      <div className="bg-logistics-dark text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+16266008699" className="flex items-center gap-2 hover:text-logistics-blue transition-colors">
              <Phone size={16} />
              +1 (626) 600-8699
            </a>
            <a href="mailto:info@tentallc.com" className="flex items-center gap-2 hover:text-logistics-blue transition-colors">
              <Mail size={16} />
              info@tentallc.com
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
          <a href="/" className="text-2xl font-bold text-logistics-dark hover:opacity-80 transition-opacity cursor-pointer">
            <span className="text-logistics-blue">Tenta</span>
            <span className="text-logistics-green">Logistics</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium">
              Services
            </a>
            <a href="/tracking" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium">
              Tracking
            </a>
            <a href="/calculate" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium">
              Calculate Shipping
            </a>
            <a href="/contact" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium">
              Contact Us
            </a>
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