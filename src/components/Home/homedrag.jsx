import React, { useState } from "react";
import "../../pages/Home/home.css";
import Draggable, { DraggableCore } from "react-draggable";
const Homedrag = () => {
  console.log(window.innerWidth, window.innerHeight);
  const [widthHeight, setWidthHeight] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  return (
    <div className="homedrag-wrapper">
      <Draggable defaultPosition={{ x: widthHeight.width-100, y: 30 }}>
        <h1>Hello</h1>
      </Draggable>
      <Draggable defaultPosition={{ x: 200, y: 30 }}>
        <h1>Hello</h1>
      </Draggable>
      <Draggable defaultPosition={{ x: 400, y: 300 }}>
        <div>Hello</div>
      </Draggable>
    </div>
  );
};

export default Homedrag;
