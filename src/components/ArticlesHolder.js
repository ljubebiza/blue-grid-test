import React from "react";
import Article from "./Article";

export default function ArticlesHolder(props) {
  return (
    <div className="articles-holder">
      {props.articles.map((article, index) => {
        return (
          <Article
            article={article}
            key={index}
            index={index}
            articles={props.articles}
            setArticles={props.setArticles}
            setStartEditing={props.setStartEditing}
            setIndexOfArticle={props.setIndexOfArticle}
            setTextOfArticle={props.setTextOfArticle}
            setTitle={props.setTitle}
          />
        );
      })}
    </div>
  );
}
