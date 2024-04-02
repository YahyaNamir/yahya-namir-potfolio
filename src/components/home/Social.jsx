import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/yahya-namir-25776126a/"
        className="home__social-icon"
        target="_blank" rel="noopener noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/YahyaNamir"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer" 
      >
        <i class="uil uil-github"></i>
      </a>

      <a
        href="mailto:yahyanamir5@gmail.com"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-envelope"></i>
      </a>
    </div>
  );
};

export default Social;
