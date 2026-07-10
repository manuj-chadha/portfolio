import { useEffect, useRef, useState } from "react";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = null;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[10000] pointer-events-none">
      <div
        className="h-full w-full bg-brand-gradient origin-left"
        style={{ transform: `scaleX(${progress / 100})`, transition: "transform 0.1s linear" }}
      />
    </div>
  );
};
