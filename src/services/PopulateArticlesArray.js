export default function PopulateArticlesArray(
  title,
  textOfArticle,
  articles,
  setArticles
) {
  const article = {
    title: title,
    textOfArticle: textOfArticle,
    id: articles.length + 1,
  };
  setArticles([...articles, article]);
}
