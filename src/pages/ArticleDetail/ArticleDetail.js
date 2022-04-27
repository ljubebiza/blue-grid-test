import React from "react";

import { useParams, useNavigate } from "react-router-dom";

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
      <h1>{props.articles[articleId]?.title}</h1>
      <h2>{props.articles[articleId]?.textOfArticle}</h2>
    </div>
  );
}
