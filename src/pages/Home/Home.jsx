import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Landing from '../../components/Home/Landing'
import Homedrag from "../../components/Home/Homedrags";
import About from "../../components/Home/about";
import Projects from "../../components/Home/projects";
import Software from "../../components/Home/software";
import Team from "../../components/Home/Team";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/footer";


const Home = () => {

  return (
    <>

      {/* <Navbar /> */}
      <div className="home-body">
        <Landing />
        {/* <Homedrag /> */}
        <About />
        <Projects />
        <Software />
        <Team />
        <Contact />
        <Footer />
      </div>
     
      
    </>
  );
};

export default Home;
