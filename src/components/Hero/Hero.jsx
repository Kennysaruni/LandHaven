import React, { useEffect, useState } from "react";
import "./Hero.css";
import image from "../../assets/land.jpg";
// import { data } from "../../data/data.js";

function Hero() {

  return (
    <div className="container">
      <div className="img-title-container">
        <img src={image} alt="Hero" className="hero-image" />
          <h1 className="title">Find Your Dream Land</h1>
          <p className="description">Only the best of Luscious lands</p>
        <div className="text-container">
          <input type="text" placeholder="Search lands" />
        </div>
      </div>

    </div>
  );
}

export default Hero;
