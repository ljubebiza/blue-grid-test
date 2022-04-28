import React from "react";
import "./styles.css";
import DeleteArticle from "../parts/DeleteArticle";
import EditArticle from "../parts/EditArticle";
import { useNavigate } from "react-router-dom";

export default function Article(props) {
  const navigate = useNavigate();
  return (
    <div className="article">
      <DeleteArticle
        index={props.index}
        articles={props.articles}
        setArticles={props.setArticles}
      />
      <EditArticle
        func={() => {
          props.setTitle(props.article.title);
          props.setTextOfArticle(props.article.textOfArticle);
          props.setStartEditing(true);
          props.setIndexOfArticle(props.index);
        }}
      />
      <div
        className="article-content"
        onClick={() => {
          navigate(`/articles/${props.index}`);
        }}
      >
        <p>
          <b>{props.article.title.slice(0, 20)}</b>
        </p>
        <p>{props.article.textOfArticle.slice(0, 30) + "..."}</p>
      </div>
      <div className="article-date">
        <p>{props.article.date}</p>
      </div>
    </div>
  );
}
