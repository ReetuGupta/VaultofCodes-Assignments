import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Header & Navbar */}
      <header className="header-container">
        <h1>Reetu Gupta</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About Me Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
                    I am a passionate web developer with a strong interest in the latest trends in technology,
                    particularly in MERN (MongoDB, Express.js, React, Node.js) stack development. I enjoy solving
                    problems step by step with a clear understanding, which helps me build efficient and scalable
                    applications. My journey in web development has led me to create several projects using front-end
                    technologies, and I am currently working on full-stack applications with the MERN stack.

                    Beyond coding, I have a deep love for traveling and reading, as they allow me to explore new
                    perspectives and keep learning continuously. My goal is to become a successful web developer,
                    contributing to innovative and impactful projects in the tech industry. With a mindset of continuous
                    improvement, I stay updated with emerging trends to build modern, user-friendly, and
                    high-performance web applications.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
          <li>Frontend Development (HTML, CSS, JavaScript)</li>
          <li>Problem-Solving & Algorithmic Thinking</li>
          <li>Backend & Database Management</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Razorpay Clone</h3>
            <p>A responsive clone of the Razorpay website built using HTML and Tailwind CSS.</p>
            <p>Live Demo: <a href="https://razorpay-clone-reetugupta.netlify.app/" target="_blank">View Project</a></p>
            <p>GitHub: <a href="https://github.com/ReetuGupta/Razorpay-Clone" target="_blank">View Code</a></p>
          </li>

          <li>
                        <h3>Parallax Website</h3>
                        <p>
                            A visually appealing parallax scrolling website designed using HTML and CSS. 
                            The site includes smooth scrolling effects and engaging animations.
                        </p>
                        <p>Live Demo: <a href="https://adventure-parallex.netlify.app/" target="_blank">View Project</a></p>
                        <p>GitHub: <a href="https://github.com/ReetuGupta/Parallax-Website" target="_blank">View Code</a></p>
                    </li>
            
                    <li>
                        <h3>My Gallery Website</h3>
                        <p>
                            A personal gallery website showcasing different images and layouts using HTML and CSS. 
                            Features include a grid-based structure and responsive design.
                        </p>
                        <p>Live Demo: <a href="https://gallery-my-image.netlify.app/" target="_blank">View Project</a></p>
                        <p>GitHub: <a href="https://github.com/ReetuGupta/My-Gallery" target="_blank">View Code</a></p>
                    </li>
        </ul>
      </section>

      {/* Contact Modal */}
      <section id="contact">
        <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
          Contact Me
        </button>

        {isOpen && (
          <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={() => setIsOpen(false)}>
                &times;
              </span>
              <h2>Contact Me</h2>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
                <p>Email: <a href="mailto:reetu.gupta703@gmail.com">reetu.gupta703@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/reetugupta07" target="_blank">linkedin.com/in/reetugupta07</a></p>
                <p>GitHub: <a href="http://github.com/ReetuGupta" target="_blank">github.com/ReetuGupta</a></p>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer-container">
        <p>&#169; 2025 Reetu Gupta. All rights reserved.</p>
      </footer>

      {/* CSS */}
      <style>{`
        body {
          font-family: "Roboto", serif;
          background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
          color: #000000;
          margin: 0;
          padding:0;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background-image: linear-gradient(to right, #2c3e50 0%, #4ca1af 100%);
          color: #ffffff;
        }

        .header-container h1 {
    margin: 0;
    font-size: 26px;
    text-shadow: 2px 2px 10px #808080;
}

        nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 20px;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 20px;
          padding: 0;
          margin: 0;
        }

        nav ul li a {
          color: #ffffff;
          text-decoration: none;
          font-size: 18px;
          font-weight: bold;
          padding: 8px 12px;
          transition: 0.3s;
        }

        nav ul li a:hover {
          background-color: #e2ebf0;
          color: #2c3e50;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .header-container {
            flex-direction: column;
            text-align: center;
          }

          nav ul {
            flex-direction: column;
            gap: 10px;
          }
        }

        section {
          padding: 20px;
          
        }

        p{
        text-align: justify;
        }

        .open-modal-btn {
          padding: 10px 15px;
          background-color: #2c3e50;
          color: #ffffff;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 5px;
        }

        .modal-overlay {
          position: fixed;
          top: 10%;
          left: 20%;
          width: 50%;
          height: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background: #2c3e50;;
          padding: 25px;
          border-radius: 12px;
          width: 90%;
          max-width: 400px
          text-align: center;
          color: #ffffff;
          position: relative;
           animation: fadeIn 0.3s ease-in-out;
        }

        .modal-content input, .modal-content textarea {
          width: 100%;
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #cccccc;
          border-radius: 8px;
          color: #000000;
          font-size: 14px;
          background-color:rgb(248, 248, 248);
        }

        .modal-content button {
          padding: 12px 18px;
          background-color: #4ca1af;
          margin: 0 auto;
          color: #ffffff;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        .modal-content button:hover {
        background-color:rgba(76, 162, 175, 0.62);
        }

        @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
        }

        .close-btn {
          position: absolute;
          top: 12px;
          right: 15px;
          font-size: 22px;
          cursor: pointer;
          color:#ffffff;
          font-weight:bold;
        }

        @media (max-width: 500px) {
          .modal-content {
            width: 95%;
            max-width: 350px;
            padding: 20px;
          }
        }

        .footer-container {
          text-align: center;
          background-color: #2c3e50;
          color: #ffffff;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}

export default App;
