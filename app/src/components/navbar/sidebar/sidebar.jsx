import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <GiHamburgerMenu size={35} color="#015CA8" onClick={toggleSidebar} />
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <MdOutlineClose
          size={30}
          onClick={toggleSidebar}
          className="sidebar__toggle-btn-close"
        />
        <div className="sidebar__header">
          <h2>MENU</h2>
        </div>

        <div className="sidebar__contents">
          <div className="sidebar__content">
            <a href="/">HOME</a>
          </div>
          <div className="sidebar__content">
            <a href="/#hiring"> FEATURES</a>
          </div>
          <div className="sidebar__content">
            <a href="/virtual-assistant">ABOUT US</a>
          </div>
          <div className="sidebar__content">
            <a href="/plans-and-pricing" className="link__details">
              CONTACT US
            </a>
          </div>
          <div className="sidebar__content">
            <a href="/plans-and-pricing" className="link__details">
              <button className="button-3">JOIN NOW</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
