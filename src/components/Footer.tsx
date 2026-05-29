export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] flex items-center justify-center">
                <span className="text-[#0a0a0f] font-bold text-sm">P</span>
              </div>
              <span className="font-['Playfair_Display',serif] font-semibold text-lg text-[#c9a84c]">
                Paris Local
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Le concierge digital SaaS B2B pour hôtels parisiens. Expérience client, messagerie
              temps réel, recommandations locales.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/MyData-Folk/ParisLocalStack"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Produit</h4>
            <ul className="space-y-2">
              {[
                { label: "Fonctionnalités", href: "#features" },
                { label: "Comment ça marche", href: "#how" },
                { label: "Démarrer", href: "#onboarding" },
                { label: "Tarifs", href: "#pricing" },
                { label: "Témoignages", href: "#testimonials" },
                { label: "Accès Guest", href: "https://hotel.hotelmanager.fr", external: true },
                { label: "Espace Réception", href: "https://parislocaladmin.hotelmanager.fr", external: true },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-white/40 text-sm">
                <span className="text-white font-medium block">Mr. Farouk Azougli</span>
                <span className="text-xs text-white/30 block mt-0.5">Fondateur & Directeur</span>
              </li>
              <li className="text-white/40 text-sm flex flex-col">
                <span className="text-xs text-white/30">Email</span>
                <a
                  href="mailto:admin@e-hotelmanager.com"
                  className="hover:text-[#c9a84c] transition-colors text-sm break-all font-mono"
                >
                  admin@e-hotelmanager.com
                </a>
              </li>
              <li className="text-white/40 text-sm flex flex-col">
                <span className="text-xs text-white/30">Tél</span>
                <a
                  href="tel:+33672590479"
                  className="hover:text-[#c9a84c] transition-colors text-sm font-mono"
                >
                  +(33) 0672590479
                </a>
              </li>
              <li className="pt-1">
                <div className="flex items-center gap-2 text-[#c9a84c] text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Réponse sous 24h
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2025 Paris Local · MyData-Folk · SaaS B2B Hôtellerie Parisienne
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/25 text-xs">Construit avec</span>
            <div className="flex items-center gap-2">
              {["React", "TypeScript", "Prisma", "Socket.IO"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-white/20 bg-white/3 px-2 py-0.5 rounded font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
