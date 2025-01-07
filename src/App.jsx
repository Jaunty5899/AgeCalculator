import { useState } from "react";
import { DateTime } from "luxon";
import "./App.css";

function App() {
  const [age, setAge] = useState();
  return (
    <div className="container">
      <span id="title">Age Calculator</span>
      <form action="/">
        <label htmlFor="date">Enter your birth date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => console.log(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
      <span id="ageBlock">You are 21 days 15 years old</span>
    </div>
  );
}

export default App;
