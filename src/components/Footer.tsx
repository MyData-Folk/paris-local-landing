const footerLinks = [
  { label: "Solution", href: "#features" },
  { label: "Bénéfices", href: "#impact" },
  { label: "Déploiement", href: "#how" },
  { label: "Offre lancement", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative dark:bg-[#07070d] bg-[#f0ede6] dark:border-t border-t dark:border-white/5 border-[#c9a84c]/15 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Logo + desc */}
          <div className="max-w-xs">
            <a
              href="#hero"
              onClick={handleClick("#hero")}
              className="flex items-center gap-2.5 mb-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] flex items-center justify-center shadow-md shadow-[#c9a84c]/20">
                <span className="text-[#0a0a0f] font-bold text-sm font-playfair">P</span>
              </div>
              <span className="font-playfair font-semibold text-base sm:text-lg tracking-wide text-[#c9a84c]">Paris Local</span>
            </a>
            <p className="dark:text-white/35 text-[#1a1a2e]/45 text-xs sm:text-sm leading-relaxed">
              Concierge digital pour hôtels parisiens : NFC, QR code, CRM client, demandes de service, housekeeping et partenaires locaux.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-[#c9a84c]/8 bg-[#c9a84c]/12 dark:border border dark:border-[#c9a84c]/20 border-[#c9a84c]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
              <span className="text-[#b8922e] dark:text-[#c9a84c] text-xs font-medium">Lancement · 1er juin 2026</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-5 sm:gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClick(link.href)}
                className="text-sm dark:text-white/35 text-[#1a1a2e]/45 dark:hover:text-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="section-divider" />

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center">
          <p className="dark:text-white/20 text-[#1a1a2e]/35 text-xs">
            © 2026 Paris Local · Tous droits réservés · Paris, France
          </p>
          <div className="flex items-center gap-4">
            <span className="dark:text-white/15 text-[#1a1a2e]/25 text-xs">Données protégées RGPD</span>
            <span className="dark:text-white/15 text-[#1a1a2e]/25 text-xs">Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
