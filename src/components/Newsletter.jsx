import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <section className="bg-white text-black font-semibold w-full flex justify-center items-center rounded-xl ">
      <div className="p-8 rounded-2xl shadow-xl w-full animate-fadeInUp">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          Subscribe to our Newsletter <br /> & Never miss latest updates
        </h3>

        {/* Alerts */}
        {status === 'sending' && <Alert variant="info">Sending...</Alert>}
        {status === 'error' && <Alert variant="danger">{message}</Alert>}
        {status === 'success' && <Alert variant="success">{message}</Alert>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 px-4 py-3 border-2 border-purple-500 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 text-black px-6 py-3 !rounded-xl font-bold hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
