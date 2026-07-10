import { useRef } from "react";
import { useEffectsEnabled } from "../hooks/useEffectsEnabled";

export const MagneticButton = ({ children, className = "", href, onClick, ...props }) => {
  const ref = useRef(null);
  const raf = useRef(null);
  const { enableMagnetic } = useEffectsEnabled();

  const handleMove = (e) => {
    if (!enableMagnetic) return;
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = null;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const Tag = href ? "a" : "button";

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={enableMagnetic ? handleMove : undefined}
      onMouseLeave={enableMagnetic ? handleLeave : undefined}
      className={`inline-block will-change-transform ${className}`}
      data-cursor-hover
      {...props}
    >
      {children}
    </Tag>
  );
};
