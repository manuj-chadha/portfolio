import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile_pic.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Coder", "Web Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner bg-cover bg-center bg-no-repeat pt-40 pb-24 max-md:pb-4 bg-[url('/src/assets/img/banner-bg.png')]
" id="home" >
      <Container>
        <Row className="items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn max-md:px-2" : ""}>
                  <span className="tagline inline-block font-bold text-lg py-2 px-4 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] text-white mb-4">
                    Welcome to my Portfolio
                  </span>
                  <div className="text-5xl max-md:text-3xl !font-extrabold leading-tight mb-3">
                    {`Hi! I'm Manuj : )`} <br />
                    <span className="txt-rotate inline-block text-5xl max-md:text-3xl text-white font-extrabold">
                      <span className="wrap">{text}</span>
                    </span>
                  </div>
                  <p className="text-lg max-md:text-md text-gray-400 leading-7 mb-8">
                    Hi, I'm Manuj — a passionate Full-Stack Java Developer skilled in Spring Boot, React, and MongoDB. With a focus on functionality and seamless user experience, I build dynamic web solutions. I’m also proficient in Data Structures and Algorithms and have prior experience working with the MERN stack.
                  </p>
                  <a href="#connect" className="text-white py-2 font-bold text-lg flex items-center space-x-2 transition">
                    <span>Let’s Connect</span>
                    <ArrowRightCircle size={20} />
                  </a>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="w-[95%] mx-auto animate-updown max-md:w-2/3 max-md:my-6" src={headerImg} alt="Header Img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
