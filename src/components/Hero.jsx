import React from "react";
import "../style/hero.css";
import Logo from "../assets/logo.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>DESCUBRE</h1>
        <p>Una nueva forma de viajar, conocer y disfrutar.</p>
      </div>
    </div>
  );
}

export default Hero;

// import MainVideo from "../assets/video.mp4";

/* <video autoPlay loop muted id="video">
        <source src={MainVideo} type="video/mp4" />
      </video> */
