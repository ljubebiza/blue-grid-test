import React from "react";
import { useState } from "react";

import "../styles/main.css";

import Layout from "../components/Layout";
import ArticlesHolder from "../components/articlesHolder/ArticlesHolder";
import IsInputEmpty from "../services/IsInputEmpty";
import PopulateArticlesArray from "../services/PopulateArticlesArray";
import { Alert } from "../services/Alert";
import { EditForm } from "../services/EditForm";
import InputField from "../components/parts/InputField";
import TextArea from "../components/TextArea";
import Button from "../components/parts/Button";

export default function Home({ articles, setArticles }) {
  const [textOfArticle, setTextOfArticle] = useState("");
  const [title, setTitle] = useState("");
  const [startEditing, setStartEditing] = useState(false);
  const [indexOfArticle, setIndexOfArticle] = useState(-1);
  let btn_txt,
    btn_id = "";

  if (startEditing) {
    btn_txt = "Edit";
    btn_id = "edit";
  } else {
    btn_txt = "Create";
    btn_id = "create";
  }
  const HandleForm = (e) => {
    e.preventDefault();
    if (IsInputEmpty(title) || IsInputEmpty(textOfArticle)) {
      Alert("center", "warning", "Please fiil in both fields", 3000);
    } else {
      if (startEditing) {
        EditForm(
          title,
          textOfArticle,
          articles,
          indexOfArticle,
          setStartEditing,
          setTitle,
          setTextOfArticle
        );
      } else {
        PopulateArticlesArray(
          title,
          textOfArticle,
          articles,
          setTitle,
          setTextOfArticle,
          setArticles
        );
      }
    }
  };

  return (
    <Layout>
      {articles.length === 0 ? (
        <h1>No added articles</h1>
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

      <form className="input-form">
        <InputField
          fieldPlaceholder={"Title"}
          filedTyp={"text"}
          func={(event) => setTitle(event.target.value)}
          inputValue={title}
        />
        <TextArea
          textAreaFunc={(event) => setTextOfArticle(event.target.value)}
          textAreaPlaceholder={"Write your article here..."}
          value={textOfArticle}
        />
        <Button
          id={btn_id}
          buttonType={"submit"}
          buttonText={btn_txt}
          buttonFunc={HandleForm}
        />
      </form>
    </Layout>
  );
}
