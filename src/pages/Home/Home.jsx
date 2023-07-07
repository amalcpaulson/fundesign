import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Company from "../../components/Home/company";
import Homedrag from "../../components/Home/Homedrags";
import About from "../../components/Home/about";
import Showcase from "../../components/Home/showcase";


const Home = () => {

  return (
    <>

      <Navbar />
      <div className="home-body">
        <Homedrag />
        <About />
        <Showcase />
      </div>
     
      
    </>
  );
};

export default Home;
