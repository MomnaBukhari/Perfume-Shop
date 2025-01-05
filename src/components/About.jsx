import React from "react";
import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";
import "../styling/About.css";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Parfumèlle</title>
      </Helmet>
      <section id="about" className="about">
        <h2>
          <Typewriter
            options={{
              strings: ["Parfumèlle by M~"],
              autoStart: true,
              loop: true,
              delay: 200,
              duration: 100,
              cursor: "",
              wrapperClassName: "typewriter-heading",
            }}
          />
        </h2>
        <p>
          It began on a misty morning, just as the first rays of sunlight kissed
          the earth awake. You stood at the edge of a rose garden, its endless
          blooms glistening with dew. The air was thick with the whispers of
          petals, their fragrance weaving tales of love, loss, and endless
          wonder. Somewhere, a gentle breeze stirred, carrying with it the
          promise of something extraordinary.
        </p>
        <p>
          You took a step closer, drawn by the pull of an unseen force, the kind
          that only magic could explain. The roses seemed to part before you, as
          if they recognized you—not as a visitor, but as someone who belonged.
          Your fingertips brushed against a single, perfect bloom, its color
          deeper than the dusk and brighter than the dawn. In that moment, the
          world around you faded, and all that remained was the intoxicating
          scent of that single rose.
        </p>
        <p>
          Suddenly, the garden began to hum—a melody soft and lilting, as if the
          flowers themselves were singing. The rose you touched began to
          shimmer, its petals unfurling to reveal a tiny vial nestled within.
          You held it delicately, feeling its warmth as though it had a
          heartbeat of its own. The vial bore no label, but as you uncorked it,
          the scent that escaped was unmistakable: the aroma of dreams, of
          memories yet to be made, of a story that had been waiting for you to
          live it.
        </p>
        <p>
          This is the heart of ... <b>Parfumèlle </b> ... a place where
          fragrances are more than just scents. They are gateways to worlds
          unseen, each bottle a chapter waiting to be written by you. Here,
          every perfume carries the essence of that enchanted garden—a promise
          that no matter where life takes you, magic will always find you.
        </p>
        <p>
          And so, dear traveler, the story is now yours. Will you step into the
          world of Parfumèlle and let its whispers guide your journey? The roses
          are waiting.
        </p>
      </section>
      <Footer/>
    </>
  );
}

export default About;
