import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import ArticlesContext from "../../store/articles-context";
import DeleteArticle from "../parts/DeleteArticle";
import EditArticle from "../parts/EditArticle";

export default function Article(props) {
  const navigate = useNavigate();
  const articlesCtx = useContext(ArticlesContext);

  return (
    <div className="article">
      <DeleteArticle id={props.id} />
      <EditArticle
        func={() => {
          articlesCtx.setIndex(props.index);
        }}
      />
      <div
        className="article-content"
        onClick={() => {
          navigate(`/articles/${props.index}`);
        }}
      >
        <p>
          <b>{props.title.slice(0, 20)}</b>
        </p>
        <p>{props.textOfArticle.slice(0, 30) + "..."}</p>
      </div>
      <div className="article-date">
        <p>{props.date}</p>
      </div>
    </div>
  );
}
