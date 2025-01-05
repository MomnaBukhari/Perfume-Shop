import React from "react";
import { Helmet } from "react-helmet";
import "../styling/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <Helmet>
        <title>Parfumèlle</title>
      </Helmet>
      <video
        className="hero-video"
        src="/assets/videos/Background.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="hero-content">
        <h1>Welcome to Parfumèlle</h1>
        <p>Step into a world of enchanting fragrances.</p>
      </div>
    </section>
  );
}

export default Hero;
