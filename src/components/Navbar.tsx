import { useState, useEffect } from "react";

export default function Navbar({ activeSection: _activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Fonctionnalités", href: "#features" },
    { label: "Comment ça marche", href: "#how" },
    { label: "Audit & Améliorations", href: "#audit" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Feuille de route", href: "#roadmap" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5 shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] flex items-center justify-center">
              <span className="text-[#0a0a0f] font-bold text-sm">P</span>
            </div>
            <span
              className="font-['Playfair_Display',serif] font-semibold text-lg tracking-wide"
              style={{ color: "#c9a84c" }}
            >
              Paris Local
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Connexions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://hotel.hotelmanager.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              Accès Guest
            </a>
            <a
              href="https://admin.hotelmanager.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              Espace Réception
            </a>
            <a
              href="#cta"
              className="text-sm font-medium px-4 py-2 rounded-lg border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-200"
            >
              Demander une démo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d0d16] border-t border-white/5 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white py-2 border-b border-white/5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://hotel.hotelmanager.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white py-2 border-b border-white/5"
            onClick={() => setMobileOpen(false)}
          >
            Accès Guest
          </a>
          <a
            href="https://admin.hotelmanager.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white py-2 border-b border-white/5"
            onClick={() => setMobileOpen(false)}
          >
            Espace Réception
          </a>
          <a
            href="#cta"
            className="mt-2 text-sm font-medium px-4 py-2 rounded-lg bg-[#c9a84c] text-[#0a0a0f] text-center"
            onClick={() => setMobileOpen(false)}
          >
            Demander une démo
          </a>
        </div>
      )}
    </header>
  );
}
