import React from "react";
import Skill from "./skill";
import classes1 from "../Style/Section.module.css";
import classes from "./Skills.module.css";

function Skills(props) {
  const skills = Object.keys(props.data);
  return (
    <div className={classes1.section}>
      <h2 className={classes1["section-title"]}>skills</h2>
      <div className={classes1["section-body"]}>
        <ul className={classes["skills-list"]}>
          {skills.map((skill) => (
            <React.Fragment key={skill}>
              <Skill data={props.data[skill]}></Skill>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Skills;
