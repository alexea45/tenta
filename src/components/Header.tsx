import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe } from "lucide-react";

const services = [
  { name: "Auction Account Services", href: "/services/auction-account" },
  { name: "Towing Services", href: "/services/towing" },
  { name: "Loading Services", href: "/services/loading" },
  { name: "Shipping Services", href: "/services/shipping" },
  { name: "Clearance Services", href: "/services/clearance" },
  { name: "Booking Services", href: "/services/booking" },
  { name: "Dismantling Services", href: "/services/half-cut" },
  { name: "Title Services", href: "/services/title" },
  { name: "Bidding Services", href: "/services/bidding" },
];

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
            <span>Global Freight Solutions</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-logistics-dark hover:opacity-80 transition-opacity cursor-pointer">
            <span className="text-logistics-blue">Tenta</span>
            <span className="text-logistics-green"> Used Cars Trading LLC</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <a href="/services" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium py-4">
                Services
              </a>
              <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 hidden w-max bg-white border rounded-md shadow-lg group-hover:block">
                <ul className="flex flex-col text-sm text-gray-800 py-2">
                  {services.map((service) => (
                    <li key={service.name}>
                      <a href={service.href} className="block px-4 py-2 hover:bg-gray-100">
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a href="/tracking" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium">
              Tracking
            </a>
            <a href="/calculate" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium">
              Calculate Shipping
            </a>
            <a href="/contact" className="text-gray-700 hover:text-logistics-blue transition-colors font-medium">
              Contact Us
            </a>
            <a 
              href="http://144.48.111.94:9576/app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-logistics-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Login
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