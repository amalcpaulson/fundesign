import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./projects.css";

const Projects = () => {
  const projectArray = [
    {
      name: "WRAP",
      image:
        "",
      des: "lcaedbcvu",
    },
    {
      name: "WRAP1",
      image:
        "",
      des: "lcaedbcvu",
    },
    {
      name: "WRAP2",
      image:
        "",
      des: "lcaedbcvu",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="project-body">
        {projectArray.map(({ name, image, des }, i) => (
          <div>
            <img src={image} alt="" />
            <legend>{name}</legend>
            <p>{des}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
