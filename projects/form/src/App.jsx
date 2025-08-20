import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="form">
        <h2>Register</h2>
        <form action="posts">
          <label htmlFor="fn">First Name: </label>
          <input
            type="text"
            name="fn"
            placeholder="Enter your first name"
            required
          />
          <br />
          <label htmlFor="ln">Last Name: </label>
          <input
            type="text"
            name="ln"
            placeholder="Enter your last name"
            required
          />
          <br />
          <label htmlFor="gender" className="gender">
            Gender:
          </label>
          <input type="radio" name="gender" required />
          <span>male</span>
          <input type="radio" name="gender" />
          <span>female</span>
          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <br />
          <label htmlFor="phone">Phone number: </label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone"
            min="900000000"
            max="9999999999"
            required
          />
          <br />
          <label htmlFor="password">password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <br />
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    </div>
  );
}
export default App;
