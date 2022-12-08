import React, { Fragment } from "react";
import Header from "../header/Header";
import HeroSection from "../hero-section/HeroSection";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <About />
      <Portfolio />
      <Footer />
    </Fragment>
  );
};

export default Layout;
