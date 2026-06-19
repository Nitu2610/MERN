import { Container, List } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router";

export const Navbar = () => {
  const options = ["Home", "About", "Login", "Dashboard"];

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "grey",
        height: "40px",
        fontSize: "20px",
      }}
    >
      {options.map((item) => {
        return (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) => (isActive ? "navActive" : "")}
          >
            {item}
          </NavLink>
        );
      })}
    </Container>
  );
};
