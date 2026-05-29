const items = [
  "✦ Pancartes NFC sans contact",
  "✦ QR code personnalisé",
  "✦ Collecte CRM consentie",
  "✦ Offres ciblées post-séjour",
  "✦ Questions fréquentes automatisées",
  "✦ Housekeeping optimisé",
  "✦ Partenariats locaux",
  "✦ Commissions prestataires",
  "✦ Lancement 1er juin 2026",
  "✦ Démo personnalisée",
];

export default function TickerBanner() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-3.5 dark:bg-[#c9a84c]/8 bg-[#c9a84c]/10 dark:border-y dark:border-[#c9a84c]/15 border-y border-[#c9a84c]/25">
      <div className="flex gap-12 animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="text-xs font-medium tracking-widest text-[#b8922e] dark:text-[#c9a84c] flex-shrink-0 uppercase">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
