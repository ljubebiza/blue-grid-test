import React from "react";

import { DeleteAlert } from "../services/DeleteAlert";
import { useNavigate } from "react-router-dom";

export default function Article(props) {
  const navigate = useNavigate();
  return (
    <div className="article">
      <div className="delete-link">
        <a
          onClick={() => {
            DeleteAlert(props.index, props.articles, props.setArticles);
          }}
          href="#"
        >
          X
        </a>
      </div>
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
      <div
        className="article-content"
        onClick={() => {
          navigate(`/articles/ ${props.index}`);
        }}
      >
        <h3>{props.article.title}</h3>
        <p>{props.article.textOfArticle}</p>
      </div>
      <div className="article-date">
        <p>{props.article.date}</p>
      </div>
    </div>
  );
}
