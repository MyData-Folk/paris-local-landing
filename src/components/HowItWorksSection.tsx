const steps = [
  {
    number: "01",
    title: "Configuration de votre hôtel",
    description: "Nous préparons votre page : logo, couleurs, horaires, Wi-Fi, services, messages d'accueil, recommandations locales et premiers formulaires CRM.",
    icon: "🏨",
    highlight: "Mise en place accompagnée",
  },
  {
    number: "02",
    title: "Installation des pancartes NFC & QR code",
    description: "Les supports peuvent être placés en chambre, à la réception, au comptoir petit-déjeuner, près de l'ascenseur ou dans les espaces communs.",
    icon: "📲",
    highlight: "Sans contact, sans application",
  },
  {
    number: "03",
    title: "Le client accède à son guide hôtel",
    description: "Il retrouve les réponses utiles, contacte la réception, fait une demande housekeeping, découvre les adresses partenaires et peut laisser ses coordonnées.",
    icon: "✨",
    highlight: "Expérience fluide côté client",
  },
  {
    number: "04",
    title: "Vos équipes pilotent les demandes",
    description: "La réception suit les messages, les demandes de service, les priorités et les informations CRM collectées, avec une meilleure coordination opérationnelle.",
    icon: "💻",
    highlight: "Moins d'oublis, plus de suivi",
  },
];

const layers = [
  {
    title: "Espace Client",
    icon: "📱",
    items: ["Accès NFC & QR", "Questions fréquentes", "Messagerie", "Demandes housekeeping", "Offres et partenaires"],
  },
  {
    title: "Interface Équipe Hôtel",
    icon: "💻",
    items: ["Demandes priorisées", "Historique des échanges", "Suivi des statuts", "Coordination réception/étages", "Alertes satisfaction"],
  },
  {
    title: "CRM & Pilotage",
    icon: "📊",
    items: ["Coordonnées clients", "Préférences", "Segmentation", "Offres ciblées", "Partenariats locaux"],
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="relative py-28 lg:py-36 bg-[#0d0d16]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-[#c9a84c]/3 blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="badge-gold mb-5 inline-flex">Déploiement</span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-white">
            Une mise en place simple pour un lancement le 1er juin 2026
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-base lg:text-lg">
            L'objectif : tester rapidement la valeur auprès de vos clients, sans projet informatique lourd côté hôtel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {steps.map((step, i) => (
            <div key={i} className="group relative bg-white/[0.02] border border-white/8 rounded-2xl p-7 hover:border-[#c9a84c]/25 hover:bg-[#c9a84c]/2 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c9a84c]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="font-playfair text-3xl lg:text-4xl font-bold text-[#c9a84c]/25 group-hover:text-[#c9a84c]/50 transition-colors duration-300 leading-none">{step.number}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3"><span className="text-xl">{step.icon}</span><h3 className="font-semibold text-white text-base lg:text-lg">{step.title}</h3></div>
                  <p className="text-white/45 text-sm leading-relaxed mb-4">{step.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20"><span className="text-[#c9a84c] text-xs font-medium">→ {step.highlight}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-divider mb-16" />

        <div className="text-center mb-10">
          <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-white mb-3">Trois niveaux de valeur</h3>
          <p className="text-white/40 text-sm max-w-lg mx-auto">Le client gagne en autonomie, l'équipe gagne du temps, la direction enrichit son CRM et ses revenus annexes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {layers.map((layer) => (
            <div key={layer.title} className="bg-white/[0.02] border border-white/8 rounded-2xl p-6 hover:border-[#c9a84c]/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a84c]/20 to-transparent border border-[#c9a84c]/20 flex items-center justify-center text-lg">{layer.icon}</div>
                <h4 className="font-semibold text-white">{layer.title}</h4>
              </div>
              <ul className="space-y-2.5">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/50"><span className="w-1 h-1 rounded-full bg-[#c9a84c]/60 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/25 text-xs">Données clients collectées avec consentement · Expérience adaptée à l'image de l'hôtel · Supports NFC/QR prêts pour le terrain</p>
        </div>
      </div>
    </section>
  );
}
