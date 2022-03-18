import React from "react";
import Achievements from "./Achievements/Achievements";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Volunteering from "./Volunteering/Volunteering";
import WorkExperiences from "./WorkExperience/WorkExperiences";
import classes from "./Body.module.css";
function Body(props) {
  return (
    <div className={classes["body"]}>
      <WorkExperiences data={props.data["work-experience"]}></WorkExperiences>
      <Projects data={props.data.projects}></Projects>
      <Skills data={props.data.skills} className={classes.section}></Skills>
      <Achievements data={props.data.achievements}></Achievements>
      <Education data={props.data.education}></Education>
      <Volunteering data={props.data.volunteering}></Volunteering>
    </div>
  );
}
export default Body;
