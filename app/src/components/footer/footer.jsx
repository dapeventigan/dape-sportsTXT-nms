import React from "react";
import FooterLogo from "../../assets/logo.png";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={FooterLogo} alt="" />
      <div className="footer-links">
        <a href="/#">Privacy</a>
        <a href="/#">Terms</a>
        <a href="/#">Contact Us</a>
      </div>

      <div className="footer-copyright">
        ©2024 SportsTXT. All rights reserved. Website designed and developed by <strong>Dape</strong>.
      </div>
    </footer>
  );
};

export default Footer;
