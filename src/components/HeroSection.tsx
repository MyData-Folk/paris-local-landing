import { useEffect, useState } from "react";

const rotatingWords = ["connecté", "rentable", "fluide", "local", "sans friction"];

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

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#c9a84c]/6 blur-[180px] glow-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/3 blur-[150px]" />
        <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-[#e8c97a]/3 blur-[150px]" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: `linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="animate-fade-in-up flex justify-center mb-7">
          <span className="badge-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Lancement officiel · 1er juin 2026 · Hôtels parisiens
          </span>
        </div>

        <h1 className="animate-fade-in-up-delay-1 font-playfair font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-6">
          Le concierge digital
          <br />
          <span className="text-gold-gradient inline-block transition-all duration-350" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)" }}>
            {rotatingWords[wordIdx]}
          </span>
          <br />
          <span className="text-white/90">pour votre hôtel</span>
        </h1>

        <p className="animate-fade-in-up-delay-2 text-white/50 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Paris Local transforme chaque pancarte NFC ou QR code en canal direct avec vos clients : réponses aux questions fréquentes, collecte de coordonnées CRM, demandes housekeeping, recommandations locales et offres ciblées — sans application à télécharger.
        </p>

        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button onClick={() => scrollTo("#contact")} className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-xl shadow-[#c9a84c]/25 hover:shadow-[#c9a84c]/40 hover:scale-[1.02] flex items-center gap-2">
            Réserver ma démo de lancement
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
          <button onClick={() => scrollTo("#features")} className="px-8 py-4 rounded-xl border border-white/12 text-white/70 hover:text-white hover:border-white/25 hover:bg-white/4 font-medium text-sm transition-all duration-200 flex items-center gap-2">
            Voir les bénéfices hôtel
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>

        <div className="animate-fade-in-up-delay-4 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "NFC + QR", label: "Accès client instantané" },
            { value: "CRM", label: "Emails & téléphones qualifiés" },
            { value: "- appels", label: "Moins de questions répétitives" },
            { value: "Housekeeping", label: "Demandes suivies et priorisées" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/2 border border-white/7 rounded-xl p-4 hover:border-[#c9a84c]/20 transition-colors duration-300">
              <div className="font-playfair font-bold text-[#c9a84c] text-lg sm:text-xl mb-1">{stat.value}</div>
              <div className="text-white/40 text-xs leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => scrollTo("#features")} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 hover:text-white/50 transition-colors duration-300">
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent animate-float" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}
