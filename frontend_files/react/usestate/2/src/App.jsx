import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Counter Application</h1>
      <Form />
    </>
  );
}

const Form = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  const handleFNameChanges = (e) => {
    setFName(e.target.value);
  };
  const handleLNameChanges = (e) => {
    setLName(e.target.value);
  };
  const handleReset = () => {
    setFName("");
    setLName("");
  };

  return (
    <div>
      <h2>UserDetails:</h2>
      <br />
      <label htmlFor="">First Name : </label>
      <input
        type="text"
        value={fname}
        placeholder="Enter the first name"
        onChange={handleFNameChanges}
      />
      <br />
      <label htmlFor="">Last Name : </label>
      <input
        type="text"
        value={lname}
        placeholder="Enter the last name"
        onChange={handleLNameChanges}
      />
      <button onClick={handleReset}>Reset</button>
      <br />
      <hr />
      <h3>
        Full Name: {fname} {lname}{" "}
      </h3>
    </div>
  );
};

export default App;
