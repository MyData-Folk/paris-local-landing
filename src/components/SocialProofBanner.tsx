const impacts = [
  { value: "CRM", label: "coordonnées clients exploitables pour offres ciblées" },
  { value: "Temps", label: "moins de questions répétitives pour la réception" },
  { value: "Housekeeping", label: "demandes suivies, priorisées et historisées" },
  { value: "Partenariats", label: "mise en avant des commerçants et prestataires locaux" },
];

export default function SocialProofBanner() {
  return (
    <section id="impact" className="relative py-14 sm:py-20 lg:py-24 dark:bg-[#0a0a0f] bg-[#faf9f6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main quote card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden dark:border border dark:border-[#c9a84c]/15 border-[#c9a84c]/20 dark:bg-gradient-to-br dark:from-[#c9a84c]/6 dark:via-transparent dark:to-transparent bg-gradient-to-br from-[#c9a84c]/8 via-white/50 to-white/30 p-6 sm:p-10 lg:p-14 text-center shadow-sm">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="w-[300px] sm:w-[500px] h-[150px] sm:h-[200px] rounded-full dark:bg-[#c9a84c]/5 bg-[#c9a84c]/8 blur-[60px] sm:blur-[100px]" />
          </div>

          <div className="relative z-10">
            <span className="badge-gold mb-4 sm:mb-6 inline-flex">Bénéfices business</span>
            <p className="font-playfair text-xl sm:text-3xl lg:text-4xl font-bold dark:text-white text-[#1a1a2e] mb-4 sm:mb-5 leading-snug">
              Paris Local n'est pas seulement un guide client :{" "}
              <span className="text-gold-gradient">c'est un levier de fidélisation,</span>{" "}
              d'efficacité opérationnelle et de revenus locaux.
            </p>
            <p className="dark:text-white/45 text-[#1a1a2e]/55 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Chaque interaction client peut servir à mieux connaître vos voyageurs, réduire la charge des équipes et orienter les clients vers vos partenaires sélectionnés.
            </p>
          </div>
        </div>

        {/* KPI grid */}
        <div className="mt-6 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {impacts.map((kpi) => (
            <div
              key={kpi.value}
              className="text-center dark:bg-white/[0.02] bg-white dark:border border dark:border-white/6 border-[#c9a84c]/12 rounded-xl sm:rounded-2xl p-4 sm:p-5 dark:hover:border-[#c9a84c]/20 hover:border-[#c9a84c]/30 transition-colors duration-300 shadow-sm"
            >
              <div className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-[#c9a84c] mb-1.5">
                {kpi.value}
              </div>
              <div className="dark:text-white/35 text-[#1a1a2e]/50 text-xs leading-snug">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
