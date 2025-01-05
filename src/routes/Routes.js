import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Collection from '../components/Collection';
import Contact from '../components/Contact';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<About />} />
    <Route path="/collection" element={<Collection />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
