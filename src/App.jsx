import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <span id="title">Age Calculator</span>
      <form action="/">
        <label htmlFor="date">Enter your birth date:</label>
        <input type="date" id="date" />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default App;
