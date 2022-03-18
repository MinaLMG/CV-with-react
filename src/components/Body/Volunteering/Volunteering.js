import React from "react";
import TitleDescription from "../../TitleDescription/TitleDescription";
import calsses1 from "../Style/Section.module.css";

function Volunteering(props) {
  const volunteering = Object.keys(props.data);
  return (
    <div className={props.className}>
      <h2>Volunteering Activities</h2>
      {volunteering.map((vol) => (
        <React.Fragment key={vol}>
          <TitleDescription data={props.data[vol]}></TitleDescription>
        </React.Fragment>
      ))}
    </div>
  );
}
export default Volunteering;
