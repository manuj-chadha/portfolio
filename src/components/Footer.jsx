import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const socialLinks = [
  { href: "https://www.linkedin.com/in/manuj-chadha", icon: navIcon1, label: "LinkedIn" },
  { href: "https://github.com/manuj-chadha", icon: navIcon2, label: "GitHub" },
  { href: "https://www.instagram.com/manuuujjjjjj", icon: navIcon3, label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#08080d] py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-2xl font-bold text-white mb-1">
              Manuj Chadha
            </h2>
            <p className="text-zinc-500 text-sm">Full-Stack Developer</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center group hover:border-white/20 transition-all duration-300 hover:scale-110"
              >
                <img src={item.icon} alt="" className="w-[18px] opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <p className="text-sm text-zinc-600 text-center lg:text-right">
            Made with love ♥︎
            <br />
            &copy; {new Date().getFullYear()} Manuj Chadha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
