import { useState } from "react";
import { DateTime } from "luxon";
import "./App.css";

function App() {
  const [age, setAge] = useState({ years: 0, months: 0 });
  let current = DateTime.now().c;
  return (
    <div className="container">
      <span id="title">Age Calculator</span>
      <form action="/">
        <label htmlFor="date">Enter your birth date:</label>
        <input
          type="date"
          id="date"
          onChange={(e) => {
            setAge({
              years: current.year - DateTime.fromISO(e.target.value).c.year,
              months: -(
                current.month - DateTime.fromISO(e.target.value).c.month
              ),
            });
          }}
        />
        {/* <button type="submit">Calculate</button> */}
      </form>
      <span id="ageBlock">
        You are{" "}
        <strong>
          {age.years} years {age.months} months
        </strong>{" "}
        old
      </span>
    </div>
  );
}

export default App;
