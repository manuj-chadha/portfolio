import { useEffect, useState } from "react";

const getEffects = () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = !window.matchMedia("(pointer: fine)").matches;
  const enabled = !reducedMotion && !coarsePointer;

  return {
    effectsEnabled: enabled,
    enableCursor: enabled,
    enableTilt: enabled,
    enableSpotlight: enabled,
    enableMagnetic: enabled,
    enableParticles: !reducedMotion,
    enableFloatingTags: enabled,
  };
};

export const useEffectsEnabled = () => {
  const [effects, setEffects] = useState(getEffects);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setEffects(getEffects());
      document.body.classList.toggle("performance-lite", reducedMotion.matches);
    };
    reducedMotion.addEventListener("change", update);
    update();
    return () => reducedMotion.removeEventListener("change", update);
  }, []);

  return effects;
};
