import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, Fingerprint, RotateCcw, Eye } from "lucide-react";

const techs = [
  { icon: ShieldCheck, title: "CAPTCHA Solving", desc: "Automated solving for reCAPTCHA, hCaptcha, and Cloudflare Turnstile." },
  { icon: Fingerprint, title: "Browser Fingerprinting", desc: "Rotate realistic browser fingerprints to avoid detection patterns." },
  { icon: RotateCcw, title: "IP Rotation", desc: "60M+ residential and datacenter proxies across 195 countries." },
  { icon: Eye, title: "Stealth Mode", desc: "Undetectable headless browsers with human-like behavior simulation." },
];

const AntiBot = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 opacity-5"
        style={{ background: "radial-gradient(ellipse at center, hsl(168 80% 50%), transparent 70%)" }} />
      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-sm font-mono text-primary uppercase tracking-widest">Anti-Bot Bypass</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Bypass any <span className="gradient-text">protection system</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our proprietary bypass engine handles Cloudflare, Akamai, PerimeterX, DataDome, and every
            major anti-bot solution—automatically.
          </p>
          <div className="glass rounded-xl p-4 font-mono text-sm">
            <span className="text-muted-foreground"># Success rates</span><br />
            <span className="text-primary">Cloudflare</span>: 99.8% &nbsp;
            <span className="text-primary">Akamai</span>: 99.5%<br />
            <span className="text-primary">DataDome</span>: 99.2% &nbsp;
            <span className="text-primary">PerimeterX</span>: 99.4%
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {techs.map((t, i) => (
            <div
              key={t.title}
              className={`metric-card space-y-3 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <t.icon className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-foreground">{t.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AntiBot;
