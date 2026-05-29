import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TickerBanner from "./components/TickerBanner";
import FeaturesSection from "./components/FeaturesSection";
import SocialProofBanner from "./components/SocialProofBanner";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="grain min-h-screen dark:bg-[#0a0a0f] bg-[#faf9f6] dark:text-white text-[#1a1a2e] transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <TickerBanner />
          <FeaturesSection />
          <SocialProofBanner />
          <HowItWorksSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
