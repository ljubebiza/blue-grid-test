import { createContext, useState } from "react";

const ArticlesContext = createContext({
  articles: [],
  titalArticles: 0,
  addArticle: (article) => {},
  editArticle: (articleId) => {},
  deleteArticle: (articleId) => {},
});

export default function ArticlesContextProvider(props) {
  const [articles, setArticles] = useState([]);

  function addArticle(article) {
    setArticles((prevArticles) => {
      return prevArticles.concat(article);
    });
  }

  function editArticle(article) {
    articles[article.id].title = article.tile;
    articles[article.id].articleText = article.articleText;
  }

  function deleteArticle(articleId) {
    setArticles((prevArticles) => {
      return prevArticles.filter((article) => article.id !== articleId);
    });
  }

  const context = {
    articles: articles,
    totalArticles: articles.length,
    addArticle: addArticle,
    editArticle: editArticle,
    deleteArticle: deleteArticle,
  };

  return (
    <ArticlesContext.Provider value={context}>
      {props.children}
    </ArticlesContext.Provider>
  );
}
