import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/Routes";
import initializeCursor from "./scripting/cursor";
import "./App.css";

function App() {
  useEffect(() => {
    initializeCursor();
  }, []);

  return (
    <>
      <BrowserRouter>
        <div id="cursor"></div>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
