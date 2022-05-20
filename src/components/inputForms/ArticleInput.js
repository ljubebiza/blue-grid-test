import { React, useRef, useContext } from "react";

import ArticlesContext from "../../store/Articles-context";
import { FormatDate } from "../../services/FormatDate";
import "./styles.css";

export default function ArtiecleInput(props) {
  const title = useRef();
  const articleText = useRef();

  const articlesCtx = useContext(ArticlesContext);
  function handleSubmit(event) {
    event.preventDefault();
    const article = {
      title: title.current.value,
      textOfArticle: articleText.current.value,
      date: FormatDate(),
      id: props.articles.length + 1,
    };
    articlesCtx.addArticle(article);
    console.log(articlesCtx.articles);
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" required ref={title} />
      <textarea
        rows="10"
        cols="50"
        type="text"
        required
        placeholder="Write your article here..."
        ref={articleText}
      />
      <button type="submit" btn_id={props.id}>
        {props.btn_txt}
      </button>
    </form>
  );
}
