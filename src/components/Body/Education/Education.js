import React from "react";
import TitleDescription from "../../TitleDescription/TitleDescription";
import classes1 from "../Style/Section.module.css";
function Education(props) {
  const education = Object.keys(props.data);
  return (
    <div className={classes1.section}>
      <h2 className={classes1.title}>Education</h2>
      {education.map((edu) => (
        <React.Fragment key={edu}>
          <TitleDescription data={props.data[edu]}></TitleDescription>
        </React.Fragment>
      ))}
    </div>
  );
}
export default Education;
