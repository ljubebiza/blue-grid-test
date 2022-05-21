import editIcon from "../../images/editIcon.png";

export default function EditArticle(props) {
  return (
    <a className="edit-link" onClick={props.func}>
      <img src={editIcon} alt="Edit"></img>
    </a>
  );
}
