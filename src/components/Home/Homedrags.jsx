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
    <>
      <div className="homedrag-wrapper-desk">
        <Draggable defaultPosition={{ x: widthHeight.width - 400, y: 30 }}>
          <div>
            <h1>Be Creative</h1>
            <p>
              Take inspiration from the world around you – the vibrant hues of a
              sunset, the rhythmic sounds of nature, or the intricate patterns
              in everyday objects. Merge them with your own inner universe and
              create something entirely your own.
            </p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: widthHeight.width - 1000, y: 30 }}>
          <h1>Move to any Where!!</h1>
        </Draggable>
        <Draggable defaultPosition={{ x: 400, y: 300 }}>
          <div>
            <h3>Style the launch page</h3>
          </div>
        </Draggable>
      </div>{" "}
      <div className="homedrag-wrapper-tab">
        <Draggable defaultPosition={{ x: widthHeight.width - 100, y: 30 }}>
          <h1>Hello</h1>
        </Draggable>
        <Draggable defaultPosition={{ x: widthHeight.width - 700, y: 30 }}>
          <h1>Hello</h1>
        </Draggable>
        <Draggable defaultPosition={{ x: widthHeight.width - 400, y: 300 }}>
          <div>Hello</div>
        </Draggable>
      </div>{" "}
      <div className="homedrag-wrapper-mob">
        <Draggable defaultPosition={{ x: widthHeight.width - 100, y: 30 }}>
          <h1>Hello</h1>
        </Draggable>
        <Draggable defaultPosition={{ x: widthHeight.width - 400, y: 30 }}>
          <h1>Hello</h1>
        </Draggable>
        <Draggable defaultPosition={{ x: widthHeight.width - 300, y: 300 }}>
          <div>Hello</div>
        </Draggable>
      </div>
    </>
  );
};

export default Homedrag;
