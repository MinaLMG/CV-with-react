import React from "react";
import TitleDescription from "../TitleDescription/TitleDescription";
import classes1 from "../Style/Section.module.css";

function Volunteering(props) {
  const volunteering = Object.keys(props.data);
  return (
    <div className={classes1.section}>
      <h2 className={classes1["section-title"]}>Volunteering Activities</h2>
      <div className={classes1["section-body"]}>
        {volunteering.map((vol) => (
          <React.Fragment key={vol}>
            <TitleDescription data={props.data[vol]}></TitleDescription>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
export default Volunteering;
