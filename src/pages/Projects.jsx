import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "DRIZZLE",
      description: "Drizzle is small scale project which includes event handler function to pull-off the events in display.",
      github: "https://github.com/Sandeepkrish8/sign-language-recognition",
      live: "https://drizzles-indol.vercel.app/",
      imgSrc: "/images/drizzle.png", // add this image in public/images
    },
    {
      title: "To-Do List",
      description: "A simple to-do list application built with React.",
      github: "https://github.com/Sandeepkrish8/react-portfolio",
      live: "https://to-do-list-nine-phi-84.vercel.app/",
      imgSrc: "/images/todo.png", // add this image in public/images
    },
    {
      title: "HairGrow+",
      description: "HairGrow+ is a web application that provides personalized hair care recommendations using AI.",
      github: "https://github.com/Sandeepkrish8/weather-app",
        live: "https://growx-weather-app.vercel.app/",
      imgSrc: "/images/HairX.png", // add this image in public/images
    },
  ];

  return (
    <>
      <section id="projects" className="projects">
        <div className="projects-container">
          <h2 className="projects-title">My Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.imgSrc} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub Repo
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .projects {
          background: #fff;
          padding: 60px 20px;
        }

        .projects-container {
          max-width: 1000px;
          margin: auto;
          text-align: center;
        }

        .projects-title {
          font-size: 2.5rem;
          margin-bottom: 30px;
        }

        .project-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .project-card {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          zoomin: 1.02;
        }

        .project-image {
          width: 100%;
          height: auto;
          max-height: 180px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
          display: zoom-in;
          transition: transform 0.3s ease;
        }

        .project-link {
          display: inline-block;
          margin-top: 8px;
          margin-right: 10px;
          color: #2575fc;
          font-weight: bold;
          text-decoration: none;
        }

        .project-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Projects;
