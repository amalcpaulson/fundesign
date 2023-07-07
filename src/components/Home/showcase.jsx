import React from "react";
import "../../pages/Home/home.css";
import mac from "../../assets/Home/showcase/Mac.png";
import vectorleft from "../../assets/Home/showcase/Vector-left.png";
import vectorright from "../../assets/Home/showcase/Vector-right.png";

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
          <div className="slider-wrapper">
            <div className="slider">
              <div className="container">
                <iframe
                  src="https://codedesignweek.netlify.app/"
                  frameborder="0"
                ></iframe>
              </div>
              <div className="container">
                <iframe
                  src="https://mulearn-cce.vercel.app/"
                  frameborder="0"
                ></iframe>
              </div>
              <div className="container">
                <iframe
                  src="https://amalcp.vercel.app/"
                  frameborder="0"
                ></iframe>
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
