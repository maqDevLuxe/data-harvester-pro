import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const DataFlow = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="section-container relative z-10 text-center space-y-12">
        <div className="space-y-4">
          <p className="text-sm font-mono text-primary uppercase tracking-widest">Scale</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Massive data flows, <span className="gradient-text">zero complexity</span>
          </h2>
        </div>

        <div className={`max-w-4xl mx-auto opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          {/* Flow visualization */}
          <div className="glass rounded-2xl p-8 sm:p-12 glow-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {[
                { label: "Sources", sub: "Any Website", color: "bg-primary/20 text-primary" },
                { label: "ScrapeFlow", sub: "Process & Extract", color: "bg-accent/20 text-accent" },
                { label: "Your App", sub: "Clean JSON Data", color: "bg-primary/20 text-primary" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-4 sm:gap-6">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl ${step.color} flex flex-col items-center justify-center`}>
                    <span className="text-sm font-bold">{step.label}</span>
                    <span className="text-[10px] opacity-70">{step.sub}</span>
                  </div>
                  {i < 2 && <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
              {[
                { v: "2.1B+", l: "Pages Crawled" },
                { v: "847TB", l: "Data Processed" },
                { v: "<200ms", l: "Avg Latency" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold font-mono gradient-text-cyan">{s.v}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataFlow;
