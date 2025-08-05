import { PlayCircle } from "lucide-react";

export const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Image */}
          <div>
            <img
              src="https://alberaa.com/wp-content/uploads/2021/11/car-shipping1.jpg"
              alt="Tenta Logistics team loading a car"
              className="rounded-xl shadow-md object-cover w-full h-[350px] md:h-[400px]"
            />
          </div>

          {/* Right Column: Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              #1 Car Buying & Shipping Company in the Middle East
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Since 2008, Tenta Logistics has helped thousands of customers buy and ship vehicles from U.S. auctions and dealerships to destinations across the Middle East.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We’re proud to be the region’s leading full-service partner for vehicle sourcing, shipping, customs clearance, and delivery. With deep industry experience and a trusted network, we make car importing easy, affordable, and reliable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 