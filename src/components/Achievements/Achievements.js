import React from "react";
import TitleDescription from "../TitleDescription/TitleDescription";

function Achievements(props) {
  const achievements = Object.keys(props.data);
  return (
    <React.Fragment>
      <h2>Achievements</h2>
      {achievements.map((achievement) => (
        <React.Fragment key={achievement}>
          <TitleDescription data={props.data[achievement]}></TitleDescription>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
export default Achievements;
