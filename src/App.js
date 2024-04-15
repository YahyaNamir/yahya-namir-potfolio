import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
// import Testimonial from "./components/testimonails/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Project from "./components/project/Project";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Project />
        {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
