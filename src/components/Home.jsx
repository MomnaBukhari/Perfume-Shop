import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./blocks/Hero";
import Products from "./blocks/Products";
import "../styling/Home.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>Parfumèlle</title>
      </Helmet>

      <Hero />
      <div className="center-box">
        <div className="center-mini-box">
          <h1>Get essesnce of All seasons!</h1>
        </div>
      </div>
      <Products limit={7} />
    </>
  );
}

export default Home;
