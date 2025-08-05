import { motion } from "framer-motion";
import {
  Gavel,
  HandCoins,
  Truck,
  FileText,
  Ship,
  Building2,
} from "lucide-react";

const steps = [
  {
    icon: Gavel,
    title: "Step 1: Auction Access",
    description:
      "Get access to major U.S. auction platforms like Copart, IAAI, and Manheim.",
  },
  {
    icon: HandCoins,
    title: "Step 2: Bidding Support",
    description:
      "We bid on your behalf or support your live bidding to secure the best deals.",
  },
  {
    icon: Truck,
    title: "Step 3: Vehicle Pickup & Inspection",
    description:
      "Your vehicle is towed to our yard, inspected, and documented with photos.",
  },
  {
    icon: FileText,
    title: "Step 4: Export Documentation",
    description:
      "We manage the title transfer, bill of lading, and all export paperwork.",
  },
  {
    icon: Ship,
    title: "Step 5: Shipping & Tracking",
    description:
      "Your car is loaded into a container and shipped overseas with real-time tracking.",
  },
  {
    icon: Building2,
    title: "Step 6: Clearance & Delivery",
    description:
      "We handle customs clearance and deliver your vehicle to your port or warehouse.",
  },
];

export const HowItWorks = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-gray-800">How It Works</h2>
          <p className="text-lg text-gray-600 mt-2">
            From U.S. Auctions to Delivery in the Middle East — Here’s How We
            Make It Easy
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <div className="relative mb-4">
                <span className="absolute -top-2 -left-2 bg-logistics-blue text-white rounded-full w-6 h-6 text-sm flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <step.icon className="h-10 w-10 text-logistics-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 