import React from "react";
import Project from "./Project";

function Projects(props) {
  const projects = Object.keys(props.data);
  return (
    <React.Fragment>
      <h2>projects</h2>
      <ul>
        {projects.map((project) => (
          <React.Fragment key={project}>
            <Project data={props.data[project]}></Project>
          </React.Fragment>
        ))}
      </ul>
    </React.Fragment>
  );
}
export default Projects;
