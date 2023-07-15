import React, { useState } from "react";
import "../../pages/Home/home.css";
import Draggable, { DraggableCore } from "react-draggable";
import ray from "../../assets/Home/landing/rays.png";
import sparkle from '../../assets/Home/landing/sparkle.png'
import sparkle1 from "../../assets/Home/landing/sparkle1.png";
import ai from "../../assets/Home/landing/ai.png";
import coc from "../../assets/Home/landing/coc.png";
import figma from "../../assets/Home/landing/Figma.png";
import ps from "../../assets/Home/landing/ps.png";
import xd from "../../assets/Home/landing/xd.png";
import sketch from "../../assets/Home/landing/sketch.png";

import elipse from "../../assets/Home/landing/Ellipse.png";




const Landing = () => {
  console.log(window.innerWidth, window.innerHeight);
  const [widthHeight, setWidthHeight] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  console.log(widthHeight.width)
  return (
    <div className="landing-page-wrapper">
      <div className="landing-page-ray">{/* <img src={ray} alt="" /> */}</div>
      <div className="landing-page-content">
        <div className="landing-page-main-content">
          <div>
            <h2>Meet & Collaborate with the people who loves Design.</h2>
          </div>
          <div className="landing-page-explore-btn">
            <a href="" >Explore Design</a>
          </div>
        </div>
        <div className="homedrag-wrapper-desk">
          <Draggable
            defaultPosition={{
              x: widthHeight.width - widthHeight.width * 0.7,
              y: widthHeight.height - widthHeight.height * 0.4,
            }}
          >
            <img src={ai} alt="" />
          </Draggable>
          <Draggable
            defaultPosition={{
              x: widthHeight.width - widthHeight.width * 1.2,
              y: widthHeight.height - widthHeight.height * 0.6,
            }}
          >
            <img src={xd} alt="" />
          </Draggable>
          <Draggable
            defaultPosition={{
              x: widthHeight.width - widthHeight.width * 0.8,
              y: widthHeight.height - widthHeight.height * 0.8,
            }}
          >
            <img src={ps} alt="" />
          </Draggable>
        </div>{" "}
      </div>
    </div>
  );
};

export default Landing;
