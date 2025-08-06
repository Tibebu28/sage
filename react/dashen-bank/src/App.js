

function App() {
  return (
    <div>
      <h1>Welcome to Dashen Bank</h1>
      <br/>
      <form>
        <label for="Fname">First Name:</label>
        <input type="text" id="Fname" name="Fname" placeholder="Enter your name" required />
        <br/>
        <label for="Lname">Last Name:</label>
        <input type="text" id="Lname" name="Lname" placeholder="Enter your last name" required />
        <br/>
        
        <tr>Gender:</tr>
        <input type="radio" id="GenderMale" name="Gender" />Male
        <input type="radio" id="GenderFemale" name="Gender" />Female
        <br/><br/>
        <label for="number">Age:</label>
        <input type="number" id="age" name="age" min="1" max="100" required />
        <h3>Hobbies</h3>
        <label for="music">Music</label>
        <input type="checkbox" id="music" name="music" value="music" />
        <br/>
        <label for="foot ball">Foot ball</label>
        <input type="checkbox" id="footBall" name="footBall" value="footBall" />
        <br/>
        <label for="drawing">Drawing</label>
        <input type="checkbox" id="drawing" name="drawing" value="drawing" />
        <br/>
        <label for="swimming">Swimming</label>
        <input type="checkbox" id="swimming" name="swimming" value="swimming" />
        <br/>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default App;
