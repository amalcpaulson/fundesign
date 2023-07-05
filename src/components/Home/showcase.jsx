import React from "react";
import "../../pages/Home/home.css";
import mac from '../../assets/Home/showcase/Mac.png'

const showcase = () => {
  return (
    <div className="showcase-home-wrapper">
      <h1>Making us stand out!</h1>
      <div className="showcase-home-content-wrapper">
        <div></div>
        <div>
            <img src={mac} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default showcase;
