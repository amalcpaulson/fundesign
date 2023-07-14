import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Landing from '../../components/Home/landing'
import Homedrag from "../../components/Home/Homedrags";
import About from "../../components/Home/about";
import Projects from "../../components/Home/projects";
import Software from "../../components/Home/software";


const Home = () => {

  return (
    <>

      {/* <Navbar /> */}
      <div className="home-body">
        <Landing />
        <Homedrag />
        <About />
        <Projects />
        <Software />
      </div>
     
      
    </>
  );
};

export default Home;
