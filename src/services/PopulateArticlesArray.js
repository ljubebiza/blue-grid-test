import { FormatDate } from "./FormatDate";

export default function PopulateArticlesArray(
  title,
  textOfArticle,
  articles,
  setArticles
) {
  const article = {
    title: title,
    textOfArticle: textOfArticle,
    date: FormatDate(),
    id: articles.length + 1,
  };
  setArticles([...articles, article]);
}
