import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Collection from "./Collection";
import Contact from "./Contact";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/collection" element={<Collection />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
