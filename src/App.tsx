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
import TowingServices from "./pages/services/TowingServices";
import LoadingServices from "./pages/services/LoadingServices";
import ShippingServices from "./pages/services/ShippingServices";
import GlobalLogistics from "./pages/services/GlobalLogistics";
import AutoTransport from "./pages/services/AutoTransport";
import InsuranceProtection from "./pages/services/InsuranceProtection";

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
          <Route path="/services/towing-services" element={<TowingServices />} />
          <Route path="/services/loading-services" element={<LoadingServices />} />
          <Route path="/services/shipping-services" element={<ShippingServices />} />
          <Route path="/services/global-logistics" element={<GlobalLogistics />} />
          <Route path="/services/auto-transport" element={<AutoTransport />} />
          <Route path="/services/insurance-protection" element={<InsuranceProtection />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
