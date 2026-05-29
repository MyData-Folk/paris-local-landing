import { useState } from "react";

const features = [
  {
    emoji: "📲",
    tag: "Accès sans friction",
    title: "NFC & QR code — Aucune application à télécharger",
    description: "Vos clients scannent ou approchent leur téléphone : ils accèdent instantanément à leur guide hôtel personnalisé, depuis n'importe quel smartphone.",
    details: [
      "Compatible iOS et Android nativement",
      "Pancartes NFC livrées prêtes à l'emploi",
      "QR code personnalisé aux couleurs de l'hôtel",
      "Accès depuis la chambre, la réception, les espaces communs",
    ],
  },
  {
    emoji: "🗂️",
    tag: "Guide digital",
    title: "Guide hôtel complet et personnalisé",
    description: "Wi-Fi, horaires, services, transports, recommandations locales : toutes les informations utiles accessibles en un tap, actualisables à tout moment.",
    details: [
      "Wi-Fi, horaires et services en temps réel",
      "Recommandations locales sélectionnées",
      "Personnalisé aux couleurs et à l'image de l'hôtel",
      "Mis à jour sans intervention technique",
    ],
  },
  {
    emoji: "💬",
    tag: "Messagerie & demandes",
    title: "Demandes client directes — Housekeeping inclus",
    description: "Les clients envoient leurs demandes depuis leur téléphone : room service, housekeeping, taxi, bagagerie, maintenance. La réception reçoit et priorise.",
    details: [
      "Formulaires de demande prédéfinis",
      "Priorisation et historique des demandes",
      "Coordination réception / étages simplifiée",
      "Alertes satisfaction intégrées",
    ],
  },
  {
    emoji: "📊",
    tag: "CRM & données",
    title: "Collecte CRM avec consentement",
    description: "Chaque interaction peut devenir une opportunité de collecter des coordonnées qualifiées : email, téléphone, préférences — avec consentement RGPD.",
    details: [
      "Collecte email, téléphone et préférences",
      "Consentement RGPD intégré",
      "Segmentation et offres ciblées post-séjour",
      "Export vers votre CRM existant",
    ],
  },
  {
    emoji: "🤝",
    tag: "Partenariats locaux",
    title: "Partenaires locaux & commissions",
    description: "Mettez en avant restaurants, taxis, guides et commerces partenaires. Générez des commissions sur les recommandations orientées depuis votre hôtel.",
    details: [
      "Mise en avant de partenaires sélectionnés",
      "Commissions sur les recommandations",
      "Réseau de commerces et prestataires locaux",
      "Offres exclusives pour vos clients",
    ],
  },
];

export default function FeaturesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="features" className="relative py-20 sm:py-28 lg:py-36 dark:bg-[#0d0d16] bg-[#f3f1ec]">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[400px] sm:w-[700px] h-[300px] sm:h-[500px] rounded-full dark:bg-[#c9a84c]/3 bg-[#c9a84c]/8 blur-[100px] sm:blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="badge-gold mb-4 sm:mb-5 inline-flex">Solution Paris Local</span>
          <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 dark:text-white text-[#1a1a2e] leading-tight">
            Un outil simple pour mieux accueillir,<br className="hidden sm:block" /> mieux vendre et mieux fidéliser
          </h2>
          <p className="dark:text-white/45 text-[#1a1a2e]/55 max-w-xs sm:max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Pensé pour les hôtels indépendants et boutiques hôtels parisiens : moins de charge opérationnelle pour les équipes, plus de données utiles pour le CRM, plus d'opportunités avec les partenaires locaux.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative dark:bg-white/[0.02] bg-white dark:border border dark:border-white/8 border-[#c9a84c]/12 rounded-2xl sm:rounded-3xl p-5 sm:p-7 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${
                expanded === i
                  ? "dark:border-[#c9a84c]/30 border-[#c9a84c]/30 dark:bg-[#c9a84c]/[0.03] bg-[#c9a84c]/5"
                  : "dark:hover:border-[#c9a84c]/20 hover:border-[#c9a84c]/25"
              } ${i === features.length - 1 && features.length % 2 !== 0 ? "sm:col-span-2" : ""}`}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br dark:from-[#c9a84c]/4 from-[#c9a84c]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xl sm:text-2xl">{feature.emoji}</span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] dark:opacity-80 opacity-90">
                      {feature.tag}
                    </span>
                  </div>
                  <span className={`text-[#c9a84c] flex-shrink-0 transition-transform duration-300 text-lg ${expanded === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </div>
                <h3 className="font-semibold dark:text-white text-[#1a1a2e] text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="dark:text-white/45 text-[#1a1a2e]/55 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Expanded details */}
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    expanded === i ? "max-h-64 mt-4 sm:mt-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-2">
                    {feature.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm dark:text-white/60 text-[#1a1a2e]/65">
                        <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-4 text-xs font-medium text-[#c9a84c]/70 hover:text-[#c9a84c] transition-colors">
                  {expanded === i ? "Réduire ↑" : "En savoir plus ↓"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary box */}
        <div className="dark:bg-white/[0.02] bg-white dark:border border dark:border-white/6 border-[#c9a84c]/12 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm">
          <h4 className="font-playfair font-bold dark:text-white text-[#1a1a2e] text-lg sm:text-xl mb-4 sm:mb-5">
            À retenir
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              "Une pancarte NFC + QR code transforme chaque point de contact en canal digital.",
              "Le CRM devient exploitable grâce aux coordonnées et préférences collectées avec consentement.",
              "Les équipes gagnent du temps sur les demandes répétitives et les tâches opérationnelles.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#c9a84c] flex-shrink-0 mt-0.5 font-bold">✓</span>
                <p className="dark:text-white/55 text-[#1a1a2e]/60 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
