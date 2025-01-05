import React, { useRef } from "react";
import { gsap } from "gsap";
import "../styling/Navbar.css";

function Navbar() {
  const showerRef = useRef(null);

  const generateSymbols = () => {
    const symbols = [
      "🫧", "💜", "❤️", "💗", "🩷", "💛", "💕", "🤍", "💞", "🩵", "💚", "🦩",
      "🦋", "💎", "🌹", "🌺", "🌼", "🌷", "🌻", "💐", "🌸", "🪻", "🍀", "🌺🌷💗",
      "🪻💜💐", "🩵💎🫧",
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
      <div className="NavBarDiv">
        <div className="NavBarLeft">
          <a href="/" className="nav-link">
            Parfumèlle
          </a>
        </div>
        <div className="NavBarRight nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/collection" className="nav-link">Collection</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
      </div>
      <div className="shower-container" ref={showerRef}></div>
    </nav>
  );
}

export default Navbar;
