import React from "react";

import memIcon from "../../../assets/mem-first-icon.png";
import safeIcon from "../../../assets/safety-first-icon.png";
import dataIcon from "../../../assets/data-first-icon.png";
import valueIcon from "../../../assets/value-first-icon.png";
import CtaBlock from "../../../components/block/cta-block";

import "./section-four.css";

const SectionFour = () => {
  const itemList = [
    {
      title: "Members First",
      desc: "It's time to elevate your fan engagement beyond just using social media and SportsTXT brings your members straight into the heart of your club through exclusive stories, new experiences, games and unique offers",
      img: memIcon,
    },
    {
      title: "Safety First",
      desc: "SportsTXT offers 24/7 protection for sports clubs with real-time monitoring and content analysis powered by a combination of human expertise and AI technology. With SportsTXT, clubs can be confident in the quality and safety of their reputation and all user-generated content.",
      img: safeIcon,
    },
    {
      title: "Data First",
      desc: "Contrary to social media, you have full ownership of your data. Your personal dashboard collects and analyzes important insights about members' usage of the platform, demographics and other data to help you make better business decisions.",
      img: dataIcon,
    },
    {
      title: "Value First",
      desc: "By making a few small tweaks in the way you present your content, you will be amazed at how it can significantly boost your profits. You have the opportunity to set your content prices based on your own judgment and enhance its worth with the support of sponsors.",
      img: valueIcon,
    },
  ];

  return (
    <section>
      <div className="section-four-container" data-aos="fade-up" data-aos-once="true">
        <h1>The Platform of Firsts</h1>
        <div className="section-four-contents">
          {itemList.map((item) => (
            <div className="section-four-item" key={item}>
              <div className="section-four-img">
                <img src={item.img} alt="" />
              </div>

              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CtaBlock
        title="Get in touch"
        desc="Build A Unified Community with SportsTXT"
      />
    </section>
  );
};

export default SectionFour;
