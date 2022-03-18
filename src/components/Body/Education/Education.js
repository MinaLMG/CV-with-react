import React from "react";
import TitleDescription from "../../TitleDescription/TitleDescription";
function Education(props) {
  const education = Object.keys(props.data);
  return (
    <React.Fragment>
      <h2>Education</h2>
      {education.map((edu) => (
        <React.Fragment key={edu}>
          <TitleDescription data={props.data[edu]}></TitleDescription>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
export default Education;
