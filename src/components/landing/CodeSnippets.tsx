import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const snippets: Record<string, { lang: string; code: string }> = {
  Python: {
    lang: "python",
    code: "import scrapeflow\n\nclient = scrapeflow.Client(\"sk_live_...\")\n\n# Simple extraction\ndata = client.extract(\n    url=\"https://store.example.com\",\n    schema={\"title\": \"str\", \"price\": \"float\"}\n)\n\nfor item in data.results:\n    print(f\"{item.title}: ${item.price}\")",
  },
  "Node.js": {
    lang: "javascript",
    code: `const ScrapeFlow = require('scrapeflow');

const client = new ScrapeFlow('sk_live_...');

// Simple extraction
const { results } = await client.extract({
  url: 'https://store.example.com',
  schema: { title: 'string', price: 'number' }
});

results.forEach(item => 
  console.log(\`\${item.title}: $\${item.price}\`)
);`,
  },
  cURL: {
    lang: "bash",
    code: `curl -X POST https://api.scrapeflow.dev/v3/extract \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://store.example.com",
    "schema": {
      "title": "string",
      "price": "number"
    },
    "render_js": true
  }'`,
  },
  Go: {
    lang: "go",
    code: `package main

import "github.com/scrapeflow/scrapeflow-go"

func main() {
    client := scrapeflow.New("sk_live_...")
    
    result, _ := client.Extract(scrapeflow.Request{
        URL: "https://store.example.com",
        Schema: map[string]string{
            "title": "string",
            "price": "float",
        },
    })
    
    for _, item := range result.Data {
        fmt.Printf("%s: $%.2f\\n", item["title"], item["price"])
    }
}`,
  },
};

const tabs = Object.keys(snippets);

const CodeSnippets = () => {
  const [active, setActive] = useState("Python");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="docs" className="py-24" ref={ref}>
      <div className="section-container space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-mono text-primary uppercase tracking-widest">Quick Start</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Three lines to <span className="gradient-text">first extraction</span>
          </h2>
        </div>

        <div className={`terminal-window max-w-3xl mx-auto opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <div className="flex items-center border-b border-border">
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex ml-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`code-tab ${active === tab ? "active" : ""}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-secondary-foreground">
            <code>{snippets[active].code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default CodeSnippets;
