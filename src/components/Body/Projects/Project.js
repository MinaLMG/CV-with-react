import React from "react";
import ProjectTask from "./ProjectTask";
import classes from "./Project.module.css";
function Project(props) {
  const tasks = Object.keys(props.data.tasks);
  return (
    <React.Fragment>
      <h2 className={classes["project-name"]}>{props.data.name}</h2>
      {tasks.map((task) => (
        <React.Fragment key={task}>
          <ProjectTask data={props.data.tasks[task]}></ProjectTask>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
export default Project;
