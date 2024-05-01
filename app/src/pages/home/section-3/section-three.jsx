import React from "react";
import SectionThreeImg from "../../../assets/section3-img.png";

import "../section.css";

const SectionThree = () => {
  return (
    <section>
      <div className="section-content">
        <div className="section-left">
          <h1>How it Works</h1>
          <p>
            SportsTXT is a fully customizable community platform that connects
            directly with members and fans in real-time giving them a true sense
            of belonging.
          </p>
          <p>
            It provides sports clubs and teams with a unique opportunity to
            create more personalized experiences and open up new revenue
            streams. You’ll be able to capture valuable data and tailor content
            to specific member segments.
          </p>
          <button className="button-3">JOIN NOW</button>
        </div>

        <img className="section-img" src={SectionThreeImg} alt="" data-aos="zoom-out" data-aos-once="true" data-aos-anchor-placement="center-bottom"/>
      </div>
    </section>
  );
};

export default SectionThree;
