import React, { useContext } from 'react'
import { ThemeContext } from '../App';

export const Footer = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "20px",
        textAlign: "center",
        backgroundColor: theme == "light" ? "grey" : "#15f4ee",
        color: theme == "light" ? "white" : "#191970",
        fontSize:'20px'
      }}
    >
      Footer - Current Theme is: <strong>{(theme || "").toLowerCase()} </strong>{" "}
    </div>
  )
}
