import React from "react";
import "../styling/Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="NavBarDiv">
          <div className="NavBarLeft">
            <a href="/" className="nav-link">
              Parfumèlle
            </a>
          </div>
          <div className="NavBarRight nav-links">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/about" className="nav-link">
              About
            </a>
            <a href="/collection" className="nav-link">
              Collection
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
