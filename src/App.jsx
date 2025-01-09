import { useState } from "react";
import { DateTime } from "luxon";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);

  console.log(age);
  return (
    <div className="container">
      <span id="title">Age Calculator</span>
      <form action="/">
        <label htmlFor="date">Enter your birth date:</label>
        <input
          type="date"
          id="date"
          onChange={(e) => {
            console.log(e.target.value);
            setAge(
              Math.floor(
                DateTime.now().diff(DateTime.local(e.target.value), ["years"])
                  .years
              )
            );
          }}
        />
        <button type="submit">Calculate</button>
      </form>
      <span id="ageBlock">You are {age} years old.</span>
    </div>
  );
}

export default App;
