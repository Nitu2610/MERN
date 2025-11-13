import { useState } from "react";
import "./App.css";

// ❗ Timer is declared outside — global to this module
let timer;

function App() {
  return (
    <>
      <h1>Counter Application</h1>
      <Counter />
    
    </>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    if (timer) return; // prevent multiple intervals
    timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const handleDecreaseCount = () => {
    clearInterval(timer);
    
  };

  return (
    <div style={{ margin: "1rem", border: "1px solid gray", padding: "1rem" }}>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncreaseCount}>Start Count {count}</button>
      <button onClick={handleDecreaseCount}>Stop Counter</button>
    </div>
  );
};

export default App;
