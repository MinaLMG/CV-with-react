import React from "react";
import classes from "./TitleDescription.module.css";
function TitleDescription(props) {
  return (
    <React.Fragment>
      <h2 className={classes.title}>{props.data.title}</h2>
      {props.data.description && (
        <div className={classes.description}>{props.data.description}</div>
      )}
    </React.Fragment>
  );
}
export default TitleDescription;
