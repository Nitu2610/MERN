import React, { useEffect, useRef, useState } from "react";

export const InputBox = () => {
  const [name, setName] = useState("Nitesh");
  let prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div  style={styles.container}>
      <input
        type="text"
        placeholder="Enter the name"
        value={name}
        onChange={handleNameChange}
        style={styles.input}
      />
      <h2 style={styles.text}>Previous Name: {prevName.current}</h2>
      <h2 style={styles.text}>Current Name: {name}</h2>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Poppins, sans-serif",
  },
  input: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    width: "220px",
    marginBottom: "20px",
  },
  text: {
    color: "#333",
  },
};
