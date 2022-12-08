import React, { useState } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";

import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");

  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>{" "}
          </Col>

          <Col lg="4" md="3">
            <div className="about-btns d-flex flex-column align-items-center">
              <button className={`about-btn ${aboutFilter === "ABOUT" ? "about-btn active" : ""}`} onClick={() => setAboutFilter("ABOUT")}>
                About me
              </button>
              <button className={`about-btn ${aboutFilter === "EDUCATION" ? "about-btn active" : ""}`} onClick={() => setAboutFilter("EDUCATION")}>
                Education
              </button>
              <button className={`about-btn ${aboutFilter === "SKILLS" ? "about-btn active" : ""}`} onClick={() => setAboutFilter("SKILLS")}>
                Skills & Tools
              </button>
              <button className={`about-btn ${aboutFilter === "EXPERIENCE" ? "about-btn active" : ""}`} onClick={() => setAboutFilter("EXPERIENCE")}>
                Experience
              </button>
            </div>
          </Col>

          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about-content-wrapper d-flex gap-5">
                <div className="about-content">
                  <p className="text-justify">
                    A final year student of Padjadjaran University and creative individual to the idea of content creation on how to influence costumer behavior on social media. Have a strong motivation to develop and learn new things.
                    Experienced at create creative content for social media such as content writing, copy writing, content creation and also understand how to manage ads on Instagram, facebook, and google.
                  </p>
                  <p className="text-justify"> Hardworking person and responsible in doing a job and always keeping up with the latest trend. Looking for new insight and experience to further develop my digital marketing skills.</p>
                  <div className="social-links">
                    <h5 className="mb-3">Connect with me:</h5>
                    <span>
                      <a href="https://instagram.com/shafiraadzra">
                        <i class="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://linkedin.com/in/shafiraadzra">
                        <i class="ri-linkedin-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=adzrashafira@gmail.com">
                        <i class="ri-google-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {aboutFilter === "EDUCATION" && <Education />}

            {aboutFilter === "SKILLS" && <Skills />}

            {aboutFilter === "EXPERIENCE" && <Experience />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
