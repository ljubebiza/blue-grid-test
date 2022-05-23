import React from "react";
import "../../styles/articleDetail.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ArticleDetail(props) {
  const navigate = useNavigate();
  const params = useParams();
  const articleId = params.articleId;

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
            <h1>{props.articles[articleId]?.title}</h1>
            <h2>{props.articles[articleId]?.textOfArticle}</h2>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="blueGrid-footer-text">Powered by BlueGrid</div>
    </div>
  );
}
