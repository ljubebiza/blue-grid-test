export const DeleteFunction = (indexOfArticle, articleArray, setArticles) => {
  setArticles([
    ...articleArray.slice(0, indexOfArticle),
    ...articleArray.slice(indexOfArticle + 1),
  ]);
};
