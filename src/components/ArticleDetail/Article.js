import React from "react";

export default function Article(props) {
  return (
    <div className="article">
      <button
        onClick={() => {
          props.setTitle(props.article.title);
          props.setTextOfArticle(props.article.textOfArticle);
          props.setStartEditing(true);
          props.setIndexOfArticle(props.index);
        }}
      >
        edit
      </button>
      <h3>{props.article.title}</h3>
      <p>{props.article.textOfArticle}</p>
    </div>
  );
}
