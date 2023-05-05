import React from "react";
import "./home.css";
import { logowhite, logoblack } from "../../assets";
import Navbar from "../../components/navbar/Navbar";
const Home = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const n = 1000;

    for (let i = 0; i < n; i++) {
      const div = document.createElement("div");
      div.classList.add("box");
      container.appendChild(div);
    }
  });
  return (
    <div className="home-body">
      <span id="splash-overlay" className="splash"></span>
      <span id="welcome" className="z-depth-4"></span>
      <Navbar />

      <div className="home-about">
        <div>
          <div id="container"></div>
          <div className="home-about-content">hello all</div>
        </div>
      </div>
      <div className="home-project"></div>
    </div>
  );
};

export default Home;
