import { React, useState, useContext, useEffect } from "react";

import ArticlesContext from "../../store/articles-context";
import { FormatDate } from "../../services/FormatDate";
import { Alert } from "../../services/Alert";
import "./styles.css";

export default function ArtiecleInput(props) {
  const [title, setTitle] = useState("");
  const [articleText, setArticleText] = useState("");
  const articlesCtx = useContext(ArticlesContext);

  const startEditing = articlesCtx.isForEditing();

  useEffect(() => {
    if (startEditing) {
      setTitle(articlesCtx.articles[articlesCtx.getIndex()].title);

      setArticleText(
        articlesCtx.articles[articlesCtx.getIndex()].textOfArticle
      );
    }
  }, [startEditing]);

  function handleSubmit(event) {
    event.preventDefault();

    articlesCtx.addArticle({
      title: title,
      textOfArticle: articleText,
      date: FormatDate(),
      id: articlesCtx.totalArticles + 1,
    });
    Alert("center", "success", "Article created successfully", 1500);
    setTitle("");
    setArticleText("");
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        required
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <textarea
        rows="10"
        cols="50"
        type="text"
        required
        placeholder="Write your article here..."
        onChange={(event) => setArticleText(event.target.value)}
        value={articleText}
      />
      <button type="submit" id={startEditing ? "edit" : ""}>
        {startEditing ? "Edit" : "Create"}
      </button>
    </form>
  );
}
