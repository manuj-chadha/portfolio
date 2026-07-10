import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";

export const AnimatedCounter = ({ end, suffix = "", duration = 1800, label }) => {
  const { ref, visible } = useReveal(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [visible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
        {count}
        <span className="text-gradient">{suffix}</span>
      </p>
      <p className="text-zinc-500 text-sm mt-1">{label}</p>
    </div>
  );
};
