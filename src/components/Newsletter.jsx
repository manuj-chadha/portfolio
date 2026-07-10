import { useState, useEffect } from "react";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
    }
  };

  const clearFields = () => setEmail('');

  return (
    <section className="w-full max-w-2xl mx-auto px-4">
      <div className="glass rounded-2xl p-8 sm:p-10 animate-fadeInUp border border-white/10">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
          Stay Updated
        </h3>
        <p className="text-zinc-400 text-sm mb-6">
          Subscribe to the newsletter and never miss the latest updates.
        </p>

        {status === 'sending' && (
          <p className="text-sm text-blue-400 mb-4">Sending...</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-400 mb-4">{message}</p>
        )}
        {status === 'success' && (
          <p className="text-sm text-green-400 mb-4">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-xl glass text-white text-sm placeholder:text-zinc-500 focus:border-white/20 focus:bg-white/[0.06] transition-all"
          />
          <button
            type="submit"
            className="bg-brand-gradient text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
