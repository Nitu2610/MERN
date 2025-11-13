import { useState } from "react";
import "./App.css";

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
    console.log("before:", count);
    setTimeout(() => {
      setCount(prev=> {
        const updatedCount=prev+=1;
       console.log("after ", updatedCount);
      return updatedCount;});
    }, 1000);
    
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncreaseCount}>Increase Count {count}</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
