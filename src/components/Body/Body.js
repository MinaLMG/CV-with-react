import React from "react";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import WorkExperiences from "./WorkExperience/WorkExperiences";

function Body(props) {
  return (
    <React.Fragment>
      <WorkExperiences data={props.data["work-experience"]}></WorkExperiences>
      <Projects data={props.data.projects}></Projects>
      <Skills data={props.data.skills}></Skills>
    </React.Fragment>
  );
}
export default Body;
