import React from "react";
import CourseArticleList from "./CourseArticleList";
import courseData from "./../../data/courses/pmb.json";

function Pmb() {
  return (
    <div className="container">
      <div className="content">
        <CourseArticleList baseUrl={courseData.baseUrl} articles={courseData.articles} />
      </div>
    </div>
  );
}

export default Pmb;
