import React, { useEffect, useState } from "react";
import { logowhite } from "../../assets";
import { BiMenu } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useReactPath } from "../customHooks/path.hook";

import "./navbar.css";
const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  function openMenu() {
    console.log("true");
    setopenmenu(!openmenu);
  }
  function closeMenu() {
    setopenmenu(false);
  }
  const [navbg, setNavBg] = useState(false);

  const path = useReactPath();
  const navContent = ["home", "about", "team", "contact"];
  useEffect(() => {}, [path]);
  const changeNavBg = () => {
    window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <div className="navbar-fixe">
      <div className="navbar">
        <a href="/">
          <img className="nav-logo" src={logowhite} alt="" />
        </a>
        <div className="navbar-desk">
          {/* <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/partnership">Partnership</a>
          <a href="/project">Projects</a> */}
          {navContent.map((content, i) => (
            <a href={`#${content}`} key={i.toString() + content}>
              <p
                style={{
                  background: window.location.href.includes(`#${content}`)
                    ? "#B3B3FF"
                    : "",
                  textTransform: "capitalize",
                  padding: '5px',
                }}
              >
                {content}
              </p>
            </a>
          ))}
        </div>
        <div className="navbar-mob">
          <button
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={openMenu}
          >
            <BiMenu style={{ color: "white", fontSize: "40px" }} />
          </button>
        </div>
        {openmenu && <div className="menu-div"></div>}
        <button>Let's Connect</button>
      </div>
    </div>
  );
};

export default Navbar;
