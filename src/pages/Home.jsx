import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <>
      <section id="home" className={`home ${isDarkMode ? "dark" : "light"}`}>
        <div className="overlay"></div>

        {/* 🌗 Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div className="intro-container">
          <img src="/images/sandeep.jpg" alt="Sandeep Krishnan profile" className="profile-pic" />

          {/* 🚀 Social Links */}
          <div className="social-links">
            <a href="https://github.com/Sandeepkrish8" target="_blank" rel="noopener noreferrer">
              <img src="/images/github.gif" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/sandeepkrishsk" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkin.gif" alt="LinkedIn" />
            </a>
            <a href="mailto:sandeepkrsk08@example.com">
              <img src="/images/mail.gif" alt="Email" />
            </a>
          </div>

          <h1 className="intro-title"><span className="typewriter">Hi, I'm Sandeep Krishnan👋</span></h1>
          <p className="intro-subtitle">Aspiring Web Developer | MCA Graduate</p>

          <div className="intro-description">
            <p>
              I’m passionate about building interactive and accessible web applications.
              With strong foundations in Python, JavaScript, and React, I aim to contribute
              to meaningful and impactful projects.
            </p>
            <p>
              I love solving real-world problems, especially through smart UI and clean
              code. I'm currently exploring backend development and AI integration.
            </p>
          </div>

          <div className="cta-buttons">
            <a href="#projects" className="btn primary">🚀 See My Work</a>
            <a href="#contact" className="btn secondary">📬 Contact Me</a>
          </div>

          <div className="scroll-indicator">⬇ Scroll</div>
        </div>
      </section>

      <style>{`
        body.dark-mode {
          background-color: #111;
          color: #eee;
        }

        .home {
          position: relative;
          background: url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600') no-repeat center center/cover;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          overflow: hidden;
          color: white;
        }

        .home.dark {
          background: #111;
          color: white;
        }

        .home.light {
          color: white;
        }

        .overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }

        .theme-toggle {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          font-size: 1.6rem;
          color: white;
          cursor: pointer;
          z-index: 3;
        }

        .intro-container {
          position: relative;
          z-index: 2;
          max-width: 800px;
          text-align: center;
          animation: fadeIn 1.5s ease-in-out;
        }

        .profile-pic {
          width: 140px;
          height: 140px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid white;
          margin-bottom: 10px;
          box-shadow: 0 0 10px rgba(255,255,255,0.6);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
          animation: fadeIn 2s ease-in;
        }

        .social-links a {
          display: inline-block;
          width: 40px;
          height: 40px;
        }

        .social-links img {
          width: 100%;
          height: 100%;
          filter: brightness(0) invert(1);
          transition: transform 0.3s, filter 0.3s;
        }

        .social-links img:hover {
          transform: scale(1.2);
          filter: brightness(1.5);
        }

        .intro-title {
          font-size: 2.8rem;
          margin-bottom: 10px;
        }

        .intro-subtitle {
          font-size: 1.3rem;
          margin-bottom: 25px;
        }

        .intro-description p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .cta-buttons {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .btn {
          padding: 12px 24px;
          font-weight: bold;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn.primary {
          background-color: #fff;
          color: #2575fc;
        }

        .btn.primary:hover {
          box-shadow: 0 0 12px #fff;
        }

        .btn.secondary {
          border: 2px solid #fff;
          color: white;
          background-color: transparent;
        }

        .btn.secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 12px #fff;
        }

        .scroll-indicator {
          margin-top: 40px;
          font-size: 1.2rem;
          animation: bounce 2s infinite;
          opacity: 0.8;
        }

        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid white;
          animation: typing 2.5s steps(30, end), blink 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          50% { border-color: transparent }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Home;
