import React, { useState } from "react";
import "../styling/About.css";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";

function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Parfumèlle unique?",
      answer:
        "Each fragrance we create tells a story, inspired by the beauty of nature and the magic of emotions.",
    },
    {
      question: "How are the perfumes made?",
      answer:
        "We blend carefully sourced natural ingredients with cutting-edge techniques to craft unforgettable scents.",
    },
    {
      question: "Can I create my own custom fragrance?",
      answer:
        "Absolutely! We offer a personalized fragrance experience to ensure your scent is as unique as you.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, Parfumèlle delivers worldwide, bringing the magic of our perfumes to your doorstep.",
    },
    {
      question: "Are your perfumes eco-friendly?",
      answer:
        "We are committed to sustainability, using eco-friendly practices and recyclable packaging.",
    },
  ];

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same item is clicked
    } else {
      setActiveIndex(index);
      const accordion = document.querySelectorAll(".faq-answer")[index];
      gsap.fromTo(
        accordion,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  };

  return (
    <section id="about" className="about">
      <Helmet>
        <title>About | Parfumèlle</title>
      </Helmet>
      <div className="MainSection">
        <div className="Pagraphs">
          <p>
            It began on a misty morning, just as the first rays of sunlight
            kissed the earth awake. You stood at the edge of a rose garden, its
            endless blooms glistening with dew. The air was thick with the
            whispers of petals, their fragrance weaving tales of love, loss, and
            endless wonder. Somewhere, a gentle breeze stirred, carrying with it
            the promise of something extraordinary.
          </p>
          <br />
          <p>
            You took a step closer, drawn by the pull of an unseen force, the
            kind that only magic could explain. The roses seemed to part before
            you, as if they recognized you—not as a visitor, but as someone who
            belonged. Your fingertips brushed against a single, perfect bloom,
            its color deeper than the dusk and brighter than the dawn. In that
            moment, the world around you faded, and all that remained was the
            intoxicating scent of that single rose.
          </p>
          <br />
          <p>
            Suddenly, the garden began to hum—a melody soft and lilting, as if
            the flowers themselves were singing. The rose you touched began to
            shimmer, its petals unfurling to reveal a tiny vial nestled within.
            You held it delicately, feeling its warmth as though it had a
            heartbeat of its own. The vial bore no label, but as you uncorked
            it, the scent that escaped was unmistakable: the aroma of dreams, of
            memories yet to be made, of a story that had been waiting for you to
            live it.
          </p>
          <br />
          <p>
            This is the heart of <strong>Parfumèlle</strong>: a place where
            fragrances are more than just scents. They are gateways to worlds
            unseen, each bottle a chapter waiting to be written by you. Here,
            every perfume carries the essence of that enchanted garden—a promise
            that no matter where life takes you, magic will always find you.
          </p>
          <br />
          <p>
            And so, dear traveler, the story is now yours. Will you step into
            the world of Rose Mist Perfumery and let its whispers guide your
            journey? The roses are waiting.
          </p>
        </div>
        <div className="faq-section">
          <div></div>
          <h2>Frequently Asked Questions</h2>
          <ul className="faq-list">
            {faqs.map((faq, index) => (
              <li key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => handleAccordionClick(index)}
                >
                  {faq.question}
                </button>
                <div
                  className={`faq-answer ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
