import React from "react";
import "../../pages/Home/home.css";
import cdw from "../../assets/Home/projects/cdw.png";
import mulearn from "../../assets/Home/projects/mulearn.png";

const projects = () => {
  const data = [
    {
      image: cdw,
      bgcolor: "#FFF1F8",
      title: "CODe DESIGN WEEK WEBSITE",
      para: "Through our dashboard design process amal c paulson has contributed his 100% effort in wasting this.Through our design process amal c paulson has contributed his 100%.",
      buttoncolor: "#A3004C",
      designlink: "https://codedesignweek.netlify.app/",
      weblink: "https://codedesignweek.netlify.app/",
    },
    {
      image: mulearn,
      bgcolor: "#F0F0FF",
      title: "Mulearn CCE WEBSITE",
      para: "Through our dashboard design process enric s neelamkavil has contributed his 100% effort in wasting this.Through our design process enric s neelamkavil has contributed his 100%.",
      buttoncolor: "#6E6ED9",
      designlink: "https://mulearn-cce.vercel.app/",
      weblink: "https://mulearn-cce.vercel.app/",
    },
    {
      image: cdw,
      bgcolor: "#FFF1F8",
      title: "CODe DESIGN WEEK WEBSITE",
      para: "Through our dashboard design process amal c paulson has contributed his 100% effort in wasting this.Through our design process amal c paulson has contributed his 100%.",
      buttoncolor: "#A3004C",
      designlink: "https://codedesignweek.netlify.app/",
      weblink: "https://codedesignweek.netlify.app/",
    },
    {
      image: mulearn,
      bgcolor: "#F0F0FF",
      title: "Mulearn CCE WEBSITE",
      para: "Through our dashboard design process enric s neelamkavil has contributed his 100% effort in wasting this.Through our design process enric s neelamkavil has contributed his 100%.",
      buttoncolor: "#6E6ED9",
      designlink: "https://mulearn-cce.vercel.app/",
      weblink: "https://mulearn-cce.vercel.app/",
    },
  ];
  return (
    <div className="home-projects-wrapper">
      <h1>Projects</h1>
      <div className="projects-div-wrapper">
        {data.map(({ image, bgcolor, title, para, buttoncolor }, i) => (
          <div className="projects-individual-wrapper">
            <div
              className="project-div-upper"
              style={{ backgroundColor: bgcolor }}
            >
              <img src={image} alt="" />
            </div>
            <div className="project-div-bottom">
              <h2>{title}</h2>
              <p style={{ color: "#B5B5B5",fontSize:"15px" }}>{para}</p>
              <div className="project-div-buttons">
                <a
                  href=""
                  style={{
                    backgroundColor: buttoncolor,
                    borderColor: buttoncolor,
                  }}
                >
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
                <a
                  href=""
                  style={{ color: buttoncolor, borderColor: buttoncolor }}
                >
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
                      stroke={buttoncolor}
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
