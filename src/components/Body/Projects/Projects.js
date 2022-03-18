import React from "react";
import Project from "./Project";
import calsses1 from "../Style/Section.module.css";

function Projects(props) {
  const projects = Object.keys(props.data);
  return (
    <div className={props.className}>
      <h2>projects</h2>
      <ul>
        {projects.map((project) => (
          <React.Fragment key={project}>
            <Project data={props.data[project]}></Project>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
export default Projects;
