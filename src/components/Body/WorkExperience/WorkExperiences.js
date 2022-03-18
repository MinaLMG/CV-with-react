import WorkExperience from "./WorkExperience";
import React from "react";
function WorkExperiences(props) {
  const experiences = Object.keys(props.data);
  return (
    <div>
      <h2>work experience</h2>
      {experiences.map((experience) => (
        <React.Fragment key={experience}>
          <WorkExperience data={props.data[experience]}></WorkExperience>
        </React.Fragment>
      ))}
    </div>
  );
}
export default WorkExperiences;
