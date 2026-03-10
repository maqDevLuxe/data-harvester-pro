import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO @ DataStack",
    text: "ScrapeFlow replaced our entire scraping infrastructure. We went from managing 50 scrapers to a single API call. Our data pipeline costs dropped 80%.",
    avatar: "SC",
  },
  {
    name: "Marcus Rivera",
    role: "Lead Engineer @ PriceWatch",
    text: "The anti-bot bypass is genuinely magical. Sites that blocked every other tool we tried just work with ScrapeFlow. 99.8% success rate isn't marketing—it's real.",
    avatar: "MR",
  },
  {
    name: "Yuki Tanaka",
    role: "Data Scientist @ PropTech AI",
    text: "We extract 2M real estate listings daily. The AI parsing means we spend zero time maintaining selectors. When sites redesign, our pipeline doesn't break.",
    avatar: "YT",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24" ref={ref}>
      <div className="section-container space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-mono text-primary uppercase tracking-widest">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Loved by <span className="gradient-text-cyan">developers</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`metric-card space-y-5 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-secondary-foreground leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
