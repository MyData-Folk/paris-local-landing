const steps = [
  {
    num: "01",
    who: "Vous (Hôtel)",
    icon: "🏨",
    title: "Création de votre espace hôtel",
    description:
      "Via le générateur d'administration, vous renseignez le nom, le slug, les couleurs, le logo et les informations de votre établissement. Votre espace est prêt en moins de 5 minutes.",
    details: ["Slug → sous-domaine automatique", "Branding white-label complet", "Comptes réception créés"],
    color: "#c9a84c",
  },
  {
    num: "02",
    who: "Vous (Hôtel)",
    icon: "📋",
    title: "Configuration des services",
    description:
      "Paramétrez le WiFi, les horaires, les recommandations locales, les types de demandes de service. Votre concierge digital reflète exactement votre offre.",
    details: [
      "Recommandations géolocalisées",
      "Catégories de services",
      "Paramètres séjour (check-in/out)",
    ],
    color: "#c9a84c",
  },
  {
    num: "03",
    who: "Votre client",
    icon: "📱",
    title: "Arrivée & scan QR Code",
    description:
      "À l'arrivée en chambre, le client scanne le QR code. Il accède instantanément à sa page d'accueil personnalisée : informations hôtel, messagerie, guide local.",
    details: [
      "Aucune app à télécharger",
      "Page brandée aux couleurs de l'hôtel",
      "Accès immédiat sans login",
    ],
    color: "#e8c97a",
  },
  {
    num: "04",
    who: "Votre équipe",
    icon: "💼",
    title: "Gestion en temps réel",
    description:
      "La réception reçoit les messages et demandes de service instantanément via Socket.IO. Elle répond depuis son dashboard, le client voit la réponse en temps réel.",
    details: [
      "Notifications push en réception",
      "File de demandes priorisée",
      "Historique complet par séjour",
    ],
    color: "#e8c97a",
  },
  {
    num: "05",
    who: "Votre client",
    icon: "⭐",
    title: "Avis avant départ",
    description:
      "Juste avant le check-out, le client est invité à noter son séjour. Vous récoltez des avis authentiques et pouvez corriger les insatisfactions avant que le client parte.",
    details: ["Détection précoce des problèmes", "Augmentation du NPS", "Avis horodatés par séjour"],
    color: "#c9a84c",
  },
  {
    num: "06",
    who: "Vous (Admin)",
    icon: "📊",
    title: "Analyse & optimisation",
    description:
      "Consultez les analytics, les profils guests enrichis, les tags CRM et les statistiques de satisfaction pour améliorer continuellement votre service.",
    details: ["Profils guests persistants", "Tags et segmentation CRM", "Tableau de bord multi-hôtels"],
    color: "#c9a84c",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="relative py-32 bg-[#0d0d16]">
      {/* Ambient */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-medium mb-4">
            Comment ça marche
          </div>
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-bold mb-4">
            De l'onboarding au{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8c97a]">
              séjour parfait
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Un parcours pensé pour l'hôtel comme pour le client, de la configuration initiale
            jusqu'aux analytics post-séjour.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a84c]/30 via-[#c9a84c]/10 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col sm:flex-row gap-8 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Content side */}
                <div className="flex-1">
                  <div
                    className={`bg-white/2 border border-white/8 rounded-2xl p-6 hover:border-[#c9a84c]/25 transition-all duration-300 ${
                      i % 2 === 1 ? "sm:ml-8" : "sm:mr-8"
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-2xl">{step.icon}</div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-[#c9a84c]">{step.num}</span>
                          <span className="text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded-full">
                            {step.who}
                          </span>
                        </div>
                        <h3 className="font-semibold text-white text-lg">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{step.description}</p>
                    <ul className="space-y-1.5">
                      {step.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-white/40">
                          <span className="text-[#c9a84c]">→</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden sm:flex flex-col items-center justify-start pt-6 flex-shrink-0 w-0">
                  <div
                    className="w-4 h-4 rounded-full border-2 border-[#c9a84c] bg-[#0d0d16] shadow-lg shadow-[#c9a84c]/30"
                    style={{ marginLeft: "-7px" }}
                  />
                </div>

                {/* Empty side for alternation */}
                <div className="flex-1 hidden sm:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Architecture visual */}
        <div className="mt-20 bg-white/2 border border-white/8 rounded-2xl p-8">
          <h3 className="text-center font-['Playfair_Display',serif] text-2xl font-semibold mb-8">
            Architecture multi-tenant
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Layer Client",
                icon: "📱",
                items: ["Page Guest (QR)", "Messagerie", "Recommandations", "Demandes service"],
                bg: "from-[#c9a84c]/10",
              },
              {
                title: "Layer Réception",
                icon: "💻",
                items: ["Dashboard réception", "File de demandes", "Chat en temps réel", "Avis & reviews"],
                bg: "from-[#e8c97a]/10",
              },
              {
                title: "Layer Admin",
                icon: "🔧",
                items: [
                  "Multi-hôtels",
                  "Générateur d'hôtel",
                  "Gestion utilisateurs",
                  "Analytics globaux",
                ],
                bg: "from-[#c9a84c]/10",
              },
            ].map((layer, i) => (
              <div
                key={i}
                className={`bg-gradient-to-b ${layer.bg} to-transparent border border-white/8 rounded-xl p-5`}
              >
                <div className="text-2xl mb-2">{layer.icon}</div>
                <h4 className="font-semibold text-[#c9a84c] mb-3">{layer.title}</h4>
                <ul className="space-y-2">
                  {layer.items.map((item, j) => (
                    <li key={j} className="text-sm text-white/50 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#c9a84c]/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center text-xs text-white/30 font-mono">
            PostgreSQL central · hotel_id row-level isolation · Socket.IO real-time · JWT auth
          </div>
        </div>
      </div>
    </section>
  );
}
