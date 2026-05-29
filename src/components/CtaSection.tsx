import { useState } from "react";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", hotel: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="relative py-32 bg-[#0a0a0f]">
      {/* Ambient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] rounded-full bg-[#c9a84c]/6 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-white/4 to-white/1 border border-white/10 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Info */}
            <div className="p-10 lg:p-12 bg-gradient-to-br from-[#c9a84c]/10 to-transparent border-b lg:border-b-0 lg:border-r border-white/8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-medium mb-6">
                Démo gratuite
              </div>
              <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-white mb-4">
                Prêt à transformer l'expérience client de votre hôtel ?
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                Demandez une démonstration personnalisée. On configure votre hôtel en direct,
                vous voyez le produit dans votre contexte exact.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Démo en visio de 30 minutes",
                  "Configuration live de votre hôtel",
                  "QR code de test en fin de session",
                  "14 jours d'essai gratuit sans CB",
                  "Accompagnement à l'onboarding",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a84c] text-xs">✓</span>
                    </div>
                    <span className="text-white/70 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["SM", "TB", "ID", "ML"].map((initials) => (
                    <div
                      key={initials}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] border-2 border-[#0a0a0f] flex items-center justify-center text-[#0a0a0f] text-xs font-bold"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span className="text-white/40 text-xs">Rejoignez les premiers hôtels pilotes</span>
              </div>
            </div>

            {/* Right - Form */}
            <div className="p-10 lg:p-12">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-2">
                    Merci !
                  </h3>
                  <p className="text-white/50 text-sm">
                    Votre demande a bien été reçue. Notre équipe vous contactera dans les 24h pour
                    planifier votre démo personnalisée.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-semibold text-white text-lg mb-6">Demander ma démo</h3>

                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Votre nom *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                    <label className="text-white/50 text-xs mb-1.5 block">Nom de votre hôtel *</label>
                    <input
                      required
                      type="text"
                      value={form.hotel}
                      onChange={(e) => setForm({ ...form, hotel: e.target.value })}
                      placeholder="Hôtel Le Marais Élégant"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Message (optionnel)</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Décrivez vos besoins spécifiques..."
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
                  >
                    Demander ma démo gratuite →
                  </button>

                  <p className="text-center text-white/25 text-xs">
                    Aucune carte de crédit requise · Réponse sous 24h
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
