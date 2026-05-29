import { useState, useEffect } from "react";
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
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "dark" | "light") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] dark:bg-[#0a0a0f] text-white font-['Inter',sans-serif] overflow-x-hidden transition-colors duration-300">
      <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
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
