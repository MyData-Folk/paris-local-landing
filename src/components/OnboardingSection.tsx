import { useState } from "react";

type Step = "form" | "sending" | "success";

export default function OnboardingSection() {
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState({
    hotelName: "",
    address: "",
    contactName: "",
    email: "",
    phone: "",
    rooms: "",
  });
  const [hotelPhoto, setHotelPhoto] = useState<File | null>(null);
  const [logo, setLogo] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("sending");
    // Simulation envoi — à brancher sur EmailJS ou un endpoint backend
    setTimeout(() => setStep("success"), 1800);
  };

  const FileUpload = ({
    label,
    hint,
    file,
    onChange,
    id,
  }: {
    label: string;
    hint: string;
    file: File | null;
    onChange: (f: File | null) => void;
    id: string;
  }) => (
    <div>
      <label className="text-white/50 text-xs mb-1.5 block">{label}</label>
      <label
        htmlFor={id}
        className={`flex items-center gap-3 w-full border rounded-xl px-4 py-3 cursor-pointer transition-all duration-200 ${
          file
            ? "border-[#c9a84c]/50 bg-[#c9a84c]/5"
            : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
        }`}
      >
        {file ? (
          <>
            <span className="text-[#c9a84c] text-lg flex-shrink-0">✓</span>
            <span className="text-white/80 text-sm truncate">{file.name}</span>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); onChange(null); }}
              className="ml-auto text-white/30 hover:text-white/60 text-xs flex-shrink-0"
            >
              ✕
            </button>
          </>
        ) : (
          <>
            <svg className="w-5 h-5 text-white/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4-4m0 0l4 4m-4-4v9M20 16l-4-4m0 0l-4 4m4-4V7M12 3v4" />
            </svg>
            <div>
              <span className="text-white/40 text-sm">{hint}</span>
            </div>
          </>
        )}
      </label>
      <input
        id={id}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </div>
  );

  return (
    <section id="onboarding" className="relative py-32 bg-[#0d0d16]">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#c9a84c]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-medium mb-4">
            Onboarding 100% à distance
          </div>
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-bold mb-4">
            Lancez-vous en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8c97a]">
              moins d'une heure
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            Remplissez le formulaire ci-dessous, uploadez la photo de votre établissement et votre logo.
            Nous traitons votre demande et vous recevez votre{" "}
            <strong className="text-white/80">pancarte NFC + QR code offerte</strong>, prête à installer en chambre.
          </p>
        </div>

        {/* Steps rapides */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { num: "01", icon: "📝", label: "Remplissez le formulaire", sub: "2 minutes" },
            { num: "02", icon: "📸", label: "Uploadez vos visuels", sub: "Logo & photo" },
            { num: "03", icon: "⚙️", label: "On configure tout", sub: "Sous 24h" },
            { num: "04", icon: "🏷️", label: "Pancarte NFC offerte", sub: "Livrée chez vous" },
          ].map((s) => (
            <div key={s.num} className="bg-white/2 border border-white/8 rounded-2xl p-5 text-center group hover:border-[#c9a84c]/25 transition-all duration-300">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-mono text-[#c9a84c] text-xs mb-1">{s.num}</div>
              <div className="text-white text-sm font-medium leading-snug mb-1">{s.label}</div>
              <div className="text-white/35 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-gradient-to-b from-white/4 to-white/1 border border-white/10 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Left panel — ce qui est inclus */}
            <div className="lg:col-span-2 p-10 bg-gradient-to-br from-[#c9a84c]/10 to-transparent border-b lg:border-b-0 lg:border-r border-white/8 flex flex-col">
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-2">
                Ce qui est inclus
              </h3>
              <p className="text-white/40 text-sm mb-8 leading-relaxed">
                Tout ce qu'il vous faut pour accueillir vos premiers clients dès demain.
              </p>

              <ul className="space-y-5 flex-1">
                {[
                  { icon: "🏷️", title: "Pancarte NFC + QR code", detail: "Design élégant bois/métal, offerte et livrée" },
                  { icon: "🎨", title: "Interface aux couleurs de votre hôtel", detail: "Logo, couleurs, description personnalisés" },
                  { icon: "💬", title: "Messagerie temps réel active", detail: "Dès réception de votre pancarte" },
                  { icon: "🗺️", title: "Recommandations locales pré-configurées", detail: "Les meilleures adresses de votre quartier" },
                  { icon: "🔧", title: "Accompagnement à la prise en main", detail: "Par email et visio si besoin" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <div className="text-white text-sm font-medium">{item.title}</div>
                      <div className="text-white/40 text-xs mt-0.5">{item.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[#c9a84c] text-sm font-semibold">14 jours d'essai gratuit</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed">
                  Sans carte de crédit. Annulable à tout moment.
                </p>
              </div>
            </div>

            {/* Right panel — formulaire */}
            <div className="lg:col-span-3 p-10">
              {step === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center text-3xl mb-5">
                    🎉
                  </div>
                  <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-3">
                    Demande reçue !
                  </h3>
                  <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                    Notre équipe traite votre dossier sous 24h. Vous recevrez un email de confirmation
                    avec les prochaines étapes et la date de livraison de votre pancarte.
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-white/30 text-xs">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Vérifiez votre boîte email
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-semibold text-white text-lg mb-1">Créer mon espace hôtel</h3>
                  <p className="text-white/35 text-xs mb-6">Tous les champs marqués * sont requis</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Nom de l'hôtel *</label>
                      <input
                        required
                        type="text"
                        value={form.hotelName}
                        onChange={(e) => setForm({ ...form, hotelName: e.target.value })}
                        placeholder="Hôtel Le Marais Élégant"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Adresse *</label>
                      <input
                        required
                        type="text"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder="12 rue de Rivoli, Paris 75001"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Votre nom *</label>
                      <input
                        required
                        type="text"
                        value={form.contactName}
                        onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                        placeholder="Sophie Marchand"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Email professionnel *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="direction@monhotel.fr"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Téléphone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+33 1 23 45 67 89"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Nombre de chambres *</label>
                      <input
                        required
                        type="number"
                        min="1"
                        value={form.rooms}
                        onChange={(e) => setForm({ ...form, rooms: e.target.value })}
                        placeholder="ex : 24"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <FileUpload
                      id="hotel-photo"
                      label="Photo de l'établissement *"
                      hint="Glissez ou cliquez — JPG, PNG"
                      file={hotelPhoto}
                      onChange={setHotelPhoto}
                    />
                    <FileUpload
                      id="hotel-logo"
                      label="Logo de l'hôtel *"
                      hint="Glissez ou cliquez — PNG transparent préféré"
                      file={logo}
                      onChange={setLogo}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={step === "sending"}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                  >
                    {step === "sending" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Envoi en cours…
                      </>
                    ) : (
                      "Créer mon espace hôtel gratuitement →"
                    )}
                  </button>

                  <p className="text-center text-white/25 text-xs">
                    14 jours gratuits · Sans carte de crédit · Pancarte NFC offerte
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
