import React from "react";
import classes from "./TitleDescription.module.css";
function TitleDescription(props) {
  return (
    <div className={classes.td}>
      <h2 className={classes.title}>{props.data.title}</h2>
      {props.data.description && (
        <div className={classes.description}>{props.data.description}</div>
      )}
    </div>
  );
}
export default TitleDescription;
