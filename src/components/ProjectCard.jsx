import { ArrowUpRight } from "react-bootstrap-icons";
import { Reveal } from "./Reveal";
import { TiltWrapper } from "./TiltWrapper";

export const ProjectCard = ({ title, description, url, imgUrl, tags = [], index = 0 }) => {
  return (
    <Reveal delay={index * 100} direction="up" className="h-full">
      <TiltWrapper
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1000}
        scale={1.01}
        transitionSpeed={900}
        className="h-full"
      >
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col h-full min-h-[420px] glass rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.35),0_0_40px_rgba(170,54,124,0.08)]"
          data-cursor-hover
        >
          <div className="relative h-52 shrink-0 overflow-hidden">
            <img
              src={imgUrl}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent opacity-80" />
            <span className="absolute top-4 left-4 text-xs font-bold text-white/40 font-display">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
              <ArrowUpRight size={16} className="text-white" />
            </span>
          </div>

          <div className="flex flex-col flex-1 p-5 sm:p-6">
            <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 flex-1 mb-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-500 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </TiltWrapper>
    </Reveal>
  );
};
