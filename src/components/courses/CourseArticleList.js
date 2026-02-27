import React from "react";
import OpacityImage from "./../common/OpacityImage";
import shouldShowArticle from "./../../utils/shouldShowArticle";

function CourseArticleList({ baseUrl, articles }) {
  return articles.map((article, index) => {
    const zipUrl = `${baseUrl}${article.file}.zip`;
    const imageUrl = `${baseUrl}${article.file}.png`;

    const content = (
      <article key={index}>
        <div className="date"> {article.date} </div>
        <div className="hr">
          <hr />
        </div>
        <h1>{article.title}</h1>
        <a
          href={zipUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <OpacityImage imageUrl={imageUrl} />
        </a>
        <p>
          <a
            href={zipUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download materials
          </a>
        </p>
      </article>
    );

    if (article.showDate) {
      return shouldShowArticle(article.showDate) ? content : null;
    }

    return content;
  });
}

export default CourseArticleList;
