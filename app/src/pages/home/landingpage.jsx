import React, {useEffect} from "react";

import Navbar from "../../components/navbar/navbar";
import Header from "./hero-header/header";
import SectionOne from "./section-1/section-one";
import SectionTwo from "./section-2/section-two";
import SectionThree from "./section-3/section-three";
import SectionFour from "./section-4/section-four";
import Footer from "../../components/footer/footer";

import AOS from "aos";
import 'aos/dist/aos.css';

const LandingPage = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
    </>
  );
};

export default LandingPage;
