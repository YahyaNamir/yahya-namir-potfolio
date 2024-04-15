import React from "react";
import "./project.css";
import portfolioIMG from "../../assets/portfolioIMG.png";
import DashBord from "../../assets/DashBord.png";
import taskManager from "../../assets/taskManager.png";

const Project = () => {
  const projects = [
    {
      title: "My Portfolio",
      image: portfolioIMG,
      demo: "https://yahya-namir.netlify.app",
      repo: "https://github.com/YahyaNamir/yahya-namir-potfolio",
      description: "Interactive portfolio built with React.js.",
    },
    {
      title: "Dashboard",
      image: DashBord,
      demo: "https://yahya-dashbord.netlify.app/",
      repo: "https://github.com/YahyaNamir/yahya-dashbord-social-media",
      description:
        "Comprehensive dashboard app using React.js for social media management.",
    },
    {
      title: "Task Manager",
      image: taskManager,
      demo: "https://yahya-task-manager.netlify.app/",
      repo: "https://github.com/YahyaNamir/myTaskManager",
      description: "Task management app with Redux and Tailwind CSS.",
    },
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">A selection of my range</span>

      <div className="projects__container container grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project__data">
              <div className="project__img-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project__img"
                />
              </div>
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.demo}
                className="project__button button--flex button--small button--link"
              >
                Demo<i className="uil uil-arrow-right button__icon"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.repo}
                className="project__button button--flex button--small button--link"
              >
                GitHub<i className="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
