const impacts = [
  { value: "CRM", label: "coordonnées clients exploitables pour offres ciblées" },
  { value: "Temps", label: "moins de questions répétitives pour la réception" },
  { value: "Housekeeping", label: "demandes suivies, priorisées et historisées" },
  { value: "Partenariats", label: "mise en avant des commerçants et prestataires locaux" },
];

export default function SocialProofBanner() {
  return (
    <section id="impact" className="relative py-16 lg:py-20 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-[#c9a84c]/15 bg-gradient-to-br from-[#c9a84c]/6 via-transparent to-transparent p-8 lg:p-12 text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[200px] rounded-full bg-[#c9a84c]/5 blur-[100px]" />
          </div>
          <div className="relative z-10">
            <span className="badge-gold mb-5 inline-flex">Bénéfices business</span>
            <p className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Paris Local n'est pas seulement un guide client : c'est un levier de fidélisation, d'efficacité opérationnelle et de revenus locaux.
            </p>
            <p className="text-white/45 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed">
              Chaque interaction client peut servir à mieux connaître vos voyageurs, réduire la charge des équipes et orienter les clients vers vos partenaires sélectionnés.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {impacts.map((kpi) => (
            <div key={kpi.value} className="text-center bg-white/[0.02] border border-white/6 rounded-xl p-5 hover:border-[#c9a84c]/20 transition-colors duration-300">
              <div className="font-playfair text-2xl lg:text-3xl font-bold text-[#c9a84c] mb-1.5">{kpi.value}</div>
              <div className="text-white/35 text-xs leading-snug">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
