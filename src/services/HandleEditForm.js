import { Alert } from "./Alert";
import IsInputEmpty from "./IsInputEmpty";

export const HandleEditForm = (
  title,
  textOfArticle,
  articles,
  indexOfArticle,
  setStartEditing,
  setTitle,
  setTextOfArticle
) => {
  if (IsInputEmpty(title) || IsInputEmpty(textOfArticle)) {
    Alert("center", "warning", "Please fiil in both fields", 3000);
  } else {
    articles[indexOfArticle].title = title;
    articles[indexOfArticle].textOfArticle = textOfArticle;
    setTitle("");
    setTextOfArticle("");
    Alert("center", "success", "Article edited successfully", 2000);
    setStartEditing(false);
  }
};
