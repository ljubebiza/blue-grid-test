import React from "react";
import { useState } from "react";

import "../styles/main.css";

import Layout from "../components/Layout";
import InputForm from "../components/inputForm/InputForm";
import ArticlesHolder from "../components/ArticleDetail/ArticlesHolder";
import { HandleForm } from "../services/HandleForm";
import { HandleEditForm } from "../services/HandleEditForm";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [textOfArticle, setTextOfArticle] = useState("React");
  const [title, setTitle] = useState("");
  const [startEditing, setStartEditing] = useState(false);
  const [indexOfArticle, setIndexOfArticle] = useState(-1);

  return (
    <Layout>
      {articles.length === 0 ? (
        <h1>NO added articles</h1>
      ) : (
        <ArticlesHolder
          articles={articles}
          setStartEditing={setStartEditing}
          setIndexOfArticle={setIndexOfArticle}
          setTextOfArticle={setTextOfArticle}
          setTitle={setTitle}
        />
      )}

      {startEditing ? (
        <InputForm
          func={(event) => setTitle(event.target.value)}
          buttonText={"Edit"}
          buttonFunc={() => {
            HandleEditForm(
              title,
              textOfArticle,
              articles,
              indexOfArticle,
              setStartEditing
            );
          }}
          textAreaFunc={(event) => setTextOfArticle(event.target.value)}
          titleValue={title}
          value={textOfArticle}
        />
      ) : (
        <InputForm
          func={(event) => setTitle(event.target.value)}
          buttonText={"Create"}
          buttonFunc={() => {
            HandleForm(title, textOfArticle, articles, setArticles);
          }}
          textAreaFunc={(event) => setTextOfArticle(event.target.value)}
        />
      )}
    </Layout>
  );
}
