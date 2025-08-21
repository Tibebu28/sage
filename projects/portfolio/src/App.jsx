import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <div className="nav-l" id="home">
          <button>HT</button>
        </div>
        <div className="nav-r">
          <a href="#home" target="_self" className="home">
            Home
          </a>
          <a href="#about" target="_self" className="about">
            About
          </a>
          <a href="#skills" target="_self" className="skills">
            Skills
          </a>
          <a href="#contact" target="_self" className="contact">
            contact
          </a>
        </div>
      </nav>
      <div className="text">
        <p>
          Hellow,I'm <br />
          <span>Tibebu Hailu</span>
          <br />
          MERN stack junior developer in sage school
        </p>
      </div>
      <div className="btn">
        <button className="btn-f">
          <a href="#contact">contact</a>
        </button>
        <button>
          <a href="#skills">skills</a>
        </button>
      </div>
      <div className="about" id="about">
        <h2>About</h2>
        <p>
          Hi! I’m Tibebu, <br /> a Fullstack Developer and a student at sage
          School. I’m passionate about building web applications that are not
          only functional but also beautiful and user-friendly. I enjoy working
          with both frontend (HTML, CSS, JavaScript, React) and backend
          (Node.js, Express, databases) technologies. My goal is to create
          innovative projects that solve real problems and improve the user
          experience. I love learning new technologies and constantly improving
          my skills in web development.
        </p>
      </div>
      <div className="skills" id="skills">
        <h2>Skills</h2>
        <p>
          I work with frontend technologies like HTML, CSS and React, and
          programming language C++ and Java Script.
        </p>
        <button className="main-btn">
          <span>Frontend</span>
          <button>HTML</button>
          <button>Css</button>
          <button>React</button>
        </button>
        <button className="main-btn">
          <span>Programming Language</span>
          <button>C++</button>
          <button>Java Script</button>
        </button>
        <button className="main-btn">
          <span>Other tools</span>
          <button>Figma</button>
          <button>Git Hub</button>
        </button>
      </div>
      <div className="contact" id="contact">
        <h3>Contact</h3>
        <p>
          Feel free to reach out via email I’d love to connect and discuss new
          projects.
        </p>
        <button>
          <form action="post">
            <label htmlFor="name">Your Name:</label>
            <input type="text" placeholder="Enter your full name" required />
            <label htmlFor="Email">Email:</label>
            <input type="email" placeholder="Enter your full name" required />
            <h4>Message</h4>
            <textarea
              placeholder="Your message here..."
              rows="10"
              cols="100"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </button>
      </div>
      <div className="footer">
        <button>
          <a href="#home" target="_self">
            Home
          </a>
        </button>
        <button>
          <a href="about" target="_self">
            About
          </a>
        </button>
        <button>
          <a href="#skills" target="_self">
            Skills
          </a>
        </button>
        <button>
          <a href="#contact" target="_self">
            Contact
          </a>
        </button>
        <div className="fotter-l">
          <p>&copy;2025 Tibebu Hailu. All right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
