import { useTypingEffect } from "@/hooks/useTypingEffect";
import { ArrowRight, Play } from "lucide-react";

const codeText = `import scrapeflow

client = scrapeflow.Client("sk_live_...")

# Extract product data at scale
result = client.extract(
    url="https://example.com/products",
    schema={
        "name": "string",
        "price": "float",
        "rating": "float",
        "reviews": "int"
    },
    render_js=True,
    bypass_antibots=True
)

print(f"Extracted {len(result.data)} items")
# → Extracted 2,847 items in 1.2s`;

const Hero = () => {
  const { displayed, done } = useTypingEffect(codeText, 25, 500);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(168 80% 50% / 0.3), transparent 70%)" }} />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, hsl(260 60% 58% / 0.3), transparent 70%)" }} />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            v3.2 — Now with AI-powered extraction
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Extract Any Data.{" "}
            <span className="gradient-text-cyan">At Any Scale.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            The most powerful web scraping API built for developers. Bypass anti-bot systems,
            render JavaScript, and extract structured data with a single API call.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2 text-base">
              Get Free API Key <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary flex items-center gap-2 text-base">
              <Play className="w-4 h-4" /> Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 10K free requests/mo
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 99.9% uptime
            </span>
          </div>
        </div>

        {/* Right — Terminal */}
        <div className="terminal-window animate-float">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2 text-xs font-mono text-muted-foreground">extract.py</span>
          </div>
          <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto text-secondary-foreground min-h-[380px]">
            <code>
              {displayed}
              {!done && <span className="typing-cursor text-primary">▌</span>}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
