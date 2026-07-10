import { experience } from "../constants/experience";
import { Reveal } from "./Reveal";
import { TiltWrapper } from "./TiltWrapper";

export const Experience = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8" id="experience">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <Reveal className="text-center mb-16">
          <span className="section-label">Career</span>
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading">
            Hands-on full-stack development across fintech, e-commerce, and SaaS products,
            building production systems from REST APIs to role-based frontends.
          </p>
        </Reveal>

        <div className="relative flex flex-col gap-10 md:gap-14">
          <div className="absolute left-[7px] top-4 bottom-4 w-px bg-gradient-to-b from-[#aa367c]/60 via-[#4a2fbd]/40 to-transparent" />

          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 120}>
              <div className="relative pl-10">
                <div className="absolute left-0 top-8 w-[15px] h-[15px] rounded-full bg-brand-gradient ring-4 ring-[#0a0a0f]" />

                <TiltWrapper tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1200} scale={1.005} transitionSpeed={800}>
                  <div className="glass card-shine rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-white/15 hover:-translate-y-1" data-cursor-hover>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-start">
                        {job.period}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full glass text-zinc-400">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-0.5">
                      {job.role}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-5">
                      {job.company} · {job.location}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {job.highlights.map((point) => (
                        <li key={point} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
                          <span className="text-brand-start mt-1.5 shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full glass text-zinc-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltWrapper>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
