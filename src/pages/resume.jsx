import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaDownload } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Resume = () => {
  const handleDownload = () => {
    toast.success("🎉 Resume download started!", {
      position: "bottom-right",
      autoClose: 2500,
    });
  };

  return (
    <section id="resume" className="py-5 bg-light text-center">
      <div className="container animate__animated animate__fadeInUp">
        <h2 className="fw-bold mb-3 text-primary fs-1">My Resume</h2>
        <p className="text-muted fs-5 mb-4">
          Click below to download my resume in PDF format.
        </p>

        {/* Bootstrap-styled Download Button */}
        <a
          href="/SANJAY RESUME.pdf"
          download
          onClick={handleDownload}
          className="btn btn-primary btn-lg px-4 d-inline-flex align-items-center gap-2"
        >
          <FaDownload className="mb-1" />
          Download Resume (PDF)
        </a>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </section>
  );
};

export default Resume;
