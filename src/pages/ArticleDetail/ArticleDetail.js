import React from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ArticleDetail(props) {
  const navigate = useNavigate();
  const params = useParams();
  const articleId = params.articleId;

  return (
    <div>
      <h2
        onClick={() => {
          navigate("/");
        }}
      >
        &lt; Go Back
      </h2>
      <h1>{articleId}</h1>
      <h1>Title: {props.articles[articleId]?.title}</h1>
      <h2>{props.articles[articleId]?.textOfArticle}</h2>
    </div>
  );
}
