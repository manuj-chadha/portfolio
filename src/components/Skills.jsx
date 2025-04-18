import { SkillsInfo } from "../constants";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="container mx-auto">
        <div className="text-center my-12 sm:my-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Skills</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Proficient in Spring Boot, React, and MongoDB, with a strong foundation in Data Structures & Algorithms and experience in the MERN stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 px-2 sm:px-4 md:px-12">
          {SkillsInfo.map((category) => (
            <div key={category.title} className="rounded-2xl p-4 shadow-md">
              <h5 className="text-lg sm:text-xl font-semibold text-center mb-4 text-gray-700">{category.title}</h5>
              <div className="grid grid-cols-3 gap-4 items-center justify-items-center px-4 sm:px-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center text-center">
                    <img
                      loading="lazy"
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 object-contain mb-1"
                    />
                    <p className="text-xs sm:text-sm text-gray-600">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        className="absolute left-0 bottom-0 w-1/2 sm:w-1/3 opacity-20 pointer-events-none"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
