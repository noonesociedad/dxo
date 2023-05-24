import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import VideoCard from "./VideoCard";

const Videos = () => {
  const projects = [
    {
      title: "HTML Full Course",
      description: "Web Development",
      videoUrl: "https://www.youtube.com/watch?v=a2eoA84zxjs",
    },
    {
      title: "CSS Full Course",
      description: "Web Development",
      videoUrl: "https://www.youtube.com/watch?v=2APiCgssA-s",
    },
    {
      title: "JavaScript Full Course Part 1",
      description: "Web Development",
      videoUrl: "https://www.youtube.com/watch?v=SQJlPWipKGE",
    },
    {
      title: "JavaScript Full Course Part 2",
      description: "Web Development",
      videoUrl: "https://www.youtube.com/watch?v=M9yqQMbEuj4",
    },
    // Add more projects with video URLs as needed
  ];

  return (
    <section className="project" id="videos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Free Video Course</h2>
                  <p>
                  Embark on a journey of personal and professional growth with our new range of free courses, empowering you to learn practical skills and turn your dreams into reality.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Dev</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Data Science</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Data Analyst</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <VideoCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          More Coming Soon
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Coming Soon
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Coming Soon
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Videos;
