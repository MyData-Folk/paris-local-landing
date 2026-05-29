import { useEffect, useState } from "react";

const rotatingWords = ["intelligent", "premium", "local", "connecté", "humain"];

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % rotatingWords.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[500px] lg:w-[700px] h-[220px] sm:h-[500px] lg:h-[700px] rounded-full dark:bg-[#c9a84c]/6 bg-[#c9a84c]/12 blur-[48px] sm:blur-[120px] glow-pulse" />
        <div className="absolute bottom-1/3 right-0 hidden sm:block w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full dark:bg-[#c9a84c]/3 bg-[#c9a84c]/6 blur-[80px] sm:blur-[100px]" />
        <div className="absolute top-1/3 left-0 hidden sm:block w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] rounded-full dark:bg-purple-900/8 bg-purple-200/20 blur-[60px] sm:blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in-up mb-6 sm:mb-8">
          <span className="badge-gold">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Lancement officiel · 1er juin 2026 · Hôtels parisiens
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up-delay-1 font-playfair text-[2.15rem] min-[380px]:text-[2.45rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 dark:text-white text-[#1a1a2e] leading-[1.08] sm:leading-[1.15] tracking-[-0.02em]">
          Le concierge digital{" "}
          <span
            className="text-gold-gradient inline-block transition-all duration-350"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-8px)" }}
          >
            {rotatingWords[wordIdx]}
          </span>
          <br className="hidden sm:block" />
          {" "}pour votre hôtel
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up-delay-2 text-sm sm:text-base lg:text-lg dark:text-white/50 text-[#1a1a2e]/55 max-w-[22rem] sm:max-w-xl lg:max-w-2xl mx-auto leading-relaxed mb-7 sm:mb-10 lg:mb-12">
          Paris Local transforme chaque pancarte NFC ou QR code en canal direct avec vos clients : réponses aux questions fréquentes, collecte de coordonnées CRM, demandes housekeeping, recommandations locales et offres ciblées —{" "}
          <span className="dark:text-white/70 text-[#1a1a2e]/70 font-medium">sans application à télécharger.</span>
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-16 lg:mb-20 w-full">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] font-semibold text-sm shadow-2xl shadow-[#c9a84c]/30 flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
          >
            ✦ Démo lancement 2026 →
          </button>
          <a
            href="#features"
            onClick={(e) => { e.preventDefault(); document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" }); }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-2xl dark:border border dark:border-white/10 border-[#1a1a2e]/15 dark:text-white/60 text-[#1a1a2e]/60 dark:hover:text-white hover:text-[#c9a84c] dark:hover:border-white/20 hover:border-[#c9a84c]/40 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
          >
            Découvrir la solution ↓
          </a>
        </div>

        {/* Stats grid */}
        <div className="animate-fade-in-up-delay-4 grid grid-cols-1 min-[390px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto w-full">
          {[
            { value: "NFC + QR", label: "Accès client instantané" },
            { value: "CRM", label: "Emails & téléphones qualifiés" },
            { value: "− appels", label: "Moins de questions répétitives" },
            { value: "Housekeeping", label: "Demandes suivies et priorisées" },
          ].map((stat) => (
            <div
              key={stat.value}
              className="dark:bg-white/[0.03] bg-white/70 dark:border border dark:border-white/8 border-[#c9a84c]/15 rounded-xl sm:rounded-2xl p-3 sm:p-5 dark:hover:border-[#c9a84c]/20 hover:border-[#c9a84c]/35 transition-colors duration-300 shadow-sm"
            >
              <div className="font-playfair text-base sm:text-xl lg:text-2xl font-bold text-[#c9a84c] mb-1">{stat.value}</div>
              <div className="dark:text-white/35 text-[#1a1a2e]/50 text-xs leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg className="w-5 h-5 dark:text-white text-[#1a1a2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
