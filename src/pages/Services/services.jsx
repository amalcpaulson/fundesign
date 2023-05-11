import React from 'react'
import './services.css'

import Navbar from "../../components/navbar/Navbar";
import Demo from "../../components/Demo/card";

const services = () => {
  return (
    <>
      <Navbar />
      <div className='services-body'>
        <Demo />
      </div>
    </>
  );
}

export default services
