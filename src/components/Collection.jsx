import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Products from "./blocks/Products";
import Footer from "./Footer";

function Collection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Collection | Parfumèlle</title>
      </Helmet>
      <Products />
      <Footer/>
    </>
  );
}

export default Collection;
