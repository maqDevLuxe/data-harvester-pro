import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Auto-scaling infrastructure handles any load spike",
  "Multi-region deployment with edge caching",
  "99.99% uptime SLA on Enterprise plans",
  "Real-time monitoring dashboard",
  "Automatic failover and retry logic",
  "Dedicated support with <1hr response time",
];

const Scalability = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="status" className="py-24" ref={ref}>
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        <div className={`space-y-8 opacity-0 ${isVisible ? "animate-slide-in-left" : ""}`}>
          <div className="space-y-4">
            <p className="text-sm font-mono text-primary uppercase tracking-widest">Infrastructure</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Enterprise-grade <span className="gradient-text">reliability</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Built on a globally distributed infrastructure designed to handle billions of requests
              without breaking a sweat.
            </p>
          </div>

          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-secondary-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Uptime visualization */}
        <div className={`opacity-0 ${isVisible ? "animate-slide-in-right" : ""}`}>
          <div className="glass rounded-2xl p-8 glow-border space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground">System Status</span>
              <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                All Systems Operational
              </span>
            </div>
            <div className="space-y-3">
              {["API Endpoints", "Proxy Network", "Dashboard", "Webhooks"].map((s) => (
                <div key={s} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{s}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-6 rounded-sm bg-primary/60"
                        style={{ opacity: 0.4 + Math.random() * 0.6 }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center">Last 30 days — 99.99% uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scalability;
