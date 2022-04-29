import { DeleteAlert } from "../../services/DeleteAlert";

export default function DeleteArticle(props) {
  return (
    <div className="delete-article">
      <a
        onClick={() => {
          DeleteAlert(
            props.index,
            props.articles,
            props.setArticles,
            props.setStartEditing
          );
        }}
        href="#"
      >
        X
      </a>
    </div>
  );
}
