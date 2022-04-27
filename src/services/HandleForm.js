import PopulateArticlesArray from "./PopulateArticlesArray";
import { Alert } from "./Alert";
import IsInputEmpty from "./IsInputEmpty";

export const HandleForm = (
  title,
  textOfArticle,
  articles,
  setArticles,
  setTitle,
  setTextOfArticle
) => {
  if (IsInputEmpty(title) || IsInputEmpty(textOfArticle)) {
    Alert("center", "warning", "Please fiil in both fields", 3000);
  } else {
    PopulateArticlesArray(title, textOfArticle, articles, setArticles);
    setTitle("");
    setTextOfArticle("hi");

    Alert("center", "success", "Article created successfully", 1500);
  }
};
