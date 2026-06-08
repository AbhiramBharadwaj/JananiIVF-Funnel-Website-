import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; // ✅ Import here
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Resource from "./pages/Resource";
import Book from "./pages/Book";
import Service from "./pages/Service";
import NotEligible from "./pages/NotEligible";
import ThankYou from "./pages/ThankYou";
import MeetingDemo from "./pages/MeetingDemo";
import BookingDemoPage from "./pages/BookingDemoPage";
import ThankYouDemoPage from "./pages/ThankYouDemoPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Add Analytics inside BrowserRouter */}
        <Analytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/meetingdemo" element={<MeetingDemo />} />
          <Route path="/bookingdemopage" element={<BookingDemoPage />} />
          <Route path="/thankyoudemopage" element={<ThankYouDemoPage />} />
          <Route path="/book" element={<Book />} />
          <Route path="/service" element={<Service />} />
          <Route path="/not-eligible" element={<NotEligible />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/resource" element={<Resource />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
