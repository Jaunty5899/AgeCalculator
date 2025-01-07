import { useState } from "react";
import "./App.css";

function App() {
  const [date, setdate] = useState();

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
    </div>
  );
}

export default App;
