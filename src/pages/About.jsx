import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          <p className="about-intro">
            I'm a recent MCA graduate with a strong interest in web development,
            especially in crafting responsive, modern web applications using React.js.
          </p>

          <div className="about-details">
            <p>
              During my academic journey, I gained hands-on experience with technologies
              like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Python</strong>, and <strong>React</strong>.
              One of my key projects includes a <em>real-time sign language recognition system</em>
              using ESP32-CAM, showcasing my ability to merge software with hardware-based solutions.
            </p>
            <p>
              I'm a fast learner who loves clean code, good UI/UX, and purposeful functionality.
              I'm currently expanding into <strong>backend development</strong> and exploring <strong>AI integrations</strong>.
            </p>
          </div>

          <div className="skills-section">
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              <li>💻 HTML5</li>
              <li>🎨 CSS3</li>
              <li>⚙️ JavaScript</li>
              <li>⚛️ React.js</li>
              <li>🐍 Python</li>
              <li>🧠 AI Integration (Basics)</li>
            </ul>
          </div>

          <div className="timeline">
            <h3>Journey</h3>
            <ul>
              <li><span>2023-2025:</span> MCA @ [DR M.G.R Educational & Research Institute]</li>
              <li><span>2022:</span> Built first web app using React</li>
              <li><span>2024:</span> Completed IoT-based Sign Language Project</li>
              <li><span>Now:</span> Actively seeking Web Development opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        .about {
          background: var(--bg-color, #f9f9f9);
          color: var(--text-color, #333);
          padding: 60px 20px;
          animation: fadeIn 1s ease-in;
          display: flex;
          justify-content: center;
        }

        .about-container {
          max-width: 950px;
          text-align: center;
          animation: slideUp 1s ease-in-out;
        }

        .about-title {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: var(--text-color, #222);
        }

        .about-intro {
          font-size: 1.2rem;
          margin-bottom: 25px;
        }

        .about-details p {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 15px;
        }

        .skills-section {
          margin-top: 30px;
        }

        .skills-section h3 {
          margin-bottom: 10px;
          font-size: 1.5rem;
        }

        .skills-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
        }

        .skills-list li {
          background: rgba(0, 0, 0, 0.05);
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 500;
          transition: transform 0.3s;
        }

        .skills-list li:hover {
          transform: scale(1.05);
          background: #dbeafe;
        }

        .timeline {
          margin-top: 40px;
          text-align: left;
        }

        .timeline h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          text-align: center;
        }

        .timeline ul {
          list-style: none;
          padding-left: 0;
        }

        .timeline li {
          margin: 10px 0;
          padding-left: 20px;
          position: relative;
        }

        .timeline li::before {
          content: "•";
          color: #2575fc;
          font-size: 1.5rem;
          position: absolute;
          left: 0;
        }

        .timeline span {
          font-weight: bold;
          margin-right: 8px;
        }

        @keyframes slideUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default About;
