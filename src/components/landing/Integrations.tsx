import { useScrollReveal } from "@/hooks/useScrollReveal";

const integrations = [
  { name: "Python", icon: "🐍", color: "from-blue-500/20 to-yellow-500/20" },
  { name: "Node.js", icon: "⬢", color: "from-green-500/20 to-green-700/20" },
  { name: "Go", icon: "🔷", color: "from-cyan-500/20 to-blue-500/20" },
  { name: "Ruby", icon: "💎", color: "from-red-500/20 to-red-700/20" },
  { name: "PHP", icon: "🐘", color: "from-indigo-500/20 to-purple-500/20" },
  { name: "cURL", icon: "⟩_", color: "from-gray-500/20 to-gray-700/20" },
];

const Integrations = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="section-container text-center space-y-12">
        <div className="space-y-4">
          <p className="text-sm font-mono text-primary uppercase tracking-widest">Integrations</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Works with your <span className="gradient-text">favorite stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Official SDKs and libraries for every major language. Get started in under 5 minutes.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((item, i) => (
            <div
              key={item.name}
              className={`metric-card text-center space-y-3 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}>
                {item.icon}
              </div>
              <p className="font-semibold text-sm text-foreground">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
