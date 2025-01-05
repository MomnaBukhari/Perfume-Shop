import React, { useState } from "react";
import Footer from "./Footer";
import "../styling/Contact.css";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMailbox = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="contact-container">
        <div className="left-half">
          <img
            className="contact-image"
            src="/images/communication.png"
            alt="Communication"
          />
        </div>
        <div className="right-half">
          <div className={`mailbox ${isOpen ? "open" : ""}`}>
            <label className="mail-label">Click ⭣</label>
            <div className="mailbox-lid" onClick={toggleMailbox}></div>
            {isOpen && (
              <div className="mailbox-paper" onClick={toggleMailbox}>
                <a href="mailto:smomnabatool@gmail.com">Send Mail</a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
