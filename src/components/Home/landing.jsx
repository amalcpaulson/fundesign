import React from "react";
import mac from "../../assets/Home/landing/Mac.png";
import phone from "../../assets/Home/landing/phone.png";
import tab from "../../assets/Home/landing/tab.png";
import logodesigner from "../../assets/Home/landing/logodes.png";
import ui from "../../assets/Home/landing/ui.png";
import ux from "../../assets/Home/landing/ux.png";
import graphic from "../../assets/Home/landing/graphic.png";
import "../../pages/Home/home.css";

const landing = () => {
  function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
  }

  function moveContainer() {
    var container = document.getElementById("container");
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var maxX = window.innerWidth - containerWidth;
    var maxY = window.innerHeight - containerHeight;

    var randomX = getRandomPosition(0, maxX);
    var randomY = getRandomPosition(0, maxY);

    container.style.left = randomX + "px";
    container.style.top = randomY + "px";
  }
  setInterval(moveContainer, 5000);
  return (
    <div>
      <div className="landing-desktop-view">
        <img src={mac} alt="" />
        <div className="curser-shaking">
          <div id="container" className="shake">
            <img src={logodesigner} alt="" />
          </div>
          <div id="container-curser-1" className="shake">
            <img src={ui} alt="" />
          </div>
        </div>
      </div>
      <div className="landing-tab-view">
        <img src={tab} alt="" />
      </div>
      <div className="landing-phone-view">
        <img src={phone} alt="" />
      </div>
    </div>
  );
};

export default landing;
