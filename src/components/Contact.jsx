import React, { useState } from "react";
import "../styling/Contact.css";

function Contact() {
  return (
    <section id="Contact" className="Contact">
      {/* Page Title */}
      <title>Contact</title>
      
      {/* Contact Information */}
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email:</h3>
          <p>
            <a href="mailto:abc@gmail.com" className="contact-link">
              abc@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Phone:</h3>
          <p>
            <a href="tel:+923451234343" className="contact-link">
              +92 345 1234343
            </a>
          </p>
        </div>
      </div>

      {/* Map Location */}
      <div className="map-container">
        <h3>Location:</h3>
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.242314469356!2d72.6787!3d32.0836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f0b8ffb2e5bf7%3A0x2c7b9c998f503aa!2sBilal%20Town%2C%20Jhelum%2C%20Pakistan!5e0!3m2!1sen!2s!4v1674897299873!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
