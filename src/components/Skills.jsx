import { SkillsInfo } from "../constants";
import colorSharp from "../assets/img/color-sharp.png";
import { Reveal } from "./Reveal";
import { TiltWrapper } from "./TiltWrapper";

export const Skills = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Reveal className="text-center mb-16">
          <span className="section-label">Expertise</span>
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="section-subheading">
            Proficient in Spring Boot, React, and MongoDB, with a strong foundation in
            Data Structures & Algorithms and experience in the MERN stack.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SkillsInfo.map((category, catIndex) => (
            <Reveal key={category.title} delay={catIndex * 120}>
              <TiltWrapper
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                perspective={1200}
                scale={1.01}
                transitionSpeed={800}
                className="h-full"
              >
                <div className="group rounded-2xl glass card-shine p-6 sm:p-8 h-full transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:-translate-y-1" data-cursor-hover>
                  <h5 className="font-display text-lg font-semibold text-center mb-6 text-zinc-200">
                    {category.title}
                  </h5>
                  <div className="grid grid-cols-3 gap-5 items-center justify-items-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Reveal key={skill.name} delay={catIndex * 80 + skillIndex * 50} direction="scale">
                        <div className="flex flex-col items-center text-center group/skill">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl glass flex items-center justify-center mb-2 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:border-white/15 group-hover/skill:shadow-[0_0_20px_rgba(170,54,124,0.15)]">
                            <img
                              loading="lazy"
                              src={skill.logo}
                              alt={`${skill.name} logo`}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover/skill:scale-110"
                            />
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-500 group-hover/skill:text-zinc-300 transition-colors">
                            {skill.name}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </TiltWrapper>
            </Reveal>
          ))}
        </div>
      </div>

      <img
        className="absolute left-0 bottom-0 w-1/3 opacity-[0.07] pointer-events-none blur-sm"
        src={colorSharp}
        alt=""
      />
    </section>
  );
};
