import React, { useContext } from "react";
import "../../styles/articleDetail.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArticlesContext from "../../store/articles-context";

export default function ArticleDetail(props) {
  const navigate = useNavigate();
  const params = useParams();
  const articleId = params.articleId;
  const articleCtx = useContext(ArticlesContext);

  return (
    <div>
      <div className="article-header">
        <h2
          onClick={() => {
            navigate("/");
          }}
        >
          &lt; Go Back
        </h2>
      </div>
      <div className="detail-container">
        <div className="text-wraper">
          <div className="items">
            <h1>{articleCtx.articles[articleId]?.title}</h1>
            <h2>{articleCtx.articles[articleId]?.textOfArticle}</h2>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="blueGrid-footer-text">Powered by BlueGrid</div>
    </div>
  );
}
