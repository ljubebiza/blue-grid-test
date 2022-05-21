import { createContext, useState } from "react";

const ArticlesContext = createContext({
  articles: [],
  totalArticles: 0,
  addArticle: (article) => {},
  editArticle: (index, title, articleText) => {},
  deleteArticle: (articleId) => {},
  setIndex: (articleId) => {},
  getIndex: () => {},
  isForEditing: () => {},
});

export function ArticlesContextProvider(props) {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(-1);

  function addArticleHandler(article) {
    setArticles((prevArticles) => {
      return prevArticles.concat(article);
    });
  }

  function editArticleHandler(index, title, articleText) {
    articles[index].title = title;
    articles[index].textOfArticle = articleText;
  }

  function deleteArticleHandler(articleId) {
    setArticles((prevArticles) => {
      return prevArticles.filter((article) => article.id !== articleId);
    });
  }
  function setIndexHandler(articleIndex) {
    setIndex(articleIndex);
  }

  function getIndexHandler() {
    return index;
  }

  function isForEditing() {
    return articles.some((article) => article.id === index + 1);
  }

  const context = {
    articles: articles,
    totalArticles: articles.length,
    addArticle: addArticleHandler,
    editArticle: editArticleHandler,
    deleteArticle: deleteArticleHandler,
    setIndex: setIndexHandler,
    getIndex: getIndexHandler,
    isForEditing: isForEditing,
  };

  return (
    <ArticlesContext.Provider value={context}>
      {props.children}
    </ArticlesContext.Provider>
  );
}
export default ArticlesContext;
