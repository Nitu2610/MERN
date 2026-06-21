import { Container, Link } from "@chakra-ui/react";
import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  let options = [
    { lable: "Home", path: "/" },
    { lable: "Courses", path: "/courses" },
    { lable: "Login", path: "/login" },
    { lable: "Student Dashboard", path: "/student-dashboard" },
  ];

  return (
    <Container>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "grey",
          height: "40px",
          fontSize: "20px",
        }}
      >
        {options.map((item, i) => (
          <li key={i}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              {" "}
              {item.lable}{" "}
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
  );
};

//
// const options = ["Home", "Courses", "Login", "Student Dashboard"];
// Here we can see at the last element its "Student Dashboard", a space between both words. Due to it we can't dynamically set the path in NavLink or Link, so we update the array with a object with lable and path.
