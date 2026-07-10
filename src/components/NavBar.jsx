import { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { BrowserRouter as Router } from "react-router-dom";

const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/manuj-chadha", icon: navIcon1, label: "LinkedIn" },
  { href: "https://github.com/manuj-chadha", icon: navIcon2, label: "GitHub" },
  { href: "https://www.instagram.com/manuuujjjjjj", icon: navIcon3, label: "Instagram" },
];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveLink(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setToggleMenu(false);
  };

  return (
    <Router>
      <nav className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${scrolled ? "glass-strong py-3" : "py-5 bg-transparent"} px-4 lg:px-8`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="font-display text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-tight">
            Manuj Chadha
          </a>

          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="md:hidden text-white focus:outline-none relative w-7 h-5"
            aria-label="Toggle menu"
          >
            <span className={`block w-full h-[2px] bg-white absolute transition-all duration-300 ${toggleMenu ? "rotate-45 top-[9px]" : "top-0"}`} />
            <span className={`block w-full h-[2px] bg-white absolute top-[9px] transition-all duration-300 ${toggleMenu ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-full h-[2px] bg-white absolute transition-all duration-300 ${toggleMenu ? "-rotate-45 top-[9px]" : "top-[18px]"}`} />
          </button>

          <div
            className={`items-center gap-x-8 ${
              toggleMenu ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto glass-strong md:glass md:!bg-transparent md:!border-0 md:!backdrop-filter-none px-6 md:px-0 py-6 md:py-0 z-[9998] rounded-b-2xl md:rounded-none`}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => onUpdateActiveLink(link.id)}
                className={`relative text-[15px] font-medium transition-colors duration-200 py-1 ${
                  activeLink === link.id
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeLink === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-gradient rounded-full" />
                )}
              </a>
            ))}

            <div className="flex items-center gap-2.5 md:ml-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="relative w-10 h-10 rounded-full glass flex items-center justify-center overflow-hidden group hover:border-white/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-brand-gradient scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                  <img src={item.icon} alt="" className="w-[18px] z-10 relative transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
                </a>
              ))}
            </div>

            <HashLink to="#connect" className="md:ml-2" onClick={() => setToggleMenu(false)}>
              <button className="relative bg-brand-gradient text-white font-semibold text-sm px-5 py-2.5 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]" data-cursor-hover>
                Let's Connect
              </button>
            </HashLink>
          </div>
        </div>
      </nav>
    </Router>
  );
};
