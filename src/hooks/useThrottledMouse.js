import { useEffect, useRef } from "react";

export const useThrottledMouse = (callback, enabled = true) => {
  const raf = useRef(null);
  const latest = useRef(null);

  useEffect(() => () => {
    if (raf.current) cancelAnimationFrame(raf.current);
  }, []);

  return (e) => {
    if (!enabled) return;
    latest.current = e;
    if (raf.current) return;

    raf.current = requestAnimationFrame(() => {
      raf.current = null;
      if (latest.current) callback(latest.current);
    });
  };
};
