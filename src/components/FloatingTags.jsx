import { useEffectsEnabled } from "../hooks/useEffectsEnabled";

const tags = ["React", "Java", "DSA", "PostgreSQL", "Spring Boot"];

const positions = [
  "top-[8%] right-[5%] animate-float-1",
  "top-[35%] -right-[2%] animate-float-2",
  "bottom-[30%] right-[0%] animate-float-3",
  "bottom-[12%] left-[5%] animate-float-2",
  "top-[20%] left-[0%] animate-float-1",
];

export const FloatingTags = () => {
  const { enableFloatingTags } = useEffectsEnabled();
  if (!enableFloatingTags) return null;

  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
      {tags.map((tag, i) => (
        <span
          key={tag}
          className={`absolute glass text-xs font-medium text-zinc-300 px-3 py-1.5 rounded-full ${positions[i]}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
