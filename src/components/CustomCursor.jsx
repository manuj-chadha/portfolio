import { useEffect, useRef } from "react";
import { useEffectsEnabled } from "../hooks/useEffectsEnabled";

export const CustomCursor = () => {
  const { enableCursor } = useEffectsEnabled();
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);

  useEffect(() => {
    if (!enableCursor) return;

    document.body.classList.add("custom-cursor-active");

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e) => {
      hovering.current = !!e.target.closest("a, button, [data-cursor-hover]");
    };

    let rafId;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;

      const transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      const size = hovering.current ? 48 : 32;

      if (ringRef.current) {
        ringRef.current.style.transform = transform;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.opacity = hovering.current ? "0.7" : "0.45";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = transform;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, [enableCursor]);

  if (!enableCursor) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[10001] hidden lg:block rounded-full border-2 border-[#aa367c] will-change-transform"
        style={{ width: 32, height: 32, boxShadow: "0 0 20px rgba(170,54,124,0.25)" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10001] hidden lg:block w-1.5 h-1.5 rounded-full bg-white will-change-transform"
      />
    </>
  );
};
