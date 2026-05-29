import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        size: Math.random() * 2 + 0.5,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1e] to-[#0a0a14]" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#c9a84c]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/3 blur-[100px] pointer-events-none" />

      {/* Animated particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/5 text-[#c9a84c] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
          SaaS B2B · Multi-tenant · Paris Hospitality Tech
        </div>

        {/* Heading */}
        <h1 className="font-['Playfair_Display',serif] text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Le{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8c97a]">
            concierge digital
          </span>
          <br />
          que vos clients attendaient
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Paris Local transforme l'expérience client de votre hôtel : accueil par QR code, messagerie
          temps réel, recommandations locales personnalisées, et tableau de bord réception centralisé.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#cta"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] text-[#0a0a0f] font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-lg shadow-[#c9a84c]/20"
          >
            Demander une démo gratuite
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-xl border border-white/15 text-white/80 hover:bg-white/5 hover:border-white/30 font-medium text-base transition-all duration-200"
          >
            Découvrir les fonctionnalités →
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "< 5 min", label: "Onboarding hôtel" },
            { value: "QR Code", label: "Accès client instantané" },
            { value: "Temps réel", label: "Messagerie Socket.IO" },
            { value: "Multi-hôtels", label: "Architecture SaaS" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/3 border border-white/8 rounded-xl p-4 backdrop-blur-sm"
            >
              <div className="text-[#c9a84c] font-semibold text-lg font-['Playfair_Display',serif]">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-white/30 text-xs">
          <span>Découvrir</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c]/40 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}
