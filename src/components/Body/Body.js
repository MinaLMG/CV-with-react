import React from "react";
import WorkExperiences from "./WorkExperience/WorkExperiences";

function Body(props) {
  return (
    <React.Fragment>
      <WorkExperiences data={props.data["work-experience"]}></WorkExperiences>
    </React.Fragment>
  );
}
export default Body;
