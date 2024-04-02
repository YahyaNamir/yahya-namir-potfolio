import React from "react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <div className="home__scroll-button button--flex">
        <svg
          width="32px" // Adjust the width as needed
          height="32px" // Adjust the height as needed
          className="home__scroll-mouse" // Use className instead of class
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" // Corrected attribute name
          style={{
            // Use inline style to apply CSS
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="wheel" // Use className instead of class
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokeWidth: "20px", // Adjust the stroke width as needed
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokeWidth: "20px", // Adjust the stroke width as needed
            }}
          ></path>
        </svg>
        <span className="home__scroll-name">Scroll Down</span>
        <i class="uil uil-arrow-down home__scroll-arrow"></i>
      </div>
    </div>
  );
};

export default ScrollDown;
