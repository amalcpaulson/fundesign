import React from 'react'
import "../../pages/Home/home.css";
import cdw from '../../assets/Home/projects/cdw.png'

const projects = () => {
  return (
    <div className="home-projects-wrapper">
      <h1>Projects</h1>
      <div className="projects-div-wrapper">
        <div className="projects-individual-wrapper">
          <div className="project-div-upper">
            <img src={cdw} alt="" />
          </div>
          <div className="project-div-bottom">
            <h2>CODe DESIGN WEEK WEBSITE</h2>
            <p style={{ color: "#B5B5B5" }}>
              Through our dashboard design process amal c paulson has
              contributed his 100% effort in wasting this.Through our design
              process amal c paulson has contributed his 100%.
            </p>
            <div className="project-div-buttons">
              <a href="">
                <p>Live Demo</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="20"
                  viewBox="0 0 26 22"
                  fill="blue"
                >
                  <path
                    d="M24 11L2 11M24 11L14.5714 20.4286M24 11L14.5714 1.57141"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a href="">
                <p>View Design</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="20"
                  viewBox="0 0 26 22"
                  fill="blue"
                >
                  <path
                    d="M24 11L2 11M24 11L14.5714 20.4286M24 11L14.5714 1.57141"
                    stroke="red"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projects
