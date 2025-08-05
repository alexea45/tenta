import { ServicePageLayout } from "@/components/ServicePageLayout";
import { CalendarClock } from "lucide-react";

const Booking = () => {
  const service = {
    icon: CalendarClock,
    heroTitle: "Booking Services",
    heroSubtitle: "We schedule your vehicles on the best routes, faster.",
    sectionTitle: "Seamless Shipping Starts Here",
    sectionParagraphs: [
      "We help secure container or RORO shipping slots that optimize for time and budget. Whether you're moving one car or managing multiple units, we handle the bookings and paperwork.",
      "You’ll receive ETA updates and full transparency along the way.",
    ],
    features: [
      "Weekly sailings",
      "Port-to-port scheduling",
      "ETA notifications",
    ],
    image: "https://www.bookitlive.net/content/wp-content/uploads/2021/03/How-does-booking-system-work.jpg",
    imageAlt: "Booking Services",
    ctaTitle: "Let’s Get You on the Schedule",
    ctaSubtitle: "Contact us to book your shipping window.",
  };

  return <ServicePageLayout {...service} />;
};

export default Booking; 