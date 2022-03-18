import WorkExperience from "./WorkExperience";
import calsses1 from "../Style/Section.module.css";
import React from "react";
function WorkExperiences(props) {
  const experiences = Object.keys(props.data);
  return (
    <div className={props.className}>
      <h2 className="section-title">work experience</h2>
      {experiences.map((experience) => (
        <React.Fragment key={experience}>
          <WorkExperience data={props.data[experience]}></WorkExperience>
        </React.Fragment>
      ))}
    </div>
  );
}
export default WorkExperiences;
