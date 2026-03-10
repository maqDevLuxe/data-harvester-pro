import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const ApiCounters = () => {
  const { ref, isVisible } = useScrollReveal();
  const requests = useCountUp(847, 2500, isVisible);
  const customers = useCountUp(12, 2500, isVisible);
  const dataPoints = useCountUp(42, 2500, isVisible);
  const countries = useCountUp(195, 2500, isVisible);

  return (
    <section className="py-24" ref={ref}>
      <div className="section-container">
        <div className="glass rounded-2xl p-12 glow-border animate-pulse-glow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: `${requests}M+`, label: "API Requests / Month" },
              { value: `${customers}K+`, label: "Developers" },
              { value: `${dataPoints}B+`, label: "Data Points Extracted" },
              { value: `${countries}`, label: "Countries Covered" },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono gradient-text-cyan">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiCounters;
