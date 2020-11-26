import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState(0);

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      const val = event.target.value;
      if (!isNaN(val)) setTime(parseInt(val, 10));
    }
  }
  const timer = () => setTime(time - 1);
  useEffect(() => {
    if (time <= 0) {
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [time]);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
