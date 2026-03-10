import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShoppingCart, Building2, BarChart3, Newspaper } from "lucide-react";

const cases = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Intelligence",
    desc: "Monitor competitor pricing, track product availability, and aggregate reviews across thousands of stores in real-time.",
    stats: "2.4M products tracked daily",
  },
  {
    icon: Building2,
    title: "Real Estate Data",
    desc: "Aggregate property listings, pricing trends, and market analytics from every major real estate platform.",
    stats: "850K listings indexed",
  },
  {
    icon: BarChart3,
    title: "Financial Data",
    desc: "Extract earnings reports, SEC filings, and market sentiment data for quantitative analysis pipelines.",
    stats: "15K reports processed/hr",
  },
  {
    icon: Newspaper,
    title: "News & Media Monitoring",
    desc: "Track brand mentions, sentiment analysis, and breaking news across global media outlets.",
    stats: "500K articles/day",
  },
];

const UseCases = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24" ref={ref}>
      <div className="section-container space-y-16">
        <div className="text-center space-y-4">
          <p className="text-sm font-mono text-primary uppercase tracking-widest">Use Cases</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Powering data for <span className="gradient-text-cyan">every industry</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`metric-card space-y-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">{c.stats}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
