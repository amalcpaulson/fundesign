import React from "react";
import "./home.css";
import { logowhite, logoblack } from "../../assets";
const Home = () => {
  return (
    <div className="home-body">
      <span id="splash-overlay" className="splash"></span>
      <span id="welcome" className="z-depth-4"></span>

      <header className="navbar-fixe">
        <div className="navbar">
          <a href="/">
            <img className="nav-logo" src={logoblack} alt="" />
          </a>
          <a href="/">Home</a>
        </div>
      </header>
      <div className="home-about">
        <img src={logowhite} alt="" />
      </div>
      <div className="home-project"></div>
    </div>
  );
};

export default Home;
