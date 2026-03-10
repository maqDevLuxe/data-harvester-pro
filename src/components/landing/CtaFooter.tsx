import { ArrowRight, Zap, Github, Twitter } from "lucide-react";

const footerLinks = {
  Product: ["API Reference", "Pricing", "Status", "Changelog"],
  Developers: ["Documentation", "SDKs", "Community", "GitHub"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Security", "GDPR"],
};

const CtaFooter = () => (
  <>
    {/* CTA */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ background: "radial-gradient(ellipse at center, hsl(168 80% 50%), transparent 60%)" }} />
      <div className="section-container relative z-10 text-center space-y-8 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
          Start extracting data <span className="gradient-text-cyan">today</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Get your free API key and make your first extraction in under 2 minutes.
          No credit card required. 10,000 free requests every month.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn-primary flex items-center gap-2 text-base px-8 py-4">
            Get Free API Key <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-secondary flex items-center gap-2 text-base px-8 py-4">
            Read the Docs
          </button>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          $ pip install scrapeflow &nbsp;&nbsp;|&nbsp;&nbsp; $ npm install scrapeflow
        </p>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground">ScrapeFlow</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The developer-first web scraping API. Extract any data, at any scale.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 ScrapeFlow. All rights reserved.</p>
          <p className="text-xs text-muted-foreground font-mono">v3.2.0 • API Status: <span className="text-primary">Operational</span></p>
        </div>
      </div>
    </footer>
  </>
);

export default CtaFooter;
