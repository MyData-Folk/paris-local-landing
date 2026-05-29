import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OnboardingSection from "./components/OnboardingSection";
import PricingSection from "./components/PricingSection";
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
    <div className={`min-h-screen text-white font-['Inter',sans-serif] overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a0a0f]' : ''}`}>
      <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <OnboardingSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
