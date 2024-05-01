import React from "react";
import SectionOneImg from "../../../assets/section1-img.png";
import CtaBlock from "../../../components/block/cta-block";

import "../section.css";

const SectionOne = () => {
  return (
    <section>
      <CtaBlock
        title="Become a Member"
        desc="Find fellow fans of your favorite teams! Create an account now and join the millions of sports enthusiasts around the world!"
      />

      <div className="section-content">
        <div className="section-left">
          <h1>What is SportTXT?</h1>
          <p>
            Being a sports fan is not just about watching games. SportsTXT is an
            online platform designed to deliver the ultimate sports fan
            experience. Engage with other fans, get insider facts about your
            favorite teams, and so much more.
          </p>
          <button className="button-3">JOIN NOW</button>
        </div>

        <img className="section-img" src={SectionOneImg} alt="" data-aos="zoom-out" data-aos-once="true" data-aos-anchor-placement="center-bottom"/>
      </div>
    </section>
  );
};

export default SectionOne;
