import React from 'react'
import { logowhite, logoblack } from "../../assets";
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar-fixe">
      <div className="navbar">
        <a href="/">
          <img className="nav-logo" src={logowhite} alt="" />
        </a>
        <div>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Partnership</a>
          <a href="/">Projects</a>
        </div>
        <button>Let's Talk</button>
      </div>
    </div>
  );
}

export default Navbar