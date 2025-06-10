import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulate delay or reset form
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="contact-container">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle">
            Have a question or want to work together? Fill out the form below!
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          {submitted && (
            <p className="success-message">✅ Message sent successfully!</p>
          )}

          <div className="contact-info">
            <p><strong>Email:</strong> sandeepkrsk08@example.com</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sandeepkrishsk" target="_blank" rel="noreferrer">linkedin.com/in/sandeepkrishsk</a></p>
          </div>
        </div>
      </section>

      <style>{`
        .contact {
          background-color: #f7f7f7;
          padding: 60px 20px;
          animation: fadeIn 1s ease-in;
        }

        .contact-container {
          max-width: 700px;
          margin: auto;
          text-align: center;
          animation: slideUp 1s ease-in-out;
        }

        .contact-title {
          font-size: 2.2rem;
          margin-bottom: 10px;
          color: #222;
        }

        .contact-subtitle {
          font-size: 1rem;
          margin-bottom: 30px;
          color: #444;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 20px;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          width: 100%;
        }

        .contact-form button {
          background-color: #2575fc;
          color: #fff;
          padding: 12px;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #1a5edc;
        }

        .success-message {
          color: green;
          font-weight: bold;
          margin-top: 10px;
        }

        .contact-info p {
          margin: 5px 0;
          font-size: 0.95rem;
        }

        .contact-info a {
          color: #2575fc;
          text-decoration: none;
        }

        .contact-info a:hover {
          text-decoration: underline;
        }

        @keyframes slideUp {
          0% {
            transform: translateY(40px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Contact;
