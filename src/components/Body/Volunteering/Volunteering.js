import React from "react";
import TitleDescription from "../../TitleDescription/TitleDescription";
function Volunteering(props) {
  const volunteering = Object.keys(props.data);
  return (
    <React.Fragment>
      <h2>Volunteering Activities</h2>
      {volunteering.map((vol) => (
        <React.Fragment key={vol}>
          <TitleDescription data={props.data[vol]}></TitleDescription>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
export default Volunteering;
