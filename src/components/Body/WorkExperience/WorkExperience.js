import React from "react";
import Action from "./Action";
import classes from "./WorkExperience.module.css";
function WorkExperience(props) {
  const actions = Object.keys(props.data.actions);
  return (
    <div className={classes["experience-container"]}>
      <h2 className={classes.experience}>{props.data.experience}</h2>
      <p className={classes["experience-company"]}>{props.data.company}</p>
      <div className={classes["experience-date-city-container"]}>
        <p className={classes["experience-date"]}>{props.data.date}</p>
        <p className={classes["experience-city"]}>{props.data.city}</p>
      </div>
      <div className={classes["experience-action-container"]}>
        <span className={classes["experience-action-span1"]}></span>
        <span className={classes["experience-action-span2"]}></span>
        <p className={classes["experience-action"]}>{props.data.action}</p>
        <ul className={classes["experience-list"]}>
          {actions.map((action) => (
            <React.Fragment key={action}>
              <Action data={props.data.actions[action]}></Action>
            </React.Fragment>
          ))}
        </ul>
      </div>
      {props.data.contact && (
        <p className={classes["experience-contact"]}>{props.data.contact}</p>
      )}
    </div>
  );
}
export default WorkExperience;
