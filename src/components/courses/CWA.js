import React from "react";
import CourseArticleList from "./CourseArticleList";
import courseData from "./../../data/courses/cwa.json";

function Cwa() {
  return (
    <div className="container">
      <div className="content">
        <CourseArticleList baseUrl={courseData.baseUrl} articles={courseData.articles} />
      </div>
    </div>
  );
}

export default Cwa;
