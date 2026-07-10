import { useState } from "react";
import { Send, Envelope, Linkedin, Github, GeoAlt } from 'react-bootstrap-icons';
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

const contactLinks = [
  { icon: Envelope, label: "Email", value: "manujchadha.prof@gmail.com", href: "mailto:manujchadha.prof@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "manuj-chadha", href: "https://www.linkedin.com/in/manuj-chadha" },
  { icon: Github, label: "GitHub", value: "manuj-chadha", href: "https://github.com/manuj-chadha" },
  { icon: GeoAlt, label: "Location", value: "Rajasthan, India", href: null },
];

const FloatingInput = ({ id, type = "text", value, onChange, label, required, rows, focusedField, setFocusedField }) => {
  const isFocused = focusedField === id;
  const hasValue = value?.length > 0;
  const Tag = rows ? "textarea" : "input";

  return (
    <div className="relative mb-5">
      <Tag
        id={id}
        type={type}
        rows={rows}
        value={value}
        required={required}
        onChange={onChange}
        onFocus={() => setFocusedField(id)}
        onBlur={() => setFocusedField(null)}
        className={`peer w-full bg-white/5 border rounded-xl text-white px-4 pt-6 pb-2 font-medium text-[15px] transition-all duration-300 outline-none resize-none ${
          isFocused
            ? "border-white/30 shadow-[0_0_24px_rgba(255,255,255,0.06)] bg-white/[0.08]"
            : "border-white/10 hover:border-white/20"
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue
            ? "top-2 text-[11px] text-brand-start font-semibold uppercase tracking-wider"
            : "top-4 text-[15px] text-zinc-500"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export const Contact = () => {
  const formInitialDetails = {
    firstName: '', lastName: '', email: '', phone: '', message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await fetch("https://portfolio-backend-vulg.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send Message");
      setFormDetails(formInitialDetails);
      setStatus(response.ok
        ? { success: true, message: 'Message sent successfully!' }
        : { success: false, message: 'Something went wrong. Please try again.' }
      );
    } catch {
      setButtonText("Send Message");
      setStatus({ success: false, message: 'Network error. Please try again later.' });
    }
  };

  return (
    <section className="relative py-24 overflow-hidden" id="connect">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 bg-brand-gradient opacity-[0.12]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#aa367c]/20 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#4a2fbd]/20 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <Reveal className="text-center mb-14">
          <span className="section-label">Contact</span>
          <h2 className="section-heading">Let's Work Together</h2>
          <p className="section-subheading">
            Have a project in mind or want to collaborate? Drop a message, and I'd love to hear from you.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-5 sm:gap-6">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center gap-4 p-5 rounded-xl glass transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] group" data-cursor-hover>
                    <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-gradient transition-colors">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} className="block">{inner}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal direction="right" delay={100} className="lg:col-span-3">
            <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.3)]">
              <h3 className="font-display text-2xl font-bold text-white mb-1">Send a Message</h3>
              <p className="text-zinc-500 text-sm mb-8">Fill out the form and I'll get back to you soon.</p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <FloatingInput
                    id="firstName"
                    label="First Name"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    required
                    focusedField={focusedField}
                    setFocusedField={setFocusedField}
                  />
                  <FloatingInput
                    id="lastName"
                    label="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    required
                    focusedField={focusedField}
                    setFocusedField={setFocusedField}
                  />
                  <FloatingInput
                    id="email"
                    type="email"
                    label="Email Address"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    required
                    focusedField={focusedField}
                    setFocusedField={setFocusedField}
                  />
                  <FloatingInput
                    id="phone"
                    type="tel"
                    label="Phone Number"
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                    focusedField={focusedField}
                    setFocusedField={setFocusedField}
                  />
                </div>

                <FloatingInput
                  id="message"
                  label="Your Message"
                  value={formDetails.message}
                  onChange={(e) => onFormUpdate('message', e.target.value)}
                  required
                  rows={4}
                  focusedField={focusedField}
                  setFocusedField={setFocusedField}
                />

                <MagneticButton
                  type="submit"
                  disabled={buttonText === "Sending..."}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold rounded-full px-8 py-3.5 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed ${buttonText === "Sending..." ? "opacity-70" : ""}`}
                >
                  <Send size={16} />
                  {buttonText}
                </MagneticButton>

                {status.message && (
                  <p className={`mt-4 font-medium text-sm animate-fadeInUp ${status.success ? "text-green-400" : "text-red-400"}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
