import React from "react";
import { FaHeart } from "react-icons/fa"; 
import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <br />
      <span>
        Made with <FaHeart className="love-icon" /> by{" "}
        <a
          href="https://www.linkedin.com/in/atinder-kumar/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Atinder Kumar
        </a>
      </span>
    </div>
  );
}

export default Footer;
