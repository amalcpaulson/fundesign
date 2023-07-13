import React from 'react'
import mac from '../../assets/Home/landing/Mac.png'
import phone from '../../assets/Home/landing/phone.png'
import tab from "../../assets/Home/landing/tab.png";
import "../../pages/Home/home.css";


const landing = () => {
  return (
    <div>
      <div className="landing-desktop-view">
        <img src={mac} alt="" />
      </div>
      <div className="landing-tab-view">
        <img src={tab} alt="" />
      </div>
      <div className="landing-phone-view">
        <img src={phone} alt="" />
      </div>
    </div>
  );
}

export default landing
