import React from "react";
import Skill from "./skill";
import calsses1 from "../Style/Section.module.css";

function Skills(props) {
  const skills = Object.keys(props.data);
  return (
    <div className={props.className}>
      <h2>skills</h2>
      <ul>
        {skills.map((skill) => (
          <React.Fragment key={skill}>
            <Skill data={props.data[skill]}></Skill>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
export default Skills;
