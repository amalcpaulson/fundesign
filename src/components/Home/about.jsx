import React from "react";

import "../../pages/Home/home.css";
import arrow from "../../assets/Home/about/arrow.png";
import brand from "../../assets/Home/about/brand.png";
import graphic from "../../assets/Home/about/graphic.png";
import uiux from "../../assets/Home/about/uiux.png";
import web from "../../assets/Home/about/web.png";

const about = () => {
  return (
    <div className="home-about-wrapper">
      <h1>Empowering You!</h1>
      <div className="home-about-content-wrapper">
        <div className="home-about-content-individual">
          <img src={graphic} alt="" />
          <div>
            <h3>Graphic Design</h3>
            <p>
              Graphic Stationaries, Poster Design, Magazine Design, Book Design
              etc.
            </p>
          </div>
          <a href="">
            <p>Read More</p>
            <img src={arrow} alt="" />
          </a>
        </div>
        <div className="home-about-content-individual">
          <img src={uiux} alt="" />
          <div>
            <h3>UI/UX Design</h3>
            <p>
              UI / UX design, Concept Design, Mobile Application Design,
              Interactive Designs
            </p>
          </div>
          <a href="">
            <p>Read More</p>
            <img src={arrow} alt="" />
          </a>
        </div>{" "}
        <div className="home-about-content-individual">
          <img src={web} alt="" />
          <div>
            <h3>Web Design</h3>
            <p>
              Website Design, Icon Design, Web Application Design, E-Commerce
              Website Design
            </p>
          </div>
          <a href="">
            <p>Read More</p>
            <img src={arrow} alt="" />
          </a>
        </div>{" "}
        <div className="home-about-content-individual">
          <img src={brand} alt="" />
          <div>
            <h3>Brand Identity</h3>
            <p>
              Brand Identity, Logo Design, Visual Language Design, Brand
              Graphics etc.
            </p>
          </div>
          <a href="">
            <p>Read More</p>
            <img src={arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default about;
