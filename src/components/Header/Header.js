function Header(props) {
  return (
    <div>
      <img src={props.data.photo} width="50px"></img>
      <h2>{props.data.name}</h2>
      <p>{props.data.description}</p>
      <div>{props.data.contacts.mail}</div>
      <div>{props.data.contacts.phone}</div>
      <div>{props.data.contacts.accomodation}</div>
      <div>{props.data.contacts.linkedin}</div>
      <div>{props.data.contacts.github}</div>
    </div>
  );
}
export default Header;
