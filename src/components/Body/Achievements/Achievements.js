import React from "react";
import TitleDescription from "../TitleDescription/TitleDescription";
import classes1 from "../Style/Section.module.css";
import classes from "./Achievements.module.css";

function Achievements(props) {
  const achievements = Object.keys(props.data);
  return (
    <div className={classes1.section}>
      <h2 className={classes1["section-title"]}>Achievements</h2>
      <div className={classes1["section-body"]}>
        {achievements.map((achievement) => (
          <React.Fragment key={achievement}>
            <TitleDescription data={props.data[achievement]}></TitleDescription>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
export default Achievements;
