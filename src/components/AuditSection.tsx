import { useState } from "react";

const auditItems = [
  {
    category: "✅ Points forts",
    color: "green",
    items: [
      {
        title: "Architecture multi-tenant solide",
        detail:
          "Le `hotel_id` sur toutes les tables métier et le middleware `requireHotelAccess` garantissent une isolation parfaite entre tenants. C'est la fondation correcte pour un SaaS B2B.",
      },
      {
        title: "Stack moderne & cohérente",
        detail:
          "React + Vite + TypeScript + Tailwind côté frontend, Node/Express + Prisma + TypeScript côté API, avec Zod pour les contrats partagés. Excellent choix pour 2025.",
      },
      {
        title: "Messagerie temps réel opérationnelle",
        detail:
          "Socket.IO bien intégré pour la communication guest ↔ réception. La priorité des messages et le statut sont déjà modélisés dans le schéma.",
      },
      {
        title: "Branding white-label complet",
        detail:
          "Couleurs primaires/secondaires, logo, description par hôtel. La résolution de tenant via hostname slug est une approche professionnelle et scalable.",
      },
      {
        title: "Schéma Prisma bien pensé",
        detail:
          "Les modèles Guest, Stay, Message, ServiceRequest, Review, Recommendation, HotelSettings sont tous correctement normalisés avec cascade deletes appropriés.",
      },
      {
        title: "Infrastructure Docker + Coolify",
        detail:
          "Dockerisation complète avec sous-domaines automatiques via Coolify. Setup S3-compatible prêt pour production sans modifier les routes.",
      },
    ],
  },
  {
    category: "⚠️ Points à améliorer",
    color: "yellow",
    items: [
      {
        title: "Pas de tests automatisés",
        detail:
          "Aucun fichier de test détecté (Jest, Vitest, Supertest). Pour un SaaS B2B, les tests unitaires sur les middlewares d'auth et les routes critiques sont indispensables.",
      },
      {
        title: "Gestion des erreurs à uniformiser",
        detail:
          "Il manque un middleware centralisé de gestion d'erreurs côté API et une stratégie de retry/fallback côté client pour les appels Socket.IO.",
      },
      {
        title: "Pas de rate limiting / brute-force protection",
        detail:
          "Les routes d'authentification devraient être protégées par un rate limiter (ex: `express-rate-limit`) pour éviter les attaques par force brute.",
      },
      {
        title: "UPLOAD_PROVIDER=local en MVP",
        detail:
          "Le mode de stockage local est suffisant pour un MVP mais doit être migré vers S3 avant la mise en production avec plusieurs hôtels.",
      },
      {
        title: "Monitoring & logs absents",
        detail:
          "Aucune trace d'un système de logs structuré (Winston, Pino) ni d'observabilité (Sentry, OpenTelemetry). Critique pour diagnostiquer des incidents en production.",
      },
      {
        title: "Refresh token absent",
        detail:
          "L'authentification JWT sans mécanisme de refresh token force des déconnexions fréquentes et pose problème pour les sessions longues en réception.",
      },
    ],
  },
  {
    category: "🚀 Opportunités d'évolution",
    color: "blue",
    items: [
      {
        title: "Module de notifications push (PWA)",
        detail:
          "Transformer la guest app en PWA avec Web Push permettrait des notifications proactives (message réception, promo en temps réel) sans app native.",
      },
      {
        title: "Intégration PMS (Property Management System)",
        detail:
          "Un connecteur vers Opera, Protel ou Mews permettrait l'import automatique des réservations et un pré-check-in digital complet.",
      },
      {
        title: "IA de recommandation personnalisée",
        detail:
          "Les préférences JSON stockées sur les Guest peuvent alimenter un moteur de recommandation. Ajouter un LLM pour générer des suggestions hyper-personnalisées.",
      },
      {
        title: "Module de paiement intégré",
        detail:
          "Stripe pour les upgrades de chambre, le room service payant ou les prestations additionnelles directement depuis la guest app.",
      },
      {
        title: "Internationalisation (i18n)",
        detail:
          "Le champ `language` existe déjà sur Guest. Ajouter `react-i18next` côté frontend et les traductions pour EN, ES, ZH, AR couvrirait la clientèle internationale parisienne.",
      },
      {
        title: "API publique pour partenaires",
        detail:
          "Exposer une API REST documentée (Swagger/OpenAPI) permettrait aux hôtels d'intégrer Paris Local dans leurs propres outils ou sites web.",
      },
    ],
  },
];

