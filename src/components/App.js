import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState(0);

  function handleKeyDown(event) {
    const val = event.target.value;
    if (event.keyCode === 13) {
      console.log(val);
      if (!val || val.length === 0) setTime(0);
      if (!isNaN(val)) setTime(parseInt(val, 10));
      else setTime(0);
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
