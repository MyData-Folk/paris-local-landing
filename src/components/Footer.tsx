type FooterLink = { label: string; href: string; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  Produit: [
    { label: "Solution", href: "#features" },
    { label: "Bénéfices", href: "#impact" },
    { label: "Déploiement", href: "#how" },
    { label: "Offre de lancement", href: "#pricing" },
  ],
  Services: [
    { label: "Pancartes NFC & QR", href: "#features" },
    { label: "CRM client", href: "#features" },
    { label: "Housekeeping", href: "#features" },
    { label: "Partenariats locaux", href: "#features" },
  ],
  Contact: [
    { label: "admin@e-hotelmanager.com", href: "mailto:admin@e-hotelmanager.com", external: true },
    { label: "+33 (0)6 72 59 04 79", href: "tel:+33672590479", external: true },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#06060a] border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] flex items-center justify-center shadow-lg shadow-[#c9a84c]/20"><span className="text-[#0a0a0f] font-bold text-sm font-playfair">P</span></div>
              <span className="font-playfair font-semibold text-lg text-[#c9a84c] tracking-wide">Paris Local</span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-5 max-w-xs">
              Concierge digital pour hôtels parisiens : NFC, QR code, CRM client, demandes de service, housekeeping et partenaires locaux.
            </p>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /><span className="text-white/25 text-xs">Lancement · 1er juin 2026</span></div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm hover:text-white transition-colors duration-200 animated-underline">{link.label}</a>
                    ) : (
                      <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="text-white/35 text-sm hover:text-white transition-colors duration-200 animated-underline cursor-pointer">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/20 text-xs text-center sm:text-left">© 2026 Paris Local · SaaS B2B Hôtellerie Parisienne</div>
          <div className="text-white/20 text-xs text-center sm:text-right">Données CRM collectées avec consentement · Supports NFC/QR disponibles au lancement</div>
        </div>
      </div>
    </footer>
  );
}