const colorMap: Record<string, { border: string; tag: string; dot: string }> = {
  green: {
    border: "border-green-500/20 hover:border-green-500/40",
    tag: "bg-green-500/10 text-green-400 border-green-500/20",
    dot: "bg-green-500",
  },
  yellow: {
    border: "border-yellow-500/20 hover:border-yellow-500/40",
    tag: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    dot: "bg-yellow-500",
  },
  blue: {
    border: "border-blue-400/20 hover:border-blue-400/40",
    tag: "bg-blue-400/10 text-blue-300 border-blue-400/20",
    dot: "bg-blue-400",
  },
};

export default function AuditSection() {
  const [openTab, setOpenTab] = useState(0);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <section id="audit" className="relative py-32 bg-[#0a0a0f]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-medium mb-4">
            Audit technique
          </div>
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-bold mb-4">
            Analyse complète du{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8c97a]">
              codebase
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Un audit honnête de l'état actuel du projet, avec les points forts à valoriser,
            les faiblesses à corriger et les opportunités à saisir.
          </p>
        </div>

        {/* Score cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Architecture", score: "9/10", color: "text-green-400" },
            { label: "Sécurité", score: "6/10", color: "text-yellow-400" },
            { label: "Tests", score: "2/10", color: "text-red-400" },
            { label: "Scalabilité", score: "8/10", color: "text-green-400" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/2 border border-white/8 rounded-xl p-5 text-center"
            >
              <div className={`text-3xl font-bold font-['Playfair_Display',serif] ${s.color}`}>
                {s.score}
              </div>
              <div className="text-white/40 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {auditItems.map((cat, i) => (
            <button
              key={i}
              onClick={() => setOpenTab(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                openTab === i
                  ? "bg-[#c9a84c] text-[#0a0a0f]"
                  : "bg-white/5 text-white/60 hover:bg-white/8 hover:text-white border border-white/8"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {auditItems[openTab].items.map((item, i) => {
            const key = `${openTab}-${i}`;
            const colors = colorMap[auditItems[openTab].color];
            const isOpen = expandedItem === key;
            return (
              <div
                key={key}
                className={`bg-white/2 border rounded-xl p-5 cursor-pointer transition-all duration-300 ${colors.border}`}
                onClick={() => setExpandedItem(isOpen ? null : key)}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${colors.dot}`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-medium text-white text-sm">{item.title}</h4>
                      <span className="text-white/30 flex-shrink-0">{isOpen ? "▲" : "▼"}</span>
                    </div>
                    {isOpen && (
                      <p className="text-white/50 text-sm mt-2 leading-relaxed">{item.detail}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-12 bg-gradient-to-r from-[#c9a84c]/10 to-transparent border border-[#c9a84c]/20 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0">💡</div>
            <div>
              <h3 className="font-['Playfair_Display',serif] text-xl font-semibold text-[#c9a84c] mb-2">
                Verdict global
              </h3>
              <p className="text-white/60 leading-relaxed">
                Paris Local dispose d'une base technique <strong className="text-white">excellente et professionnelle</strong>. 
                L'architecture multi-tenant, la stack choisie et le modèle de données sont au niveau d'un produit 
                SaaS mature. Les priorités immédiates sont : <strong className="text-white">ajouter des tests</strong>, 
                <strong className="text-white"> sécuriser l'auth</strong> (rate limiting + refresh tokens) et mettre en place 
                un <strong className="text-white">système de logs structuré</strong> avant la mise en production avec 
                des clients payants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
