const features = [
  {
    icon: "📱",
    title: "Accueil QR Code",
    description:
      "Chaque chambre dispose d'un QR code unique. Le client scanne et accède instantanément à son espace personnalisé — sans télécharger d'application.",
    tag: "Guest Experience",
    details: [
      "Page d'accueil brandée aux couleurs de l'hôtel",
      "Résolution automatique via URL slug",
      "Compatible tous smartphones",
    ],
  },
  {
    icon: "💬",
    title: "Messagerie Temps Réel",
    description:
      "Communication bidirectionnelle via Socket.IO entre les clients et la réception. Chaque échange est tracé par séjour et par chambre.",
    tag: "Réception",
    details: [
      "Notifications instantanées en réception",
      "Historique complet par séjour",
      "Priorités et statuts de messages",
    ],
  },
  {
    icon: "🗺️",
    title: "Recommandations Locales",
    description:
      "Proposez à vos clients les meilleures adresses parisiennes : restaurants, musées, boutiques, transports. Géolocalisées, filtrables, personnalisées par hôtel.",
    tag: "Local Guide",
    details: [
      "Intégration Google Places ID",
      "Catégories personnalisables",
      "Activation/désactivation par hôtel",
    ],
  },
  {
    icon: "🔔",
    title: "Demandes de Service",
    description:
      "Room service, housekeeping, bagagerie, taxi… Les clients soumettent leurs demandes depuis leur espace. La réception les traite en temps réel.",
    tag: "Service Management",
    details: [
      "Statuts : nouveau → en cours → résolu",
      "Priorités configurables",
      "Historique par séjour",
    ],
  },
  {
    icon: "⭐",
    title: "Avis & Satisfaction",
    description:
      "Collectez les avis clients pendant le séjour, pas après. Détectez les insatisfactions avant le départ pour y remédier immédiatement.",
    tag: "Reviews",
    details: [
      "Notation en temps réel",
      "Commentaires associés au séjour",
      "Tableau de bord satisfaction",
    ],
  },
  {
    icon: "🏨",
    title: "Dashboard Multi-Hôtels",
    description:
      "Un seul panneau d'administration pour gérer l'ensemble de votre portefeuille hôtelier. Chaque hôtel reste isolé et sécurisé.",
    tag: "Admin Central",
    details: [
      "Architecture multi-tenant PostgreSQL",
      "Rôles : super_admin / hotel_admin / réceptionniste",
      "Déploiement sous-domaine automatique",
    ],
  },
  {
    icon: "🎨",
    title: "White-Label Total",
    description:
      "Logo, couleurs primaires et secondaires, description, WiFi, horaires… Chaque hôtel dispose d'une identité visuelle complètement personnalisée.",
    tag: "Branding",
    details: [
      "Couleurs hex par hôtel",
      "Logo hébergé et servi",
      "Page guest brandée dynamiquement",
    ],
  },
  {
    icon: "🔐",
    title: "Sécurité & Isolation",
    description:
      "Chaque requête est validée par `requireHotelAccess`. Aucun tenant ne peut accéder aux données d'un autre. JWT, bcrypt, middlewares stricts.",
    tag: "Security",
    details: [
      "JWT avec expiration configurable",
      "Row-level hotel_id sur toutes les tables",
      "Middleware d'isolation par hôtel",
    ],
  },
  {
    icon: "📊",
    title: "Analytiques & Événements",
    description:
      "Suivi des événements clients : pages vues, interactions, préférences. Construisez des profils guests riches et actionnables.",
    tag: "Analytics",
    details: [
      "Table AnalyticsEvent par hôtel",
      "Tags CRM sur les profils guests",
      "Statut de relation client",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-[#0a0a0f]">
      {/* Ambient */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#c9a84c]/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-medium mb-4">
            Fonctionnalités
          </div>
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-bold mb-4">
            Tout ce dont votre hôtel a besoin,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8c97a]">
              dans une seule plateforme
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Conçu pour les hôtels parisiens exigeants, Paris Local combine l'élégance de l'expérience
            client avec la puissance d'un back-office opérationnel.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-white/2 border border-white/8 rounded-2xl p-6 hover:border-[#c9a84c]/30 hover:bg-[#c9a84c]/3 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <span className="px-2 py-1 rounded-md bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-medium border border-[#c9a84c]/20">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="font-semibold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{feature.description}</p>

                <ul className="space-y-1.5">
                  {feature.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-white/40">
                      <span className="text-[#c9a84c] mt-0.5 flex-shrink-0">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack banner */}
        <div className="mt-16 bg-white/2 border border-white/8 rounded-2xl p-8">
          <p className="text-center text-white/40 text-xs uppercase tracking-widest mb-6">Stack technique</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React + TypeScript",
              "Vite",
              "Tailwind CSS",
              "Node.js + Express",
              "Prisma ORM",
              "PostgreSQL",
              "Socket.IO",
              "JWT Auth",
              "Docker",
              "Coolify",
              "S3 Compatible",
              "Zod Validation",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-white/60 text-sm font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
