import React, { useContext } from "react";

import "../styles/main.css";

import Layout from "../components/Layout";
import ArticlesHolder from "../components/articlesHolder/ArticlesHolder";
import ArtiecleInput from "../components/inputForms/ArticleInput";
import ArticlesContext from "../store/articles-context";

export default function Home({ articles, setArticles }) {
  const ArticlesListCtx = useContext(ArticlesContext);

  return (
    <Layout>
      {ArticlesListCtx.totalArticles === 0 ? (
        <h1>No added articles</h1>
      ) : (
        <ArticlesHolder articlesList={ArticlesListCtx.articles} />
      )}
      <ArtiecleInput />
    </Layout>
  );
}
