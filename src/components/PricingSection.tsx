const launchOffer = [
  "Page client personnalisée aux couleurs de l'hôtel",
  "Pancartes NFC sans contact + QR codes de lancement",
  "Guide digital : Wi-Fi, horaires, services, transports et recommandations",
  "Collecte CRM : email, téléphone, préférences et consentement",
  "Demandes client : housekeeping, room service, taxi, bagagerie, maintenance",
  "Mise en avant des partenaires locaux et offres sélectionnées",
  "Accompagnement au paramétrage avant le lancement du 1er juin 2026",
];

const options = [
  { icon: "🏨", title: "Hôtel indépendant", text: "Une solution simple pour tester le concierge digital dans un premier établissement." },
  { icon: "✨", title: "Boutique hôtel", text: "Une expérience brandée, premium et cohérente avec votre accueil sur place." },
  { icon: "🤝", title: "Réseau local", text: "Une base idéale pour développer des commissions avec restaurants, taxis, guides et commerces." },
];

export default function PricingSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="relative py-20 sm:py-28 lg:py-36 bg-[#0a0a0f]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[900px] h-[250px] sm:h-[500px] rounded-full bg-[#c9a84c]/4 blur-[100px] sm:blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="badge-gold mb-4 sm:mb-5 inline-flex">Offre de lancement</span>

          <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 text-white leading-tight">
            Rejoignez les premiers hôtels pilotes<br className="hidden sm:block" /> à partir du 1er juin 2026
          </h2>

          <p className="text-white/55 max-w-xs sm:max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Pour le lancement, l'objectif est d'installer une version utile, mesurable et exploitable rapidement, puis d'ajuster avec vos retours terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch mb-8 sm:mb-12">
          <div className="lg:col-span-3 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-[#c9a84c]/25 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-none">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <div className="text-[#c9a84c] text-sm font-semibold mb-1 sm:mb-2">
                  Pack Pilote Paris Local
                </div>

                <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                  Démo + installation accompagnée
                </h3>
              </div>

              <div className="rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/25 px-4 py-3 text-center flex-shrink-0">
                <div className="text-white/40 text-xs uppercase tracking-widest">
                  Lancement
                </div>
                <div className="text-[#c9a84c] font-playfair text-xl sm:text-2xl font-bold">
                  01/06/2026
                </div>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
              {launchOffer.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-white/70">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-lg shadow-[#c9a84c]/20"
            >
              Demander les conditions de lancement
            </button>

            <p className="mt-3 sm:mt-4 text-white/35 text-xs leading-relaxed">
              Les tarifs et conditions finales sont présentés pendant la démo selon le nombre de chambres, les supports NFC souhaités et le niveau d'accompagnement.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {options.map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-[#c9a84c]/25 transition-all duration-300 shadow-sm"
              >
                <div className="text-xl sm:text-2xl mb-2 sm:mb-3">{item.icon}</div>

                <h4 className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                  {item.title}
                </h4>

                <p className="text-white/45 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { icon: "🧭", label: "Simple à tester", sub: "Pas de téléchargement côté client" },
            { icon: "📈", label: "Orienté revenus", sub: "CRM, offres ciblées, partenaires" },
            { icon: "🧹", label: "Opérationnel", sub: "Réception et housekeeping mieux coordonnés" },
          ].map((g) => (
            <div
              key={g.label}
              className="flex items-center gap-3 bg-white/[0.015] border border-white/10 rounded-xl px-4 sm:px-5 py-4 shadow-sm"
            >
              <span className="text-xl flex-shrink-0">{g.icon}</span>

              <div>
                <div className="text-white/75 text-sm font-medium">{g.label}</div>
                <div className="text-white/40 text-xs">{g.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
