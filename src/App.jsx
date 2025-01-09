import { useState } from "react";
import { DateTime } from "luxon";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);
  let current = DateTime.now().c.year;
  let DoB;
  return (
    <div className="container">
      <span id="title">Age Calculator</span>
      <form action="/">
        <label htmlFor="date">Enter your birth date:</label>
        <input
          type="date"
          id="date"
          onChange={(e) => {
            DoB = DateTime.fromISO(e.target.value).c.year;
            setAge(current - DoB);
          }}
        />
        {/* <button type="submit">Calculate</button> */}
      </form>
      <span id="ageBlock">You are {age} years old.</span>
    </div>
  );
}

export default App;
