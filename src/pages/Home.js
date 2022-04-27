import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/main.css";

import Layout from "../components/Layout";
import InputForm from "../components/inputForm/InputForm";
import ArticlesHolder from "../components/ArticlesHolder";
import { HandleForm } from "../services/HandleForm";
import { HandleEditForm } from "../services/HandleEditForm";

export default function Home({ articles, setArticles }) {
  const [textOfArticle, setTextOfArticle] = useState("");
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
          setArticles={setArticles}
          setStartEditing={setStartEditing}
          setIndexOfArticle={setIndexOfArticle}
          setTextOfArticle={setTextOfArticle}
          setTitle={setTitle}
        />
      )}

      {startEditing ? (
        <InputForm
          func={(event) => setTitle(event.target.value)}
          fieldPlaceholder={"Title"}
          buttonText={"Edit"}
          buttonFunc={() => {
            HandleEditForm(
              title,
              textOfArticle,
              articles,
              indexOfArticle,
              setStartEditing,
              setTitle,
              setTextOfArticle
            );
          }}
          textAreaFunc={(event) => setTextOfArticle(event.target.value)}
          inputValue={title}
          textAreaValue={textOfArticle}
        />
      ) : (
        <InputForm
          func={(event) => setTitle(event.target.value)}
          fieldPlaceholder={"Title"}
          buttonText={"Create"}
          buttonFunc={() => {
            HandleForm(
              title,
              textOfArticle,
              articles,
              setArticles,
              setTitle,
              setTextOfArticle
            );
          }}
          textAreaFunc={(event) => setTextOfArticle(event.target.value)}
          inputValue={title}
          textAreaValue={textOfArticle}
        />
      )}
    </Layout>
  );
}
