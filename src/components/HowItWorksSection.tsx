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
    <section id="how" className="relative py-20 sm:py-28 lg:py-36 dark:bg-[#0d0d16] bg-[#f3f1ec]">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] rounded-full dark:bg-[#c9a84c]/3 bg-[#c9a84c]/8 blur-[80px] sm:blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="badge-gold mb-4 sm:mb-5 inline-flex">Déploiement</span>
          <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 dark:text-white text-[#1a1a2e] leading-tight">
            Une mise en place simple pour un lancement<br className="hidden sm:block" /> le 1er juin 2026
          </h2>
          <p className="dark:text-white/45 text-[#1a1a2e]/55 max-w-xs sm:max-w-xl mx-auto text-sm sm:text-base lg:text-lg">
            L'objectif : tester rapidement la valeur auprès de vos clients, sans projet informatique lourd côté hôtel.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative dark:bg-white/[0.02] bg-white dark:border border dark:border-white/8 border-[#c9a84c]/12 rounded-2xl sm:rounded-3xl p-5 sm:p-7 dark:hover:border-[#c9a84c]/25 hover:border-[#c9a84c]/30 dark:hover:bg-[#c9a84c]/[0.02] hover:bg-[#c9a84c]/4 transition-all duration-300 shadow-sm"
            >
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br dark:from-[#c9a84c]/4 from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0">
                  <div className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c9a84c]/25 group-hover:text-[#c9a84c]/50 transition-colors duration-300 leading-none">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
                    <span className="text-lg sm:text-xl">{step.icon}</span>
                    <h3 className="font-semibold dark:text-white text-[#1a1a2e] text-sm sm:text-base lg:text-lg leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="dark:text-white/45 text-[#1a1a2e]/55 text-sm leading-relaxed mb-3 sm:mb-4">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg dark:bg-[#c9a84c]/10 bg-[#c9a84c]/12 dark:border border dark:border-[#c9a84c]/20 border-[#c9a84c]/25">
                    <span className="text-[#b8922e] dark:text-[#c9a84c] text-xs font-medium">→ {step.highlight}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-divider mb-12 sm:mb-16" />

        {/* Layers */}
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold dark:text-white text-[#1a1a2e] mb-2 sm:mb-3">
            Trois niveaux de valeur
          </h3>
          <p className="dark:text-white/40 text-[#1a1a2e]/50 text-sm max-w-lg mx-auto">
            Le client gagne en autonomie, l'équipe gagne du temps, la direction enrichit son CRM et ses revenus annexes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="dark:bg-white/[0.02] bg-white dark:border border dark:border-white/8 border-[#c9a84c]/12 rounded-2xl p-5 sm:p-6 dark:hover:border-[#c9a84c]/20 hover:border-[#c9a84c]/25 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl dark:bg-gradient-to-br dark:from-[#c9a84c]/20 bg-gradient-to-br from-[#c9a84c]/15 to-transparent dark:border border dark:border-[#c9a84c]/20 border-[#c9a84c]/25 flex items-center justify-center text-base sm:text-lg">
                  {layer.icon}
                </div>
                <h4 className="font-semibold dark:text-white text-[#1a1a2e] text-sm sm:text-base">{layer.title}</h4>
              </div>
              <ul className="space-y-2 sm:space-y-2.5">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm dark:text-white/50 text-[#1a1a2e]/55">
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c]/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="dark:text-white/25 text-[#1a1a2e]/35 text-xs">
            Données clients collectées avec consentement · Expérience adaptée à l'image de l'hôtel · Supports NFC/QR prêts pour le terrain
          </p>
        </div>
      </div>
    </section>
  );
}
