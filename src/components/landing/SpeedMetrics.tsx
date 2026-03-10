import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { Gauge, Clock, Zap, Server } from "lucide-react";

const SpeedMetrics = () => {
  const { ref, isVisible } = useScrollReveal();
  const latency = useCountUp(120, 2000, isVisible);
  const throughput = useCountUp(50, 2000, isVisible);
  const uptime = useCountUp(999, 2000, isVisible);
  const regions = useCountUp(12, 2000, isVisible);

  const metrics = [
    { icon: Clock, value: `${latency}ms`, label: "Avg Response Time", sub: "P99 < 500ms" },
    { icon: Zap, value: `${throughput}K`, label: "Requests/Second", sub: "Per account" },
    { icon: Gauge, value: `${(uptime / 10).toFixed(1)}%`, label: "Uptime SLA", sub: "Last 12 months" },
    { icon: Server, value: `${regions}`, label: "Edge Regions", sub: "Global coverage" },
  ];

  return (
    <section className="py-24" ref={ref}>
      <div className="section-container space-y-16">
        <div className="text-center space-y-4">
          <p className="text-sm font-mono text-primary uppercase tracking-widest">Performance</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Built for <span className="gradient-text-cyan">speed</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`metric-card text-center space-y-3 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <m.icon className="w-8 h-8 text-primary mx-auto" />
              <p className="text-3xl font-bold font-mono gradient-text-cyan">{m.value}</p>
              <p className="font-semibold text-sm text-foreground">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeedMetrics;
