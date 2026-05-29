import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "dark:bg-[#0a0a0f]/95 bg-[#faf9f6]/95 backdrop-blur-xl dark:border-b dark:border-white/5 border-b border-[#c9a84c]/15 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] flex items-center justify-center shadow-lg shadow-[#c9a84c]/20 group-hover:shadow-[#c9a84c]/40 transition-shadow duration-300">
              <span className="text-[#0a0a0f] font-bold text-sm font-playfair">P</span>
            </div>
            <span className="font-playfair font-semibold text-base sm:text-lg tracking-wide text-[#c9a84c]">Paris Local</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm dark:text-white/55 text-[#1a1a2e]/55 hover:text-[#c9a84c] dark:hover:text-[#c9a84c] transition-colors duration-200 animated-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Changer de thème"
              className="p-2 rounded-xl dark:text-white/50 text-[#1a1a2e]/50 dark:hover:text-white hover:text-[#c9a84c] dark:hover:bg-white/5 hover:bg-[#c9a84c]/10 transition-all duration-200"
            >
              {theme === "dark" ? (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M18.364 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
                </svg>
              ) : (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="text-sm font-medium px-4 xl:px-5 py-2.5 rounded-xl border border-[#c9a84c]/35 text-[#c9a84c] hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]/60 transition-all duration-200 whitespace-nowrap"
            >
              Demander une démo
            </a>
          </div>

          {/* Mobile right: theme toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              aria-label="Changer de thème"
              className="p-2 rounded-lg dark:text-white/60 text-[#1a1a2e]/60 dark:hover:text-white hover:text-[#c9a84c] dark:hover:bg-white/5 hover:bg-[#c9a84c]/10 transition-all"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M18.364 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              className="dark:text-white/70 text-[#1a1a2e]/70 dark:hover:text-white hover:text-[#1a1a2e] p-2 rounded-lg dark:hover:bg-white/5 hover:bg-[#1a1a2e]/5 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
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
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-3 mb-4 p-4 rounded-2xl dark:bg-[#0d0d16]/97 bg-[#faf9f6]/97 backdrop-blur-xl dark:border border dark:border-white/8 border-[#c9a84c]/15 shadow-2xl">
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm dark:text-white/65 text-[#1a1a2e]/65 dark:hover:text-white hover:text-[#c9a84c] py-3 px-3 rounded-lg dark:hover:bg-white/5 hover:bg-[#c9a84c]/8 transition-all"
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
