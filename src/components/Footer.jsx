import React from "react";
import "../styling/Footer.css";

function Footer() {
  return (
    <>
      <div className="main_div_footer">
        <div>
          <a href="/" className="title-in-footer">
            <span className="sparkle">｡✧*･ﾟ </span>
            Parfumèlle
            <span className="sparkle"> ✧｡･*･ﾟ</span>
          </a>
        </div>
        <div>
          <p>All right reserved @ 2025</p>
        </div>
        <div>
          {" "}
          <p>
            <span className="sparkle">･ﾟ✧･ﾟ </span>
            Made with 💜 by MomnaBatool
            <span className="sparkle"> ✧･ﾟ: *✧･ﾟ:* </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
