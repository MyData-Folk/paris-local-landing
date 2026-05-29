import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_parislocal";
const EMAILJS_TEMPLATE_ID = "template_demo_req";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type Status = "idle" | "loading" | "success" | "error";

const benefits = [
  "Démo personnalisée orientée hôtel parisien",
  "Audit rapide des points de contact client : chambre, réception, petit-déjeuner",
  "Exemple de pancarte NFC + QR code",
  "Scénario CRM : collecte email/téléphone et offres ciblées",
  "Scénario opérationnel : demandes housekeeping et réception",
];

const roomsOptions = ["Moins de 20 chambres", "20 à 50 chambres", "50 à 100 chambres", "Plus de 100 chambres", "Groupe multi-hôtels"];

const priorityChips = [
  "Collecter les emails et téléphones clients pour mon CRM",
  "Réduire les appels et questions répétitives à la réception",
  "Mieux suivre les demandes housekeeping",
  "Créer des revenus via partenaires locaux et commissions",
];

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ from_name: "", reply_to: "", hotel_name: "", phone: "", rooms: "", message: "" });

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
    <section id="contact" className="relative py-28 lg:py-36 bg-[#0a0a0f]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-[800px] h-[500px] rounded-full bg-[#c9a84c]/6 blur-[200px]" /></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="badge-gold mb-5 inline-flex">Démo de lancement</span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Préparez votre hôtel pour le <span className="text-gold-gradient">1er juin 2026</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Demandez une présentation personnalisée : nous vous montrons comment Paris Local peut collecter des contacts CRM, réduire les demandes répétitives et optimiser le suivi housekeeping.
          </p>
        </div>

        <div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 p-8 lg:p-12 bg-gradient-to-br from-[#c9a84c]/10 via-transparent to-transparent border-b lg:border-b-0 lg:border-r border-white/8">
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">Ce que nous préparons ensemble</h3>
              <ul className="space-y-4 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#c9a84c]/18 border border-[#c9a84c]/35 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-[#c9a84c] text-[10px] font-bold">✓</span></div>
                    <span className="text-white/65 text-sm leading-snug">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 mb-7">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Contact direct</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5"><span className="text-[#c9a84c] text-sm">✉</span><a href="mailto:admin@e-hotelmanager.com" className="text-white/55 text-sm hover:text-white transition-colors animated-underline">admin@e-hotelmanager.com</a></div>
                  <div className="flex items-center gap-2.5"><span className="text-[#c9a84c] text-sm">☎</span><a href="tel:+33672590479" className="text-white/55 text-sm hover:text-white transition-colors animated-underline">+33 (0)6 72 59 04 79</a></div>
                  <div className="flex items-center gap-2.5"><span className="text-[#c9a84c] text-sm">📍</span><span className="text-white/35 text-xs">Paris et Île-de-France</span></div>
                </div>
              </div>

              <p className="text-white/30 text-xs leading-relaxed">
                Note : le formulaire nécessite la configuration de votre clé EmailJS en production. Vous pouvez aussi diriger les demandes vers l'email direct ci-dessus.
              </p>
            </div>

            <div className="lg:col-span-3 p-8 lg:p-12">
              {status === "success" ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center mb-6"><span className="text-3xl">🎉</span></div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-3">Demande envoyée !</h3>
                  <p className="text-white/45 text-sm max-w-sm leading-relaxed mb-6">Votre demande a bien été reçue. Nous vous recontactons pour organiser la démonstration.</p>
                  <button onClick={() => setStatus("idle")} className="text-[#c9a84c] text-sm hover:text-[#e8c97a] transition-colors underline underline-offset-2">Envoyer une autre demande</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                    <h3 className="font-semibold text-white text-lg">Demander ma démo Paris Local</h3>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                      Formulaire rapide · 30 secondes
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="text-white/40 text-xs mb-1.5 block font-medium tracking-wide uppercase">Votre nom *</label><input required type="text" name="from_name" value={form.from_name} onChange={handleChange} placeholder="Votre nom" className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 transition-all duration-200" /></div>
                    <div><label className="text-white/40 text-xs mb-1.5 block font-medium tracking-wide uppercase">Email professionnel *</label><input required type="email" name="reply_to" value={form.reply_to} onChange={handleChange} placeholder="direction@monhotel.fr" className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 transition-all duration-200" /></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="text-white/40 text-xs mb-1.5 block font-medium tracking-wide uppercase">Nom de votre hôtel *</label><input required type="text" name="hotel_name" value={form.hotel_name} onChange={handleChange} placeholder="Hôtel exemple Paris" className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 transition-all duration-200" /></div>
                    <div><label className="text-white/40 text-xs mb-1.5 block font-medium tracking-wide uppercase">Téléphone</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+33 6 ..." className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 transition-all duration-200" /></div>
                  </div>

                  <div>
                    <label className="text-white/40 text-xs mb-1.5 block font-medium tracking-wide uppercase">Taille de l'établissement</label>
                    <select name="rooms" value={form.rooms} onChange={handleChange} className="w-full bg-[#11111a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm transition-all duration-200">
                      <option value="">Sélectionner</option>
                      {roomsOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <label className="text-white/40 text-xs block font-medium tracking-wide uppercase">Votre priorité</label>
                      <span className="text-white/25 text-[11px]">1 clic pour pré-remplir</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                      {priorityChips.map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => setForm({ ...form, message: chip })}
                          className={`text-left rounded-xl border px-3 py-2.5 text-xs leading-snug transition-all duration-200 ${
                            form.message === chip
                              ? "border-[#c9a84c]/55 bg-[#c9a84c]/10 text-[#e8c97a]"
                              : "border-white/10 bg-white/[0.03] text-white/45 hover:border-[#c9a84c]/30 hover:text-white/70"
                          }`}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Ajoutez un détail si besoin : nombre d'hôtels, besoins CRM, réception, housekeeping, partenariats locaux..." className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 transition-all duration-200 resize-none" />
                  </div>

                  {status === "error" && <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-300 text-sm">Le formulaire n'est pas encore configuré. Contactez-nous directement par email ou téléphone.</div>}

                  <button type="submit" disabled={status === "loading"} className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-xl shadow-[#c9a84c]/20 disabled:opacity-60">
                    {status === "loading" ? "Envoi en cours..." : "Réserver ma démo de lancement"}
                  </button>

                  <p className="text-white/25 text-xs leading-relaxed">En envoyant ce formulaire, vous acceptez d'être recontacté au sujet de Paris Local. Les données transmises servent uniquement à traiter votre demande commerciale.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
