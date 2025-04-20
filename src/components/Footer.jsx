import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer
      className="py-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./src/assets/img/footer-bg.png')" }}
    >
      <div className="container mx-auto py-6">
        <div className="flex flex-col relative gap-10 lg:flex-row justify-between items-center">

          {/* Left: Newsletter */}
          <div className="w-full flex absolute -top-36 rounded-xl justify-center lg:justify-center">
            <MailchimpForm />
          </div>

          <div className="mt-42 lg:mt-36 flex flex-col lg:flex-row w-full justify-between items-center0">
            {/* Center: Name or Logo */}
          <div className="w-full lg:w-fit text-center">
            <h1 className="text-white text-2xl font-bold lg:text-start mb-2">Manuj Chadha</h1>
            {/* <img src={logo} alt="Manuj Chadha" className="mx-auto w-24" /> */}
          </div>

          {/* Right: Social Links & Copyright */}
          <div className="w-full flex flex-col justify-center items-center lg:w-fit text-center lg:text-right">
            <div className="flex justify-center lg:justify-end gap-4 mb-4">
              <a href="https://www.linkedin.com/in/manuj-chadha">
                <img src={navIcon1} alt="LinkedIn" className="w-6 hover:scale-110 transition" />
              </a>
              <a href="https://github.com/manuj-chadha">
                <img src={navIcon2} alt="GitHub" className="w-6 hover:scale-110 transition" />
              </a>
              <a href="https://www.instagram.com/manuuujjjjjj">
                <img src={navIcon3} alt="Instagram" className="w-6 hover:scale-110 transition" />
              </a>
            </div>
            <p className="text-sm text-gray-400 tracking-wide leading-relaxed">
              Made with ♡<br />
              Copyright 2025. All Rights Reserved
            </p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
