import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AuditSection from "./components/AuditSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingSection from "./components/PricingSection";
import RoadmapSection from "./components/RoadmapSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CtaSection from "./components/CtaSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection] = useState("hero");

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-['Inter',sans-serif] overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AuditSection />
      <PricingSection />
      <RoadmapSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
