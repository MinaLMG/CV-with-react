import classes from "./Header.module.css";
import email from "../../assets/email.png";
import phone from "../../assets/cell-phone.png";
import gps from "../../assets/placeholder.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

function Header(props) {
  return (
    <div className={classes["header"]}>
      <div className={classes["header-photo"]}>
        <img
          src={props.data.photo}
          className={classes["header-photo-photo"]}
        ></img>
      </div>
      <div className={classes["header-info"]}>
        <div className={classes["header-info-name"]}>{props.data.name}</div>
        <p className={classes["header-info-description"]}>
          {props.data.description}
        </p>
      </div>
      <div className={classes["header-contacts"]}>
        {props.data.contacts.mail && (
          <div>
            {props.data.contacts.mail}
            <img src={email}></img>
          </div>
        )}
        {props.data.contacts.phone && (
          <div>
            {props.data.contacts.phone}
            <img src={phone}></img>
          </div>
        )}
        {props.data.contacts.accomodation && (
          <div>
            {props.data.contacts.accomodation}
            <img src={gps}></img>
          </div>
        )}
        {props.data.contacts.linkedin && (
          <div>
            {props.data.contacts.linkedin}
            <img src={linkedin}></img>
          </div>
        )}
        {props.data.contacts.github && (
          <div>
            {props.data.contacts.github}
            <img src={github}></img>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
