import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 2000, enabled = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let start = 0;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, duration, enabled]);

  return count;
}
