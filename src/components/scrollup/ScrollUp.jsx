import React from "react";
import "./scrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <>
      <button className="scrollup" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </button>
    </>
  );
};

export default ScrollUp;
