import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <div className="nav-l">
          <h3>Tibebu</h3>
        </div>
        <div className="nav-r">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>contact</li>
          </ul>
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
        <button>Contact Me</button>
        <button>View My Work</button>
      </div>
    </div>
  );
}

export default App;
