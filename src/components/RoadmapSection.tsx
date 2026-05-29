const phases = [
  {
    phase: "Phase 1",
    label: "Stabilisation",
    period: "Q3 2025 · 0–3 mois",
    status: "current",
    objective: "Rendre le produit production-ready et déployer les 5 premiers hôtels pilotes",
    commercial: {
      title: "Stratégie Commerciale — Go-to-Market",
      color: "text-[#c9a84c]",
      actions: [
        {
          icon: "🎯",
          title: "Ciblage early adopters",
          detail:
            "Identifier 10 hôtels 3–4 étoiles à Paris (Marais, Saint-Germain, Opéra) via LinkedIn et réseaux hôteliers. Proposer 3 mois gratuits en échange de témoignages.",
        },
        {
          icon: "📸",
          title: "Création d'assets marketing",
          detail:
            "Produire une vidéo démo de 90 secondes, des captures d'écran annotées et une landing page avec formulaire de waitlist.",
        },
        {
          icon: "🤝",
          title: "Partenariats distributeurs",
          detail:
            "Approcher les associations hôtelières (UMIH, GNI) et les consultants en hôtellerie parisienne pour devenir prescripteurs.",
        },
        {
          icon: "🔧",
          title: "Priorités techniques",
          detail:
            "Ajouter rate limiting, refresh tokens, tests unitaires sur auth/routes critiques, Sentry, logs structurés.",
        },
      ],
    },
  },
  {
    phase: "Phase 2",
    label: "Croissance",
    period: "Q4 2025 – Q1 2026 · 3–9 mois",
    status: "upcoming",
    objective: "Atteindre 20 hôtels actifs et valider le modèle économique",
    commercial: {
      title: "Acquisition & Rétention",
      color: "text-blue-400",
      actions: [
        {
          icon: "📣",
          title: "Content Marketing Hôtellerie",
          detail:
            "Blog sur les tendances hospitality tech, guides pratiques pour hôteliers parisiens, présence sur LinkedIn avec case studies clients.",
        },
        {
          icon: "💰",
          title: "Lancement plan Business payant",
          detail:
            "Convertir les pilotes gratuits en clients payants. Objectif : 15 hôtels à 199€/mois = 2 985€ MRR.",
        },
        {
          icon: "🌐",
          title: "Internationalisation (i18n)",
          detail:
            "Traductions EN / ES / ZH / AR pour cibler les clientèles touristiques internationales de Paris.",
        },
        {
          icon: "⚡",
          title: "Notification push PWA",
          detail:
            "Transformer la guest app en PWA avec service worker pour des notifications proactives sans app native.",
        },
      ],
    },
  },
  {
    phase: "Phase 3",
    label: "Expansion",
    period: "Q2–Q4 2026 · 9–18 mois",
    status: "future",
    objective: "Expansion géographique (Lyon, Nice, Bordeaux) et montée en gamme Enterprise",
    commercial: {
      title: "Scale & Partenariats Stratégiques",
      color: "text-purple-400",
      actions: [
        {
          icon: "🏢",
          title: "Offre Groupe Hôtelier (Enterprise)",
          detail:
            "Commercialiser le plan Enterprise auprès des groupes (AccorHotels indépendants, Best Western, Logis de France). Intégrations PMS (Opera, Mews).",
        },
        {
          icon: "💳",
          title: "Module paiement intégré (Stripe)",
          detail:
            "Upsell room service payant, upgrades chambre, prestations additionnelles directement depuis la guest app. Nouveau centre de revenus.",
        },
        {
          icon: "🤖",
          title: "IA & recommandations personnalisées",
          detail:
            "Moteur de recommandation basé sur les préférences JSON des guests. Intégration d'un LLM pour des suggestions conversationnelles.",
        },
        {
          icon: "🌍",
          title: "Expansion France & Europe",
          detail:
            "Lyon, Nice, Bordeaux, puis Barcelone, Rome, Amsterdam. Modèle de franchise technologique avec revendeurs locaux.",
        },
      ],
    },
  },
  {
    phase: "Phase 4",
    label: "Leadership",
    period: "2027+ · 18 mois+",
    status: "vision",
    objective: "Devenir la référence européenne du concierge digital hôtelier indépendant",
    commercial: {
      title: "Vision Long Terme",
      color: "text-[#c9a84c]",
      actions: [
        {
          icon: "📡",
          title: "API Marketplace & Écosystème",
          detail:
            "Ouvrir l'API publique pour créer un marketplace de connecteurs : PMS, booking engines, CRM hôteliers, plateformes d'avis (Tripadvisor, Google).",
        },
        {
          icon: "🎯",
          title: "Data Intelligence Hôtelière",
          detail:
            "Monétiser (avec consentement) les insights agrégés du comportement des guests pour aider les hôtels à optimiser leur offre.",
        },
        {
          icon: "🏆",
          title: "Lever de fonds Seed",
          detail:
            "Avec 50+ hôtels actifs et un MRR de 15k€+, initier une levée Seed pour accélérer l'équipe commerciale et le développement produit.",
        },
        {
          icon: "🌐",
          title: "Internationalisation produit & équipe",
          detail:
            "Ouvrir des bureaux à Amsterdam ou Barcelone, recruter des business developers locaux pour chaque marché européen.",
        },
      ],
    },
  },
];

