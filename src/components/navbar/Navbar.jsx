import React, { useState } from "react";
import { logowhite } from "../../assets";
import { BiMenu } from "react-icons/bi";

import "./navbar.css";
const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  function openMenu() {
    console.log("true");
    setopenmenu(!openmenu);
  }
  function closeMenu() {
    setopenmenu(false);
  }
  return (
    <div className="navbar-fixe">
      <div className="navbar">
        <a href="/">
          <img className="nav-logo" src={logowhite} alt="" />
        </a>
        <div className="navbar-desk">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Partnership</a>
          <a href="/">Projects</a>
        </div>
        <div className="navbar-mob">
          <button onClick={openMenu}>
            <BiMenu style={{ color: "white",fontSize:"40px" }} />
          </button>
        </div>
        {openmenu && (
          <div className="menu-div">
            <div>
              <button onClick={closeMenu}>
                <img src="" alt="S" />
              </button>
            </div>

            <div className="nav-links-menu">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Services</a>
              <a href="/">Partnership</a>
              <a href="/">Projects</a>
            </div>
          </div>
        )}
        <button>Let's Talk</button>
      </div>
    </div>
  );
};

export default Navbar;
