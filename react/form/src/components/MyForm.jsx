import React, { useState } from "react";

function MyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `First Name: ${firstName}\n` +
      `Last Name: ${lastName}\n` +
      `Gender: ${gender}\n` +
      `Age: ${age}\n` +
      `Hobbies: ${hobbies.join(", ")}`
    );
  };

  return (
    <div>
      <h2>React Form Example</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        {/* Age */}
        <div>
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        {/* Hobbies */}
        <div>
          <label>Hobbies: </label><br />
          <label>
            <input
              type="checkbox"
              value="Drawing"
              onChange={handleHobbyChange}
            />
            Drawing
          </label>
          <label>
            <input
              type="checkbox"
              value="Football"
              onChange={handleHobbyChange}
            />
            Football
          </label>
          <label>
            <input
              type="checkbox"
              value="Swimming"
              onChange={handleHobbyChange}
            />
            Swimming
          </label>
          <label>
            <input
              type="checkbox"
              value="Hiking"
              onChange={handleHobbyChange}
            />
            Hiking
          </label>
        </div>

        {/* Submit */}
        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default MyForm;