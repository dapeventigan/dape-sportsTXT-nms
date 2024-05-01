import React from "react";
import sectionTwoImg from "../../../assets/section2-img.png";
import "./section-two.css";

const SectionTwo = () => {
  return (
    <section className="section-two">
      <div className="section-two-content">
        <div className="section-two-left">
          <h1>Our Mission</h1>
          <p>
            Our mission is to provide our users with a seamless and enjoyable
            online experience, offering a diverse range of high-quality content
            and services that inform, inspire, and engage. Through innovative
            design and intuitive functionality, we aim to create a platform that
            connects people and facilitates meaningful interactions.
          </p>
          <button className="button-2">JOIN NOW</button>
        </div>

        <img className="section-two-img" src={sectionTwoImg} alt="" data-aos="zoom-out" data-aos-once="true" data-aos-anchor-placement="center-bottom"/>
      </div>
    </section>
  );
};

export default SectionTwo;
