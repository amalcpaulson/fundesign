import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Company from "../../components/Home/company";
import About from "../../components/Home/about";
import Showcase from "../../components/Home/showcase";


const Home = () => {

  return (
    <>

      <Navbar />
      <div className="home-body">
        <About />
        <Showcase />
      </div>
     
      
    </>
  );
};

export default Home;
