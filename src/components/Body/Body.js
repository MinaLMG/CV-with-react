import React from "react";
import Achievements from "../Achievements/Achievements";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Volunteering from "./Volunteering/Volunteering";
import WorkExperiences from "./WorkExperience/WorkExperiences";
import classes from "./Body.module.css";
function Body(props) {
  return (
    <div className={classes["body"]}>
      <WorkExperiences
        data={props.data["work-experience"]}
        className={classes.section}
      ></WorkExperiences>
      <Projects
        data={props.data.projects}
        className={classes.section}
      ></Projects>
      <Skills data={props.data.skills} className={classes.section}></Skills>
      <Achievements
        data={props.data.achievements}
        className={classes.section}
      ></Achievements>
      <Education
        data={props.data.education}
        className={classes.section}
      ></Education>
      <Volunteering
        data={props.data.volunteering}
        className={classes.section}
      ></Volunteering>
    </div>
  );
}
export default Body;
