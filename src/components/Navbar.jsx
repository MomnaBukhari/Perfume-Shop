import React, { useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

function Navbar() {
  const showerRef = useRef(null);

  const generateSymbols = () => {
    const symbols = [
      "🫧",
      "💜",
      "❤️",
      "💗",
      "🩷",
      "💛",
      "💕",
      "🤍",
      "💞",
      "🩵",
      "💚",
      "🦩",
      "🦋",
      "💎",
      "🌹",
      "🌺",
      "🌼",
      "🌷",
      "🌻",
      "💐",
      "🌸",
      "🪻",
      "🍀",
      "🌺🌷💗",
      "🪻💜💐",
      "🩵💎🫧",
    ];
    const count = 50;

    for (let i = 0; i < count; i++) {
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      const div = document.createElement("div");
      div.className = "shower-symbol";
      div.textContent = symbol;

      div.style.left = `${Math.random() * 100}%`;
      div.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;

      showerRef.current.appendChild(div);

      gsap.to(div, {
        y: 100 + Math.random() * 300,
        opacity: 0,
        scale: Math.random() * 1.5 + 0.5,
        duration: 4 + Math.random(),
        ease: "power1.out",
        onComplete: () => div.remove(),
      });
    }
  };

  return (
    <nav className="NavBar" onMouseEnter={generateSymbols}>
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Parfumèlle
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-item">
          <span className="nav-circle"></span>
          <span className="nav-label">Home</span>
        </Link>
        <Link to="/about" className="nav-item">
          <span className="nav-circle"></span>
          <span className="nav-label">About</span>
        </Link>
        <Link to="/collection" className="nav-item">
          <span className="nav-circle"></span>
          <span className="nav-label">Collection</span>
        </Link>
        <Link to="/contact" className="nav-item">
          <span className="nav-circle"></span>
          <span className="nav-label">Contact</span>
        </Link>
      </div>

      <div className="shower-container" ref={showerRef}></div>
    </nav>
  );
}

export default Navbar;
