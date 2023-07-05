import React from "react";
import "../../pages/Home/home.css";
import mac from "../../assets/Home/showcase/Mac.png";
import vectorleft from "../../assets/Home/showcase/Vector-left.png";
import vectorright from "../../assets/Home/showcase/Vector-right.png";
import "./slider.css";
import './slider'
const showcase = () => {
    
  return (
    <div className="showcase-home-wrapper">
      <h1>Making us stand out!</h1>
      <div className="showcase-home-content-wrapper">
        <div className="showcase-home-content-left">
          <img src={vectorleft} alt="" />
        </div>
        <div className="showcase-home-content-mid">
          <img src={mac} alt="" />
          <div>
            <div class="slider">
              <div class="slider__slides">
                <div class="slide s--active">
                  <div class="slide__inner"></div>
                </div>
                <div class="slide">
                  <div class="slide__inner"></div>
                </div>
                <div class="slide">
                  <div class="slide__inner"></div>
                </div>
                <div class="slide">
                  <div class="slide__inner"></div>
                </div>
                <div class="slide s--prev">
                  <div class="slide__inner"></div>
                </div>
              </div>
              <div class="slider__control">
                <div class="slider__control-line"></div>
                <div class="slider__control-line"></div>
              </div>
              <div class="slider__control slider__control--right m--right">
                <div class="slider__control-line"></div>
                <div class="slider__control-line"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-home-content-right">
          <img src={vectorright} alt="" />
        </div>
      </div>
    </div>
  );
};

export default showcase;
