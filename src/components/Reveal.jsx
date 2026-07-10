import { useReveal } from "../hooks/useReveal";

const offsets = {
  up: "translateY(48px)",
  down: "translateY(-48px)",
  left: "translateX(-48px)",
  right: "translateX(48px)",
  scale: "scale(0.92)",
  none: "none",
};

export const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
}) => {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : offsets[direction],
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
};
