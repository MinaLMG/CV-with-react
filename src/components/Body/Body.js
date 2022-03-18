import React from "react";
import Projects from "./Projects/Projects";
import WorkExperiences from "./WorkExperience/WorkExperiences";

function Body(props) {
  return (
    <React.Fragment>
      <WorkExperiences data={props.data["work-experience"]}></WorkExperiences>
      <Projects data={props.data.projects}></Projects>
    </React.Fragment>
  );
}
export default Body;
