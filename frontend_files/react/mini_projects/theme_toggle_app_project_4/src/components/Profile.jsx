import React, { useContext } from "react";
import { ThemeContext } from "../App";

export const Profile = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () =>
    setTheme((prev) => prev === "light" ? "dark": "light" );
  return (
    <button
      style={{
        marginBottom: "30px",
        height: "25px",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={handleClick}
    >
      Change Theme to{" "}
      {theme == "light" ? <strong> Dark</strong> : <strong> Light</strong>}
    </button>
  );
};
