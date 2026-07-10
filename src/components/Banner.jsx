import { useState, useEffect, useRef } from "react";
import headerImg from "../assets/img/profile-pic.jpg";
import { Download, ArrowUpRight } from 'react-bootstrap-icons';
import { Reveal } from "./Reveal";
import { ParticleGrid } from "./ParticleGrid";
import { FloatingTags } from "./FloatingTags";
import { MagneticButton } from "./MagneticButton";
import { AnimatedCounter } from "./AnimatedCounter";
import { TiltWrapper } from "./TiltWrapper";
import { useEffectsEnabled } from "../hooks/useEffectsEnabled";
import { useThrottledMouse } from "../hooks/useThrottledMouse";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const spotlightRef = useRef(null);
  const { enableSpotlight } = useEffectsEnabled();
  const toRotate = ["Web Developer", "Coder", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) setDelta(prev => prev / 2);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const handleMouseMove = useThrottledMouse((e) => {
    if (!spotlightRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    spotlightRef.current.style.background =
      `radial-gradient(600px circle at ${x}% ${y}%, rgba(170,54,124,0.12), transparent 60%)`;
  }, enableSpotlight);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
      id="home"
      onMouseMove={handleMouseMove}
    >
      <ParticleGrid />

      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(600px circle at 50% 50%, rgba(170,54,124,0.08), transparent 60%)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none hero-glow">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#aa367c]/20 blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#4a2fbd]/20 blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-6 px-4 py-2 rounded-full glass">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4">
                Hi, I'm <span className="text-gradient">Manuj</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-zinc-300 mb-6 h-[1.4em]">
                <span>{text}</span>
                <span className="inline-block w-[3px] h-[0.9em] bg-brand-gradient ml-1 align-middle animate-pulse" />
              </div>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
                A passionate Full-Stack Java Developer skilled in Spring Boot, React, and MongoDB.
                I build dynamic web solutions with a focus on functionality and seamless user experience.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap items-center gap-4 mb-14">
                <MagneticButton
                  href="https://drive.google.com/file/d/1J-D6VE2FS4EqQmIC35glxJzv2h5UECVO/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-gradient text-white font-semibold px-6 py-3 rounded-full transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Download size={18} />
                  Download CV
                </MagneticButton>
                <MagneticButton
                  href="#projects"
                  className="inline-flex items-center gap-2 text-zinc-300 font-medium px-6 py-3 rounded-full glass hover:text-white hover:border-white/20 transition-colors duration-300"
                >
                  View Projects
                  <ArrowUpRight size={16} />
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="grid grid-cols-3 gap-6 max-w-md pt-6 border-t border-white/10">
                <AnimatedCounter end={6} suffix="+" label="Projects" />
                <AnimatedCounter end={15} suffix="+" label="Technologies" />
                <AnimatedCounter end={2} suffix="+" label="Years Exp." />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="scale" delay={200}>
              <div className="flex justify-center relative -mt-4 sm:-mt-6 lg:-mt-12">
                <FloatingTags />
                <TiltWrapper
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={1200}
                  className="relative"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-gradient rounded-full blur-3xl opacity-20 animate-glow-pulse" />
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-br from-[#aa367c] to-[#4a2fbd] animate-updown glow-brand" data-cursor-hover>
                      <img
                        className="w-full h-full rounded-full object-cover border-4 border-[#0a0a0f]"
                        src={headerImg}
                        alt="Manuj Chadha"
                      />
                    </div>
                  </div>
                </TiltWrapper>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
