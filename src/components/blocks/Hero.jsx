import React, { useEffect } from "react";
import "../../styling/blocks/Hero.css";
import { gsap } from "gsap";

function Hero() {
  useEffect(() => {
    const heroHeader = document.querySelector(".Hero-header-h1");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      gsap.to(heroHeader, {
        x: scrollY * 0.5,
        ease: "power2.out",
      });
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <section id="hero" className="hero">
        <video
          className="hero-video"
          src="/videos/Background.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="Hero-header">
          <h1 className="Hero-header-h1">Parfumèlle</h1>
          <h3 className="Hero-header-h3"></h3>
        </div>
      </section>
    </>
  );
}

export default Hero;
