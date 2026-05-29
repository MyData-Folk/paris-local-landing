import { useState } from "react";

const features = [
  {
    emoji: "📲",
    title: "Pancartes NFC sans contact + QR code",
    description: "Disposez une pancarte élégante en chambre, à la réception ou au petit-déjeuner. Le client approche son téléphone ou scanne le QR code et accède instantanément à l'espace de l'hôtel.",
    tag: "Accès client",
    details: ["Aucun téléchargement", "Compatible iOS & Android", "Design adapté à votre marque"],
  },
  {
    emoji: "👤",
    title: "CRM client enrichi",
    description: "L'outil aide à récupérer les emails, téléphones, préférences et centres d'intérêt des clients afin de préparer des offres ciblées après le séjour.",
    tag: "CRM",
    details: ["Collecte consentie des coordonnées", "Segmentation par profil client", "Base exploitable pour offres directes"],
  },
  {
    emoji: "⏱️",
    title: "Temps gagné pour la réception",
    description: "Les réponses aux questions fréquentes sont centralisées : Wi-Fi, horaires, check-in, checkout, transports, restaurants, pharmacies, taxis et services de l'hôtel.",
    tag: "Réception",
    details: ["Moins d'appels répétitifs", "Informations disponibles 24/7", "Équipe concentrée sur l'accueil réel"],
  },
  {
    emoji: "🧹",
    title: "Housekeeping optimisé",
    description: "Les demandes de ménage, linge, maintenance ou room service arrivent au bon endroit avec statut, priorité et historique pour éviter les oublis.",
    tag: "Opérations",
    details: ["Demandes priorisées", "Suivi nouveau / en cours / résolu", "Meilleure coordination réception-étages"],
  },
  {
    emoji: "🤝",
    title: "Partenariats locaux & commissions",
    description: "Mettez en avant vos prestataires et commerçants partenaires : restaurants, cafés, excursions, taxis, conciergerie, boutiques et activités de quartier.",
    tag: "Revenus",
    details: ["Sélection d'adresses partenaires", "Mise en avant d'offres négociées", "Potentiel de commissions ou avantages croisés"],
  },
  {
    emoji: "💬",
    title: "Communication client-réception",
    description: "Le client peut contacter l'hôtel depuis son espace. L'équipe garde une trace claire des échanges et peut répondre sans perdre le fil.",
    tag: "Messagerie",
    details: ["Conversation par client ou chambre", "Historique centralisé", "Demandes plus faciles à traiter"],
  },
  {
    emoji: "⭐",
    title: "Satisfaction pendant le séjour",
    description: "Détectez les insatisfactions avant le départ. L'hôtel peut intervenir pendant que le client est encore sur place, au lieu de découvrir le problème dans un avis public.",
    tag: "Avis",
    details: ["Feedback simple", "Alerte en cas de problème", "Meilleure maîtrise de l'expérience client"],
  },
  {
    emoji: "🎨",
    title: "Expérience brandée hôtel",
    description: "Logo, couleurs, messages, recommandations et services : l'expérience reste au nom de votre hôtel, Paris Local reste discret.",
    tag: "Branding",
    details: ["Page personnalisée", "Ton adapté à votre établissement", "Image professionnelle dès le scan"],
  },
  {
    emoji: "🔐",
    title: "Données et consentement",
    description: "La collecte CRM doit être claire, consentie et utilisée dans une logique de relation client : offres ciblées, fidélisation et communication post-séjour.",
    tag: "Confiance",
    details: ["Consentement explicite", "Finalité CRM transparente", "Préparation RGPD"],
  },
];

export default function FeaturesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="features" className="relative py-28 lg:py-36 bg-[#0a0a0f]">
      <div className="absolute top-0 left-1/4 w-[500px] h-[600px] rounded-full bg-[#c9a84c]/4 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="badge-gold mb-5 inline-flex">Solution Paris Local</span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-white leading-tight">
            Un outil simple pour mieux accueillir, mieux vendre et mieux fidéliser
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Pensé pour les hôtels indépendants et boutiques hôtels parisiens : moins de charge opérationnelle pour les équipes, plus de données utiles pour le CRM, plus d'opportunités avec les partenaires locaux.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative bg-white/[0.02] border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${expanded === i ? "border-[#c9a84c]/40 bg-[#c9a84c]/4 shadow-lg shadow-[#c9a84c]/8" : "border-white/8 hover:border-[#c9a84c]/25 hover:bg-[#c9a84c]/2"}`}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{feature.emoji}</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-medium border border-[#c9a84c]/20 tracking-wide">{feature.tag}</span>
                </div>
                <h3 className="font-semibold text-white text-base lg:text-lg mb-2 group-hover:text-[#e8c97a] transition-colors duration-200">{feature.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">{feature.description}</p>
                <div className={`overflow-hidden transition-all duration-300 ${expanded === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="space-y-1.5 pt-2 border-t border-white/8">
                    {feature.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-white/40"><span className="text-[#c9a84c] mt-0.5 flex-shrink-0">✓</span>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-1 text-[#c9a84c]/60 text-xs mt-3">
                  <span>{expanded === i ? "Réduire" : "En savoir plus"}</span>
                  <svg className={`w-3 h-3 transition-transform duration-300 ${expanded === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/[0.015] border border-white/6 rounded-2xl p-6 lg:p-8">
          <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-5">À retenir</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              "Une pancarte NFC + QR code transforme chaque point de contact en canal digital.",
              "Le CRM devient exploitable grâce aux coordonnées et préférences collectées avec consentement.",
              "Les équipes gagnent du temps sur les demandes répétitives et les tâches opérationnelles.",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white/[0.02] border border-white/6 p-5 text-white/50 text-sm leading-relaxed">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
