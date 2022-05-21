import React from "react";

import "./styles.css";
import Article from "../article/Article";

export default function ArticlesHolder(props) {
  return (
    <div className="articles-holder">
      {props.articlesList.map((article, index) => {
        return (
          <Article
            key={index}
            id={article.id}
            index={index}
            title={article.title}
            textOfArticle={article.textOfArticle}
            date={article.date}
          />
        );
      })}
    </div>
  );
}
