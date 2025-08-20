import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <div className="nav-l">
          <button>TH</button>
        </div>
        <div className="nav-r">
          <a href="#" target="_blank" className="home">
            Home
          </a>
          <a href="#" target="_blank" className="about">
            About
          </a>
          <a href="#" target="_blank" className="skills">
            Skills
          </a>
          <a href="#" target="_blank" className="experience">
            Experience
          </a>
          <a href="#" target="_blank" className="contact">
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
        <button className="btn-f">Contact Me</button>
        <button>View My Work</button>
      </div>
    </div>
  );
}

export default App;
