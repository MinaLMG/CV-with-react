import classes from "./Skill.module.css";

function Skill(props) {
  return <li className={classes.skill}>{props.data}</li>;
}
export default Skill;
