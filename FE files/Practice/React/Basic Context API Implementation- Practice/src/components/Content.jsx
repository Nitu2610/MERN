import React, { useContext } from "react";
import { UserContextAPI } from "../contextAPI/UserContextAPI";

export const Content = () => {
  const { name, theme } = useContext(UserContextAPI);
  return (
    <div
      style={{
        color: theme === "light" ? "black" : "white",
        backgroundColor: theme === "light" ? "lightBlue" : "red",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "40px" }}>
        The Context API App
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        voluptates magnam nulla nihil fugiat voluptas, aut minima aspernatur sed
        rem, officia repellat vel dolorem, at ut quibusdam fugit facilis
        eligendi.
      </p>
      <br />
      <h2>My name is {name}</h2>
    </div>
  );
};
