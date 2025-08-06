import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/next-career.png";
import projImg2 from "../assets/img/fotographiya.png";
import projImg3 from "../assets/img/weather.png";
import dashboard from "../assets/img/dashboard_dark.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Next Career",
      description: "Job Portal Website",
      url: "https://next-career-ten.vercel.app/",
      imgUrl: projImg1,
    },
    {
      title: "Atmos",
      description: "Weather App",
      url: "https://atmos-murex.vercel.app/",
      imgUrl: projImg3,
    },
    {
      title: "Fotographiya",
      description: "Photography Website",
      url: "https://www.fotographiya.com/",
      imgUrl: projImg2,
    },
  ];
  const projects2 = [
    {
      title: "Admin Dashboard",
      description: "Front-end Dashboard Website",
      url: "https://admin-dashboard-manuj.vercel.app/",
      imgUrl: dashboard,
    },
    {
      title: "Personal Portfolio",
      description: "Portfolio Website",
      url: "https://portfolio-livid-five-27.vercel.app/",
      imgUrl: projImg3,
    },
    {
      title: "Fotographiya",
      description: "Photography Website",
      url: "https://www.fotographiya.com/",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have built multiple creative and technically sound projects in web development and full-stack engineering. My work includes following mentioned projects. These projects demonstrate my grasp of frontend design, backend logic, and modern development practices, reflecting my passion for building meaningful digital experiences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
