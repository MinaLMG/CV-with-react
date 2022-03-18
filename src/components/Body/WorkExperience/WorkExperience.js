import React from "react";
import Action from "./Action";
function WorkExperience(props) {
  const actions = Object.keys(props.data.actions);
  return (
    <div className={props.className}>
      <h2>{props.data.experience}</h2>
      <p>{props.data.company}</p>
      <p>{props.data.date}</p>
      <p>{props.data.city}</p>
      <p>{props.data.action}</p>
      {actions.map((action) => (
        <React.Fragment key={action}>
          <Action data={props.data.actions[action]}></Action>
        </React.Fragment>
      ))}
      {props.data.contact && <p>{props.data.contact}</p>}
    </div>
  );
}
export default WorkExperience;
