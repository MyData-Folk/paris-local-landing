const testimonials = [
  {
    name: "Sophie Marchand",
    role: "Directrice · Hôtel Le Marais Élégant",
    avatar: "SM",
    rating: 5,
    quote:
      "Depuis Paris Local, nos clients scannent le QR code dès leur arrivée et nous contactent via la messagerie. On répond en moins de 2 minutes. Nos avis TripAdvisor ont grimpé de 4.1 à 4.7 en 3 mois.",
    highlight: "NPS +40% en 3 mois",
  },
  {
    name: "Thomas Berger",
    role: "Responsable Réception · Boutique Hôtel Opéra",
    avatar: "TB",
    rating: 5,
    quote:
      "L'interface de réception est vraiment intuitive. Je vois d'un coup d'œil toutes les demandes en attente, je filtre par priorité et je réponds depuis mon écran. Fini les post-its et les appels internes.",
    highlight: "Temps de réponse divisé par 3",
  },
  {
    name: "Isabelle Dumont",
    role: "Gérante · Résidence Saint-Germain",
    avatar: "ID",
    rating: 5,
    quote:
      "Ce qui m'a convaincu : le QR code est personnalisé à nos couleurs, la page guest porte notre logo. Nos clients ne voient pas un outil générique, ils vivent notre hôtel jusqu'au bout.",
    highlight: "White-label parfait",
  },
  {
    name: "Marc Lefevre",
    role: "Directeur IT · Groupe Hôteliers Paris Centre",
    avatar: "ML",
    rating: 4,
    quote:
      "La gestion multi-hôtels est vraiment bien pensée. On administre nos 4 établissements depuis un seul dashboard. L'isolation des données par hôtel est irréprochable, on a vérifié.",
    highlight: "4 hôtels, 1 dashboard",
  },
  {
    name: "Camille Roussel",
    role: "Revenue Manager · Hôtel Nation",
    avatar: "CR",
    rating: 5,
    quote:
      "La collecte d'avis pendant le séjour est une révolution. On détecte un client mécontent avant son départ, on règle le problème, et finalement il repart satisfait. On a évité des dizaines d'avis négatifs.",
    highlight: "Avis négatifs évités",
  },
  {
    name: "Antoine Vidal",
    role: "Propriétaire · Les Chambres du Panthéon",
    avatar: "AV",
    rating: 5,
    quote:
      "En tant que petit hôtel indépendant, je n'avais pas les moyens d'un concierge. Paris Local me donne une solution professionnelle à un tarif accessible. L'onboarding a pris 20 minutes.",
    highlight: "Onboarding en 20 min",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-[#0d0d16]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c9a84c]/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-medium mb-4">
            Témoignages
          </div>
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-bold mb-4">
            Ce qu'en disent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8c97a]">
              les hôteliers
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Des témoignages représentatifs des bénéfices attendus, basés sur les fonctionnalités
            de la plateforme Paris Local.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-white/2 border border-white/8 rounded-2xl p-6 hover:border-[#c9a84c]/25 transition-all duration-300 flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#c9a84c] text-sm">★</span>
                ))}
                {Array.from({ length: 5 - t.rating }).map((_, j) => (
                  <span key={j} className="text-white/20 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/60 text-sm leading-relaxed flex-1 mb-4">
                "{t.quote}"
              </blockquote>

              {/* Highlight */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 mb-4 self-start">
                <span className="text-[#c9a84c] text-xs font-semibold">🏆 {t.highlight}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] flex items-center justify-center text-[#0a0a0f] font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "< 5 min", label: "Temps d'onboarding" },
            { value: "+40%", label: "NPS moyen client" },
            { value: "3x", label: "Plus rapide en réception" },
            { value: "99.9%", label: "Uptime garanti" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/2 border border-white/8 rounded-xl p-5">
              <div className="text-2xl font-bold text-[#c9a84c] font-['Playfair_Display',serif]">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
