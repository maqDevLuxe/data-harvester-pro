import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, BookOpen, FileText, Video } from "lucide-react";

const articles = [
  { type: "Guide", icon: BookOpen, title: "Web Scraping at Scale: Architecture Patterns", date: "Mar 5, 2026", read: "12 min" },
  { type: "Docs", icon: FileText, title: "API Reference v3.2 — What's New", date: "Mar 1, 2026", read: "8 min" },
  { type: "Video", icon: Video, title: "Building a Price Monitoring Pipeline", date: "Feb 28, 2026", read: "15 min" },
];

const BlogPreview = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="blog" className="py-24" ref={ref}>
      <div className="section-container space-y-12">
        <div className="flex items-end justify-between">
          <div className="space-y-4">
            <p className="text-sm font-mono text-primary uppercase tracking-widest">Resources</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Dev blog & <span className="gradient-text-cyan">documentation</span>
            </h2>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm text-primary hover:underline">
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <div
              key={a.title}
              className={`metric-card space-y-4 group cursor-pointer opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-2">
                <a.icon className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono text-primary">{a.type}</span>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{a.title}</h3>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{a.date}</span>
                <span>·</span>
                <span>{a.read} read</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
