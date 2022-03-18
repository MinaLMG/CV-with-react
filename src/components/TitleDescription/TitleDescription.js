import React from "react";

function TitleDescription(props) {
  return (
    <React.Fragment>
      <h2>{props.data.title}</h2>
      <div>{props.data.description}</div>
    </React.Fragment>
  );
}
export default TitleDescription;
