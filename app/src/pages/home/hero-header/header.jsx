import React, {useState} from "react";
import Spline from "@splinetool/react-spline";
import RingLoader from "react-spinners/RingLoader"

import "./header.css";
const Header = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  return (
    <header className="spline-container">
      <Spline
        className="spline-ball"
        scene="https://prod.spline.design/xqnpFsFnCA0pHjYp/scene.splinecode"
        onLoad={handleSplineLoad}
      />
      <div className="spline-content">
        {isLoading ? (
          <RingLoader
          color="#015ca8"
          size={100}
        />
        ) : (
          <h1 data-aos="fade-up">
            Creating Value Off the Pitch with a{" "}
            <span className="title-span">Fan First Engagement</span> Platform
          </h1>
        )}
      </div>
    </header>
  );
};

export default Header;
