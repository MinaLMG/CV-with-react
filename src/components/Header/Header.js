import classes from "./Header.module.css";
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
        {props.data.contacts.mail && <div>{props.data.contacts.mail}</div>}
        {props.data.contacts.phone && <div>{props.data.contacts.phone}</div>}
        {props.data.contacts.accomodation && (
          <div>{props.data.contacts.accomodation}</div>
        )}
        {props.data.contacts.linkedin && (
          <div>{props.data.contacts.linkedin}</div>
        )}
        {props.data.contacts.github && <div>{props.data.contacts.github}</div>}
      </div>
    </div>
  );
}
export default Header;
