import React from "react";
import cdw from "../../assets/company/cdw.png";
import saras from "../../assets/company/sarastechno.png";
import code from "../../assets/company/code.png";
import gameclub from "../../assets/company/gameclub.png";
import cce from "../../assets/company/cce.png";
import "../../pages/Home/home.css";
const company = () => {


  return (
    <div className="company-wrapper">
      <a href="https://codedesignweek.netlify.app" target="_blank">
        <img src={cdw} alt="" />
      </a>
      <a href="" target="_blank">
        <img src={saras} alt="" />
      </a>
      <a href="">
        <img src={code} alt="" />
      </a>
      <a href="">
        <img src={cce} alt="" />
      </a>
      <a href="">
        <img src={gameclub} alt="" />
      </a>
    </div>
  );
};

export default company;
