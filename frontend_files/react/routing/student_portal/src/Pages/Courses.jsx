import React from "react";
import { Link } from "react-router-dom";

export const Courses = () => {
  const skills = [
    { lable: "React", id: 101 },
    { lable: "JavaScript", id: 102 },
    { lable: "Node.js", id: 103 },
  ];
  return (
    <>
      <div>Courses</div>
      <ul>
        {skills.map((skill, i) => (
          <li key={i} >
            <Link to={`/student/${skill.id}`}>
              {skill.lable}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
