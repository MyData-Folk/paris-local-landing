import { useState } from "react";

const plans = [
  {
    name: "Starter",
    tagline: "Idéal pour commencer",
    price: { monthly: 89, yearly: 69 },
    currency: "€",
    period: "/ hôtel / mois",
    highlight: false,
    features: [
      "1 hôtel",
      "Jusqu'à 30 chambres",
      "Accès NFC & QR code",
      "Messagerie temps réel",
      "Recommandations locales (20 max)",
      "Demandes de service basiques",
      "Tableau de bord réception",
      "Support par email",
    ],
    cta: "Essayer gratuitement 14 jours",
    notIncluded: ["Branding avancé", "Analytics", "Multi-hôtels", "API access"],
  },
  {
    name: "Business",
    tagline: "Pour les hôtels ambitieux",
    price: { monthly: 199, yearly: 149 },
    currency: "€",
    period: "/ hôtel / mois",
    highlight: true,
    badge: "Le plus populaire",
    features: [
      "1 hôtel (chambres illimitées)",
      "Supports NFC & QR codes personnalisés",
      "Messagerie + Socket.IO temps réel",
      "Recommandations illimitées",
      "Toutes les demandes de service",
      "Avis & satisfaction client",
      "White-label complet",
      "Analytics & événements",
      "Profils guests enrichis + CRM tags",
      "Support prioritaire",
    ],
    cta: "Démarrer en Business",
    notIncluded: ["Multi-hôtels centralisé", "API partenaire"],
  },
  {
    name: "Enterprise",
    tagline: "Pour les groupes hôteliers",
    price: { monthly: null, yearly: null },
    currency: "",
    period: "",
    highlight: false,
    features: [
      "Hôtels illimités",
      "Dashboard multi-propriétés centralisé",
      "Toutes les fonctionnalités Business",
      "API REST documentée (OpenAPI)",
      "Intégration PMS sur mesure",
      "SLA 99.9% garanti",
      "Onboarding dédié",
      "Account Manager",
      "Hébergement sur infrastructure dédiée",
      "Personnalisations sur demande",
    ],
    cta: "Contacter l'équipe commerciale",
    notIncluded: [],
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-32 bg-[#0d0d16]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#c9a84c]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-medium mb-4">
            Tarifs
          </div>
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-bold mb-4">
            Des tarifs{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8c97a]">
              transparents
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">
            Sans frais cachés, sans engagement minimum. Essai gratuit 14 jours sur tous les plans.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                !yearly ? "bg-[#c9a84c] text-[#0a0a0f]" : "text-white/50 hover:text-white"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                yearly ? "bg-[#c9a84c] text-[#0a0a0f]" : "text-white/50 hover:text-white"
              }`}
            >
              Annuel
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">
                -25%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#c9a84c]/15 to-[#c9a84c]/5 border-2 border-[#c9a84c]/40 shadow-2xl shadow-[#c9a84c]/10"
                  : "bg-white/2 border border-white/8 hover:border-white/16"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] text-xs font-bold rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-white/40 text-sm">{plan.tagline}</p>
              </div>

              <div className="mb-8">
                {plan.price.monthly !== null ? (
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[#c9a84c] font-['Playfair_Display',serif]">
                        {yearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-white/50 text-sm">{plan.currency}</span>
                    </div>
                    <div className="text-white/30 text-sm">{plan.period}</div>
                    {yearly && (
                      <div className="text-green-400 text-xs mt-1">
                        Économie de {((plan.price.monthly! - plan.price.yearly!) * 12).toFixed(0)}€/an
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl font-bold text-[#c9a84c] font-['Playfair_Display',serif]">
                      Sur devis
                    </div>
                    <div className="text-white/30 text-sm mt-1">Tarification personnalisée</div>
                  </div>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <span className="text-[#c9a84c] flex-shrink-0">✓</span>
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <span className="text-white/20 flex-shrink-0">✗</span>
                    <span className="text-white/25 line-through">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] hover:opacity-90 shadow-lg shadow-[#c9a84c]/20"
                    : "border border-white/15 text-white/80 hover:bg-white/5 hover:border-white/30"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-12 text-center text-white/40 text-sm">
          Questions sur les tarifs ?{" "}
          <a href="#cta" className="text-[#c9a84c] hover:underline">
            Contactez-nous →
          </a>
        </div>
      </div>
    </section>
  );
}
