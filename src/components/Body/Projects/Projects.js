import React from "react";
import Project from "./Project";
import classes1 from "../Style/Section.module.css";
import classes from "./Projects.module.css";

function Projects(props) {
  const projects = Object.keys(props.data);
  return (
    <div className={classes1.section}>
      <h2 className={classes1["section-title"]}>projects</h2>
      <div className={classes1["section-body"]}>
        <ul className={classes["Projects-list"]}>
          {projects.map((project) => (
            <React.Fragment key={project}>
              <Project data={props.data[project]}></Project>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Projects;
