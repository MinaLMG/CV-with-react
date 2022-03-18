import React from "react";
import Skill from "./skill";
function Skills(props) {
  const skills = Object.keys(props.data);
  return (
    <div>
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
