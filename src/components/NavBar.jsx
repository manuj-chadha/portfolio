import { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
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
      <nav className={`fixed top-0 w-full z-[9999] transition-all duration-300 ease-in-out ${scrolled ? "bg-[#121212] py-0" : "py-1"} px-4`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-white font-bold text-3xl max-md:text-2xl">
            Manuj Chadha
          </a>

          {/* Toggler for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="text-white focus:outline-none relative w-6 h-4"
            >
              <span className={`block w-full h-[2px] bg-white absolute transition-transform duration-300 ease-in-out ${toggleMenu ? "rotate-45 top-2" : "top-0"}`}></span>
              <span className={`block w-full h-[2px] bg-white absolute transition-transform duration-300 ease-in-out ${toggleMenu ? "-rotate-45 top-2" : "top-[8px]"}`}></span>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`items-center gap-6 ${
              toggleMenu ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-[#121212] md:bg-transparent px-4 md:px-0 py-4 md:py-0 z-[9998]`}
          >
            <a
              href="#home"
              onClick={() => onUpdateActiveLink('home')}
              className={`text-lg font-medium transition-opacity duration-200 ${activeLink === 'home' ? 'text-white opacity-100' : 'text-white opacity-75 hover:opacity-100'}`}
            >
              Home
            </a>
            <a
              href="#skills"
              onClick={() => onUpdateActiveLink('skills')}
              className={`text-lg font-medium transition-opacity duration-200 ${activeLink === 'skills' ? 'text-white opacity-100' : 'text-white opacity-75 hover:opacity-100'}`}
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => onUpdateActiveLink('projects')}
              className={`text-lg font-medium transition-opacity duration-200 ${activeLink === 'projects' ? 'text-white opacity-100' : 'text-white opacity-75 hover:opacity-100'}`}
            >
              Projects
            </a>

            {/* Social Icons */}
            <div className="flex items-center md:ml-6 gap-2">
              {[{
                href: "https://www.linkedin.com/in/manuj-chadha",
                icon: navIcon1
              }, {
                href: "https://github.com/manuj-chadha",
                icon: navIcon2
              }, {
                href: "https://www.instagram.com/manuuujjjjjj",
                icon: navIcon3
              }].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative w-[42px] h-[42px] group-hover:text-black rounded-full bg-white/10 border border-white/50 flex items-center justify-center overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out rounded-full z-0" />
                  <img src={item.icon} alt="" className="max-w-[40%] z-10 relative transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Button */}
            <HashLink to="#connect" className="ml-4">
              <button className="relative border border-white text-white font-bold text-lg px-3 py-3 group-hover:rounded-xl overflow-hidden group">
                <span className="z-[1] relative group-hover:text-black">Let’s Connect</span>
                <span className="absolute left-0 top-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full z-[-1]"></span>
              </button>
            </HashLink>
          </div>
        </div>
      </nav>
    </Router>
  );
};
