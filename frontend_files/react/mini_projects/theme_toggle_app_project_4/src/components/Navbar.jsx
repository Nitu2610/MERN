import React, { useContext } from "react";
import { ThemeContext } from "../App";

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "20px",
        textAlign: "center",
        backgroundColor: theme == "light" ? "black" : "white",
        color: theme == "light" ? "white" : "black",
      }}
    >
      Navbar - Current Theme is: <strong>{(theme || "").toUpperCase()} </strong>{" "}
    </div>
  );
};
