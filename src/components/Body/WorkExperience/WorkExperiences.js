import WorkExperience from "./WorkExperience";
import classes1 from "../Style/Section.module.css";
import React from "react";
import classes from "./WorkExperiences.module.css";
function WorkExperiences(props) {
  const experiences = Object.keys(props.data);
  return (
    <div className={`${classes1.section}`}>
      <h2 className={classes1["section-title"]}>work experience</h2>
      <div className={classes1["section-body"]}>
        {experiences.map((experience) => (
          <React.Fragment key={experience}>
            <WorkExperience data={props.data[experience]}></WorkExperience>
          </React.Fragment>
        ))}
        <div className={classes1["section-body"]}></div>
      </div>
    </div>
  );
}
export default WorkExperiences;
