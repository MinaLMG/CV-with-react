import React from "react";
import TitleDescription from "../TitleDescription/TitleDescription";

function Achievements(props) {
  const achievements = Object.keys(props.data);
  return (
    <div className={props.className}>
      <h2>Achievements</h2>
      {achievements.map((achievement) => (
        <React.Fragment key={achievement}>
          <TitleDescription data={props.data[achievement]}></TitleDescription>
        </React.Fragment>
      ))}
    </div>
  );
}
export default Achievements;
