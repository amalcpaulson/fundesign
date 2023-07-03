import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Company from "../../components/Home/company";
import { AiOutlineArrowRight } from "react-icons/ai";
import circle from "../../assets/circle.png";

const Home = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const n = 800;

    for (let i = 0; i < n; i++) {
      const div = document.createElement("div");
      div.classList.add("box");
      container.appendChild(div);
    }
  });
  return (
    <>
      {" "}
      <Navbar />
      <div className="home-body">
        <div className="home-about">
          <div>
            <div id="container"></div>
            <div className="home-about-content">
              <div>
                <h1>We are a culture-driven design community!</h1>
                <button style={{padding:5}}>
                  Join out community <AiOutlineArrowRight />
                </button>
              </div>
              <div>
                <img style={{ width: "15vw" }} src={circle} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Company />
      
    </>
  );
};

export default Home;
