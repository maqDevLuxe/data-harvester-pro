import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Braces, Globe, Layers, Cpu, Database, Shield } from "lucide-react";

const features = [
  { icon: Braces, title: "Structured Extraction", desc: "Define schemas and get clean JSON. Our AI parses any page layout automatically." },
  { icon: Globe, title: "JavaScript Rendering", desc: "Full headless browser rendering. Handle SPAs, infinite scroll, and dynamic content." },
  { icon: Layers, title: "Batch Processing", desc: "Submit thousands of URLs in a single request. Parallel processing with smart queuing." },
  { icon: Cpu, title: "AI-Powered Parsing", desc: "Machine learning models understand page structure without brittle CSS selectors." },
  { icon: Database, title: "Data Pipelines", desc: "Stream results directly to S3, BigQuery, or webhooks. Built-in deduplication." },
  { icon: Shield, title: "Compliance Built-in", desc: "Automatic robots.txt respect, rate limiting, and GDPR-compliant data handling." },
];

const Features = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="features" className="py-24 relative" ref={ref}>
      <div className="section-container space-y-16">
        <div className="text-center space-y-4">
          <p className="text-sm font-mono text-primary uppercase tracking-widest">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Everything you need to <span className="gradient-text-cyan">extract data</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`metric-card space-y-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
