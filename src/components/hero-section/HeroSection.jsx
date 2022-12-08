import React, { useRef, useEffect } from "react";
import "./hero-section.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/profile.png";

import { init } from "ityped";

const HeroSection = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ["Shafira Adzra Erminabilah", "Social Media Specialist", "Social Media Officer", "Digital Marketing"],
    });
  }, []);

  return (
    <section className="hero-section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero-content">
              <p className="mb-3">Welcome To My World</p>
              <h2 className="hero-title mb-4">
                I'm <span ref={textRef}></span>
              </h2>
              <p>Digital marketing enthusiast with a demonstrated history of working in social media and digital ads.</p>

              <div className="mt-5 hero-btns d-flex align-items-center gap-4">
                <button className="btn cv-btn">
                  <a href="cvadzra.pdf" download="CV - Shafira Adzra Erminabilah.pdf">
                    CV
                  </a>
                </button>
                <button className="btn contact-btn">
                  <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=adzrashafira@gmail.com">Contact</a>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero-img">
              <img src={heroImg} alt="heroImg" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
