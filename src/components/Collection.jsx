import React from "react";
import { Helmet } from "react-helmet";
import "../styling/Collection.css";

function Collection() {
  return (
    <section id="collection" className="collection">
      <Helmet>
        <title>Collection</title>
      </Helmet>
      <h2>Our Collection</h2>
      <p>Discover scents that tell your story, one note at a time.</p>
    </section>
  );
}

export default Collection;
