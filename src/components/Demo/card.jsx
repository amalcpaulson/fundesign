import React from 'react'
import './card.css'
import code from '../../assets/services/code-design.png'

const card = () => {
  return (
    <div class="container-card">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
            <h3>Design</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={code} alt="" />
            <h3>Code</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
            <h3>Launch</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card
