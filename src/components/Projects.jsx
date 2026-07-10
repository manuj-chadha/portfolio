import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/next-career.png";
import projImg2 from "../assets/img/reflect.png";
import projImg3 from "../assets/img/syncly.png";
import weather from "../assets/img/weather.png";
import tasvee from "../assets/img/tasvee.png";
import reckls from "../assets/img/reckls.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Reveal } from "./Reveal";

const tabs = [
  { id: "main", label: "Main Projects" },
  { id: "small", label: "Small Projects" },
];

const projectsMain = [
  {
    title: "Next Career",
    description: "Job portal with Spring Boot APIs, JWT & Google OAuth2, infinite scroll, and a Gemini-powered career chatbot.",
    url: "https://next-career-ten.vercel.app/",
    imgUrl: projImg1,
    tags: ["Spring Boot", "React", "MongoDB"],
  },
  {
    title: "Syncly",
    description: "Real-time collaborative document editor with sub-200ms latency using Next.js, Liveblocks & Clerk.",
    url: "https://syncly-docs.vercel.app/",
    imgUrl: projImg3,
    tags: ["Next.js", "Liveblocks", "Clerk"],
  },
  {
    title: "Reflect",
    description: "Personal journaling app with rich-text editing, autosave, JWT auth, reCAPTCHA & rate limiting.",
    url: "https://reflect-journal-web.vercel.app/",
    imgUrl: projImg2,
    tags: ["Spring Boot", "React", "MongoDB"],
  },
];

const projectsSmall = [
  {
    title: "Atmos",
    description: "Weather dashboard with live API data, city search, geolocation support, and a clean responsive UI for real-time forecasts.",
    url: "https://atmos-murex.vercel.app/",
    imgUrl: weather,
    tags: ["React", "API"],
  },
  {
    title: "Tasvee Design School",
    description: "Website for a design school showcasing courses, programs, and admissions with a clean, modern interface.",
    url: "https://tasvee.com",
    imgUrl: tasvee,
    tags: ["React", "Freelance"],
  },
  {
    title: "Reckls Entertainment",
    description: "Freelance website for an entertainment brand with event showcases, artist profiles, and a bold, media-rich layout built for impact.",
    url: "https://reckls.vercel.app/",
    imgUrl: reckls,
    tags: ["React", "Freelance"],
  },
];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("main");
  const projects = activeTab === "main" ? projectsMain : projectsSmall;

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" id="projects">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Reveal className="text-center mb-12">
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            A collection of creative and technically sound projects spanning web development
            and full-stack engineering.
          </p>
        </Reveal>

        <Reveal delay={100} className="flex justify-center mb-14">
          <div className="inline-flex glass rounded-full p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                data-cursor-hover
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-brand-gradient text-white shadow-lg shadow-purple-500/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch animate-fadeInUp"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>

      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
