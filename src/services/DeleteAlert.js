import Swal from "sweetalert2";
import { DeleteFunction } from "./DeleteFunction";

export const DeleteAlert = (indexOfArticle, articleArray, setArticles) => {
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
      DeleteFunction(indexOfArticle, articleArray, setArticles);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};
