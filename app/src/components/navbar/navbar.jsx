import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { LiaUserSolid } from "react-icons/lia";
import Sidebar from "./sidebar/sidebar";

import SportTXTLogo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [showStyle, setshowStyle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 150;

      if (scrollPosition > threshold) {
        setshowStyle(true);
      } else {
        setshowStyle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dapeNavStyle = {
    top: showStyle ? "10px" : "0px",
    backgroundColor: showStyle ? "#F4F4F4" : "white",
    borderRadius: showStyle ? "3rem" : "0",
    margin: showStyle ? "1rem 2rem" : "0",
    transition:
      "top 0.3s ease-in-out, background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out, margin 0.3s ease-in-out",
  };

  return (
    <nav className="navbar" style={dapeNavStyle}>
      <ul className="navbar__links">
        <div className="navbar__logo">
          <Link to="/">
            <img src={SportTXTLogo} alt="" />
          </Link>
        </div>
        <li>
          <Link className="navbar__link" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/features">
            FEATURES
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/about-us">
            ABOUT US
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/contact-us">
            CONTACT US
          </Link>
        </li>
        <div className="nav-icons">
          <a href="/#">
            <RiSearch2Line size={25} color="#015CA8" />
          </a>

          <a href="/#">
            <LiaUserSolid size={35} color="#015CA8" />
          </a>

          <button className="button-1">JOIN NOW</button>
        </div>
      </ul>

      <ul className="navbar__links-sm">
        <div className="navbar__logo">
          <Link to="/">
            <img src={SportTXTLogo} alt="" />
          </Link>
        </div>

        <div className="nav-icons">
          <Sidebar />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
