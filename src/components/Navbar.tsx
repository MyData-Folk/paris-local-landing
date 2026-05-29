import { useEffect, useState } from "react";

const navLinks = [
  { label: "Solution", href: "#features" },
  { label: "Bénéfices", href: "#impact" },
  { label: "Déploiement", href: "#how" },
  { label: "Offre lancement", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }} className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] flex items-center justify-center shadow-lg shadow-[#c9a84c]/20 group-hover:shadow-[#c9a84c]/40 transition-shadow duration-300">
              <span className="text-[#0a0a0f] font-bold text-sm font-playfair">P</span>
            </div>
            <span className="font-playfair font-semibold text-lg tracking-wide text-[#c9a84c]">Paris Local</span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm text-white/55 hover:text-white transition-colors duration-200 animated-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="text-sm font-medium px-5 py-2.5 rounded-xl border border-[#c9a84c]/35 text-[#c9a84c] hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]/60 transition-all duration-200"
            >
              Demander une démo
            </a>
          </div>

          <button
            className="lg:hidden text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-4 mb-4 p-4 rounded-2xl bg-[#0d0d16]/95 backdrop-blur-xl border border-white/8 shadow-2xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm text-white/65 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="mt-3 block text-sm font-semibold py-3 px-4 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] text-center shadow-lg"
          >
            Demander une démo gratuite →
          </a>
        </div>
      </div>
    </header>
  );
}
