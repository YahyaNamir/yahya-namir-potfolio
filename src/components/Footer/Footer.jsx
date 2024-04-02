import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">YAHYA NAMIR </h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/yahya-namir-25776126a/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/YahyaNamir"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.instagram.com/yeehyaa_01?igsh=MTQ1OHNwdTk5bDhmcQ=="
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy"> © 2024. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
