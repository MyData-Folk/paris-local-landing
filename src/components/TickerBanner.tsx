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
    <div className="relative py-4 bg-[#0d0d16] border-y border-white/5 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center px-6 text-xs text-[#c9a84c]/70 tracking-widest uppercase font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
