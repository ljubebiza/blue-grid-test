import { FormatDate } from "./FormatDate";
import { Alert } from "./Alert";

export default function PopulateArticlesArray(
  title,
  textOfArticle,
  articles,
  setTitle,
  setTextOfArticle,
  setArticles
) {
  const article = {
    title: title,
    textOfArticle: textOfArticle,
    date: FormatDate(),
    id: articles.length + 1,
  };
  setArticles([...articles, article]);
  setTitle("");
  setTextOfArticle("");
  Alert("center", "success", "Article created successfully", 1500);
}
