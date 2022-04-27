import PopulateArticlesArray from "./PopulateArticlesArray";
import { Alert } from "./Alert";
import isInputEmpty from "./isInputEmpty";

export const HandleForm = (
  title,
  textOfArticle,
  articles,
  setArticles,
  setTitle,
  setTextOfArticle
) => {
  if (isInputEmpty(title) || isInputEmpty(textOfArticle)) {
    Alert("center", "warning", "Please fiil in both fields", 3000);
  } else {
    PopulateArticlesArray(title, textOfArticle, articles, setArticles);
    setTitle("");
    setTextOfArticle("");
    Alert("center", "success", "Article created successfully", 1500);
  }
};