const statusStyles: Record<string, { dot: string; badge: string; border: string }> = {
  current: {
    dot: "bg-green-400 shadow-lg shadow-green-400/50",
    badge: "bg-green-400/10 text-green-400 border border-green-400/20",
    border: "border-green-400/20",
  },
  upcoming: {
    dot: "bg-blue-400 shadow-lg shadow-blue-400/50",
    badge: "bg-blue-400/10 text-blue-300 border border-blue-400/20",
    border: "border-blue-400/20",
  },
  future: {
    dot: "bg-purple-400 shadow-lg shadow-purple-400/50",
    badge: "bg-purple-400/10 text-purple-300 border border-purple-400/20",
    border: "border-purple-400/20",
  },
  vision: {
    dot: "bg-[#c9a84c] shadow-lg shadow-[#c9a84c]/50",
    badge: "bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20",
    border: "border-[#c9a84c]/20",
  },
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-32 bg-[#0a0a0f]">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full bg-[#c9a84c]/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-medium mb-4">
            Feuille de route commerciale
          </div>
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-bold mb-4">
            Stratégie de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8c97a]">
              commercialisation
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Un plan sur 18 mois pour transformer Paris Local d'un MVP technique en une solution SaaS
            B2B rentable et reconnue dans l'hôtellerie parisienne, puis française et européenne.
          </p>
        </div>

        {/* Key metrics target */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { target: "5", label: "Hôtels pilotes", when: "dans 3 mois" },
            { target: "20", label: "Hôtels actifs", when: "dans 9 mois" },
            { target: "3k€", label: "MRR objectif", when: "à 6 mois" },
            { target: "50+", label: "Hôtels à terme", when: "à 18 mois" },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-white/2 border border-white/8 rounded-xl p-5 text-center"
            >
              <div className="text-3xl font-bold text-[#c9a84c] font-['Playfair_Display',serif]">
                {m.target}
              </div>
              <div className="text-white/60 text-sm font-medium mt-1">{m.label}</div>
              <div className="text-white/30 text-xs mt-0.5">{m.when}</div>
            </div>
          ))}
        </div>

        {/* Phases */}
        <div className="space-y-8">
          {phases.map((phase, i) => {
            const s = statusStyles[phase.status];
            return (
              <div
                key={i}
                className={`bg-white/2 border ${s.border} rounded-2xl overflow-hidden`}
              >
                {/* Phase header */}
                <div className="p-6 border-b border-white/5">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full ${s.dot}`} />
                    <span className="font-mono text-[#c9a84c] font-semibold">{phase.phase}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${s.badge}`}>
                      {phase.label}
                    </span>
                    <span className="text-white/30 text-xs">{phase.period}</span>
                  </div>
                  <p className="text-white/60 text-sm">{phase.objective}</p>
                </div>

                {/* Actions */}
                <div className="p-6">
                  <h4 className={`font-semibold text-sm mb-4 ${phase.commercial.color}`}>
                    {phase.commercial.title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {phase.commercial.actions.map((action, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-3 bg-white/2 rounded-xl p-4"
                      >
                        <span className="text-xl flex-shrink-0">{action.icon}</span>
                        <div>
                          <div className="font-medium text-white text-sm mb-1">{action.title}</div>
                          <div className="text-white/40 text-xs leading-relaxed">{action.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ICP definition */}
        <div className="mt-12 bg-white/2 border border-white/8 rounded-2xl p-8">
          <h3 className="font-['Playfair_Display',serif] text-2xl font-semibold text-white mb-6">
            Profil client idéal (ICP)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Hôtel Boutique Parisien",
                icon: "🏨",
                criteria: [
                  "15–80 chambres",
                  "3 à 4 étoiles",
                  "Clientèle internationale > 60%",
                  "Pas de concierge humain dédié",
                  "Réceptionniste débordé",
                ],
                pain: "Manque de temps pour personnaliser l'accueil et répondre aux demandes",
              },
              {
                title: "Gestionnaire Multi-Propriétés",
                icon: "🏢",
                criteria: [
                  "2 à 10 établissements",
                  "Paris / IDF",
                  "Equipe centralisée",
                  "Besoin de reporting unifié",
                  "Budget tech modéré",
                ],
                pain: "Difficulté à maintenir une qualité de service homogène sur plusieurs sites",
              },
              {
                title: "Groupe Hôtelier Indépendant",
                icon: "🌐",
                criteria: [
                  "10+ hôtels en France",
                  "Pas affilié à une chaîne",
                  "DSI ou DG tech-friendly",
                  "Besoin d'intégration PMS",
                  "Budget IT > 500€/mois",
                ],
                pain: "Fragmentation des outils et absence de vue client centralisée",
              },
            ].map((icp) => (
              <div key={icp.title} className="bg-white/3 border border-white/8 rounded-xl p-5">
                <div className="text-2xl mb-2">{icp.icon}</div>
                <h4 className="font-semibold text-white text-sm mb-3">{icp.title}</h4>
                <ul className="space-y-1.5 mb-4">
                  {icp.criteria.map((c) => (
                    <li key={c} className="text-xs text-white/50 flex items-center gap-1.5">
                      <span className="text-[#c9a84c]">·</span> {c}
                    </li>
                  ))}
                </ul>
                <div className="bg-red-500/5 border border-red-500/15 rounded-lg p-3">
                  <p className="text-xs text-red-400 leading-relaxed">
                    <strong>Pain point :</strong> {icp.pain}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
