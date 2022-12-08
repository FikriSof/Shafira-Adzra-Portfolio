import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";

import img01 from "../../assets/images/portfolio-01.png";
import img02 from "../../assets/images/portfolio-02.png";
import img03 from "../../assets/images/portfolio-03.png";
import img04 from "../../assets/images/portfolio-04.png";
import img05 from "../../assets/images/portfolio-05.png";
import img07 from "../../assets/images/portfolio-07.png";
import img08 from "../../assets/images/portfolio-08.png";
import img09 from "../../assets/images/portfolio-09.png";
import img10 from "../../assets/images/portfolio-10.png";
import img11 from "../../assets/images/portfolio-11.png";
import img12 from "../../assets/images/portfolio-12.png";
import img13 from "../../assets/images/portfolio-13.png";
import img14 from "../../assets/images/portfolio-14.png";
import img15 from "../../assets/images/portfolio-15.png";
import img16 from "../../assets/images/portfolio-16.png";
import img17 from "../../assets/images/portfolio-17.png";
import img18 from "../../assets/images/portfolio-18.png";
import img19 from "../../assets/images/portfolio-19.png";
import img20 from "../../assets/images/portfolio-20.png";
import img21 from "../../assets/images/portfolio-21.png";
import img22 from "../../assets/images/portfolio-22.png";
import img23 from "../../assets/images/portfolio-23.png";
import img24 from "../../assets/images/portfolio-24.png";
import img25 from "../../assets/images/portfolio-25.png";
import img26 from "../../assets/images/portfolio-26.png";
import img27 from "../../assets/images/portfolio-27.png";
import img28 from "../../assets/images/portfolio-28.png";
import img29 from "../../assets/images/portfolio-29.png";
import img30 from "../../assets/images/portfolio-30.png";

const portfolioData = [
  {
    imgUrl: img01,
  },
  {
    imgUrl: img02,
  },
  {
    imgUrl: img03,
  },
  {
    imgUrl: img04,
  },
  {
    imgUrl: img05,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio-top">
            <h6>
              This journey has made me eager to explore more about <span> digital marketing</span>,
              <br /> and I'm looking for an opportunity to build a career in the <span> digital marketing </span> industry through this portfolio
            </h6>
            <h1>Portfolio</h1>
            <img src={img08} alt="" />
          </Col>

          {portfolioData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img src={item.imgUrl} alt="" />
                </div>
              </div>
            </Col>
          ))}

          <Col lg="12" className="portfolio-mid">
            <img src={img07} alt="" />
            <img src={img09} alt="" />
            <img src={img10} alt="" />
            <img src={img11} alt="" />
            <img src={img12} alt="" />
            <img src={img13} alt="" />
            <img src={img14} alt="" />
            <img src={img15} alt="" />
            <img src={img16} alt="" />
            <img src={img17} alt="" />
            <img src={img18} alt="" />
            <img src={img19} alt="" />
            <img src={img20} alt="" />
            <img src={img21} alt="" />
            <img src={img22} alt="" />
            <img src={img23} alt="" />
            <img src={img24} alt="" />
            <img src={img25} alt="" />
            <img src={img26} alt="" />
            <img src={img27} alt="" />
            <img src={img28} alt="" />
            <img src={img29} alt="" />
            <img src={img30} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
