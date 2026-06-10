import React, { useRef, useState } from "react";
import "./App.css";

export const Stopwatch = () => {
  let [time, setTimer] = useState(0);
  let timerRef = useRef(null);

  document.title = `Stopwatch ${time}`;
  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleReset = () => {
    setTimer(0);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div id="container">
      <h2>Timer: {time}</h2>
      <div id="childBox">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
