import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("https://portfolio-backend-vulg.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      if (response.ok) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: 'Network error. Please try again later.' });
    }
  };

  return (
    <section
      className="bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] py-[60px] pb-[200px] max-md:pb-[130px] max-md:px-2"
      id="connect"
    >
      <Container>
        <Row className="items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={`w-[92%] ${isVisible ? "animate__animated animate__zoomIn" : ""}`}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2 className="text-[45px] font-bold mb-[30px] text-white">Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          className="w-full bg-white/10 border border-white/50 rounded-[20px] text-white mb-2 px-[26px] py-[18px] font-medium text-[18px] tracking-wide transition-all duration-300 ease-in-out   focus:text-black"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          className="w-full bg-white/10 border border-white/50 rounded-[20px] text-white mb-2 px-[26px] py-[18px] font-medium text-[18px] tracking-wide transition-all duration-300 ease-in-out   focus:text-black"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          className="w-full bg-white/10 border border-white/50 rounded-[20px] text-white mb-2 px-[26px] py-[18px] font-medium text-[18px] tracking-wide transition-all duration-300 ease-in-out   focus:text-black"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          className="w-full bg-white/10 border border-white/50 rounded-[20px] text-white mb-2 px-[26px] py-[18px] font-medium text-[18px] tracking-wide transition-all duration-300 ease-in-out   focus:text-black"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          className="w-full bg-white/10 border border-white/50 rounded-[20px] text-white mb-2 px-[26px] py-[18px] font-medium text-[18px] tracking-wide transition-all duration-300 ease-in-out   focus:text-black"
                        ></textarea>
                        <button
                          type="submit"
                          className="bg-white text-black font-semibold !rounded-xl px-6 py-2 transition-all hover:bg-opacity-90"
                        >
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={`mt-3 font-medium ${status.success === false ? "text-red-400" : "text-green-400"}`}>
                            {status.message}
                          </p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
