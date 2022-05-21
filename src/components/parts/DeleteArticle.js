import { useContext } from "react";

import Swal from "sweetalert2";

import ArticlesContext from "../../store/articles-context";

export default function DeleteArticle(props) {
  const articleCtx = useContext(ArticlesContext);

  const DeleteArt = (indexOfArticle) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this article!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        articleCtx.deleteArticle(indexOfArticle);
        articleCtx.setIndex(-1);

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="delete-article">
      <a
        onClick={() => {
          DeleteArt(props.id);
        }}
        href="#"
      >
        X
      </a>
    </div>
  );
}
