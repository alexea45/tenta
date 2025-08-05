import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Tracking from "./pages/Tracking";
import Calculate from "./pages/Calculate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Pages
import BiddingServices from "./pages/services/BiddingServices";
import BuyingServices from "./pages/services/BuyingServices";
import ShippingServices from "./pages/services/ShippingServices";
import AuctionAccount from "./pages/services/AuctionAccount";
import Towing from "./pages/services/Towing";
import Loading from "./pages/services/Loading";
import Clearance from "./pages/services/Clearance";
import Booking from "./pages/services/Booking";
import HalfCut from "./pages/services/HalfCut";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Pages */}
          <Route path="/services/bidding" element={<BiddingServices />} />
          <Route path="/services/buying" element={<BuyingServices />} />
          <Route path="/services/shipping" element={<ShippingServices />} />
          <Route path="/services/auction-account" element={<AuctionAccount />} />
          <Route path="/services/towing" element={<Towing />} />
          <Route path="/services/loading" element={<Loading />} />
          <Route path="/services/clearance" element={<Clearance />} />
          <Route path="/services/booking" element={<Booking />} />
          <Route path="/services/half-cut" element={<HalfCut />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
