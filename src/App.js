// import logo from './images/logo.png';
import React from "react";
import "./styles/main.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail";

export default function App() {
  const [articles, setArticles] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={<Home articles={articles} setArticles={setArticles} />}
            path="/"
            exact
          />
          <Route element={<AboutUs />} path="/about-us" exact />
          <Route element={<Contact />} path="/contact" exact />
          <Route
            element={<ArticleDetail articles={articles} />}
            path="/articles/:articleId"
          />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
