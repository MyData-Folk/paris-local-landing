import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const benefits = [
  "Présentation personnalisée de la solution",
  "Démo sur un hôtel fictif ou votre établissement",
  "Discussion sur vos besoins CRM et opérationnels",
  "Conditions et planning de lancement pour juin 2026",
  "Réponse sous 48h ouvrées",
];

const inputBase =
  "w-full px-4 py-3 rounded-xl text-sm dark:bg-white/[0.04] bg-white dark:border border dark:border-white/10 border-[#c9a84c]/20 dark:text-white text-[#1a1a2e] dark:placeholder-white/25 placeholder-[#1a1a2e]/35 transition-all duration-200";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    from_name: "",
    reply_to: "",
    hotel_name: "",
    phone: "",
    rooms: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm({ from_name: "", reply_to: "", hotel_name: "", phone: "", rooms: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-14 sm:py-28 lg:py-36 dark:bg-[#0d0d16] bg-[#f3f1ec]">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[300px] sm:w-[700px] h-[200px] sm:h-[500px] rounded-full dark:bg-[#c9a84c]/4 bg-[#c9a84c]/10 blur-[80px] sm:blur-[180px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 safe-bottom">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="badge-gold mb-4 sm:mb-5 inline-flex">Démo de lancement</span>
          <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 dark:text-white text-[#1a1a2e] leading-tight">
            Préparez votre hôtel<br className="hidden sm:block" /> pour le 1er juin 2026
          </h2>
          <p className="dark:text-white/45 text-[#1a1a2e]/55 max-w-xs sm:max-w-xl mx-auto text-sm sm:text-base lg:text-lg">
            Demandez une présentation personnalisée : nous vous montrons comment Paris Local peut collecter des contacts CRM, réduire les demandes répétitives et optimiser le suivi housekeeping.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Left info panel */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="dark:bg-white/[0.02] bg-white dark:border border dark:border-white/8 border-[#c9a84c]/12 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm h-full">
              <h3 className="font-semibold dark:text-white text-[#1a1a2e] mb-4 sm:mb-5 text-base sm:text-lg">
                Ce que nous préparons ensemble
              </h3>
              <ul className="space-y-3 mb-6 sm:mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm dark:text-white/55 text-[#1a1a2e]/60">
                    <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="pt-5 sm:pt-6 dark:border-t border-t dark:border-white/8 border-[#c9a84c]/12">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-3">
                  Contact direct
                </div>
                <div className="space-y-2.5">
                  <a
                    href="mailto:hello@parislocal.fr"
                    className="flex items-center gap-2.5 text-sm dark:text-white/55 text-[#1a1a2e]/60 dark:hover:text-white hover:text-[#c9a84c] transition-colors"
                  >
                    <span className="text-[#c9a84c]">✉</span>
                    hello@parislocal.fr
                  </a>
                  <div className="flex items-center gap-2.5 text-sm dark:text-white/45 text-[#1a1a2e]/50">
                    <span>📍</span>
                    Paris et Île-de-France
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 p-3 sm:p-4 rounded-xl dark:bg-white/[0.02] bg-[#c9a84c]/5 dark:border border dark:border-white/5 border-[#c9a84c]/15">
                <p className="text-xs dark:text-white/30 text-[#1a1a2e]/45 leading-relaxed">
                  Note : le formulaire nécessite la configuration de votre clé EmailJS en production. Vous pouvez aussi contacter directement via l'email ci-dessus.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="dark:bg-white/[0.02] bg-white dark:border border dark:border-white/8 border-[#c9a84c]/12 rounded-2xl sm:rounded-3xl p-4 min-[380px]:p-5 sm:p-8 shadow-sm">
              {status === "success" ? (
                <div className="text-center py-10 sm:py-16">
                  <div className="text-4xl sm:text-5xl mb-4">🎉</div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold dark:text-white text-[#1a1a2e] mb-3">
                    Demande envoyée !
                  </h3>
                  <p className="dark:text-white/50 text-[#1a1a2e]/55 text-sm sm:text-base max-w-sm mx-auto">
                    Votre demande a bien été reçue. Nous vous recontactons pour organiser la démonstration.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-[#c9a84c] hover:underline"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium dark:text-white/50 text-[#1a1a2e]/55 mb-1.5 uppercase tracking-wide">
                        Prénom &amp; Nom *
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        value={form.from_name}
                        onChange={handleChange}
                        placeholder="Marie Dupont"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium dark:text-white/50 text-[#1a1a2e]/55 mb-1.5 uppercase tracking-wide">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        name="reply_to"
                        required
                        value={form.reply_to}
                        onChange={handleChange}
                        placeholder="direction@hotel.fr"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium dark:text-white/50 text-[#1a1a2e]/55 mb-1.5 uppercase tracking-wide">
                        Nom de l'hôtel *
                      </label>
                      <input
                        type="text"
                        name="hotel_name"
                        required
                        value={form.hotel_name}
                        onChange={handleChange}
                        placeholder="Hôtel Saint-Germain"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium dark:text-white/50 text-[#1a1a2e]/55 mb-1.5 uppercase tracking-wide">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+33 6 00 00 00 00"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium dark:text-white/50 text-[#1a1a2e]/55 mb-1.5 uppercase tracking-wide">
                      Nombre de chambres
                    </label>
                    <select
                      name="rooms"
                      value={form.rooms}
                      onChange={handleChange}
                      className={`${inputBase} cursor-pointer dark:text-white/60`}
                    >
                      <option value="" className="dark:bg-[#0d0d16] bg-white">Sélectionner…</option>
                      <option value="1-20" className="dark:bg-[#0d0d16] bg-white">1 – 20 chambres</option>
                      <option value="21-50" className="dark:bg-[#0d0d16] bg-white">21 – 50 chambres</option>
                      <option value="51-100" className="dark:bg-[#0d0d16] bg-white">51 – 100 chambres</option>
                      <option value="100+" className="dark:bg-[#0d0d16] bg-white">100+ chambres</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium dark:text-white/50 text-[#1a1a2e]/55 mb-1.5 uppercase tracking-wide">
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Dites-nous en plus sur vos besoins, vos enjeux actuels ou vos questions sur la solution…"
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi en cours…
                      </>
                    ) : (
                      "Demander une démonstration gratuite →"
                    )}
                  </button>

                  <p className="text-center text-xs dark:text-white/25 text-[#1a1a2e]/35">
                    Aucune carte bancaire requise · Réponse sous 48h · Données protégées RGPD
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
