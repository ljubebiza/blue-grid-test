import { Alert } from "./Alert";

export const EditForm = (
  title,
  textOfArticle,
  articles,
  indexOfArticle,
  setStartEditing,
  setTitle,
  setTextOfArticle
) => {
  articles[indexOfArticle].title = title;
  articles[indexOfArticle].textOfArticle = textOfArticle;
  setTitle("");
  setTextOfArticle("");
  Alert("center", "success", "Article edited successfully", 2000);
  setStartEditing(false);
};
