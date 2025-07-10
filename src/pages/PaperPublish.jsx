import React from "react";
import { FaDownload,  } from "react-icons/fa";

const papers = [
  {
    title: "SMART AGRO AI: INTELLIGENT FORECASTING FOR CROPS, FERTILIZERS, AND PLANT HEALTH",
    description:
      "This paper presents a comprehensive AI-driven system for agricultural forecasting, focusing on crop yield prediction, fertilizer optimization, and plant health monitoring.",
    journal: "International Research Journal of Modern Engineering and Technology (IRJMETS)",
    download: "/agro-ai-paper.pdf",         // Place file in public/papers/
  },

];

const PaperPublish = () => {
  return (
    <section id="papers" className="papers-section">
      <h2>📄 Published Papers</h2>
      <div className="paper-list">
        {papers.map((paper, index) => (
          <div className="paper-card" key={index}>
            <h3>{paper.title}</h3>
            <p><strong>Journal:</strong> {paper.journal}</p>
            <p>{paper.description}</p>
            <div className="paper-actions">
              <a
                href={paper.download}
                download
                className="paper-download"
              >
                <FaDownload /> Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .papers-section {
          padding: 60px 20px;
          background-color: #111;
          color: #eee;
          text-align: center;
        }

        .papers-section h2 {
          font-size: 2rem;
          margin-bottom: 30px;
        }

        .paper-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 800px;
          margin: auto;
        }

        .paper-card {
          background-color: #222;
          padding: 20px;
          border-radius: 10px;
          text-align: left;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
        }

        .paper-card h3 {
          margin: 0 0 10px;
          font-size: 1.4rem;
        }

        .paper-card p {
          margin: 5px 0;
          font-size: 0.95rem;
        }

        .paper-actions {
          margin-top: 10px;
          display: flex;
          gap: 20px;
        }

        .paper-link, .paper-download {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #00aced;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .paper-link:hover, .paper-download:hover {
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default PaperPublish;
