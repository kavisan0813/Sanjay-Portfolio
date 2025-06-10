import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Resume = () => {
  const handleDownload = () => {
    toast.success("🎉 Resume download started!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <section id="resume" className="bg-light py-5 text-center">
      <div className="container animate__animated animate__fadeInUp">
        <h2 className="fw-bold mb-4 text-primary">My Resume</h2>
        <p className="text-muted mb-4 fs-5">
          Explore my education, experience, and skills. Download the full resume below.
        </p>

        

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          onClick={handleDownload}
          className="btn btn-primary btn-lg px-4"
        >
          <i className="bi bi-download me-2"></i>
          Download Resume (PDF)
        </a>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default Resume;
