import React from "react";

import { useParams } from "react-router-dom";

const articles = [{ title: "Ljubisa", content: "Ljubisa programira." }];

export default function ArticleDetail() {
  const params = useParams();
  const articleId = params.articleId;
  return (
    <div>
      <h1>{articleId}</h1>
      <h1>Title: {articles[articleId]?.title}</h1>
      <h2>{articles[articleId]?.content}</h2>
    </div>
  );
}
