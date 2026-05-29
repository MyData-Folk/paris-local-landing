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
    <div className="min-h-screen bg-[#0a0a0f] text-white grain">
      <Navbar />
      <main>
        <HeroSection />
        <TickerBanner />
        <FeaturesSection />
        <div className="section-divider" />
        <SocialProofBanner />
        <div className="section-divider" />
        <HowItWorksSection />
        <div className="section-divider" />
        <PricingSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />

      <div className="fixed bottom-5 left-4 right-4 z-40 flex justify-center lg:hidden pointer-events-none">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="pointer-events-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] font-semibold text-sm shadow-2xl shadow-[#c9a84c]/30 flex items-center gap-2 backdrop-blur-xl"
        >
          <span>✦</span>
          Démo lancement 2026
          <span>→</span>
        </a>
      </div>
    </div>
  );
}
