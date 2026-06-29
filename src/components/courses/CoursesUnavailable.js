import React from "react";

// Temporary gate for course materials (cwa / pma / pmb / workshops).
// Re-enable by restoring the original routes in App.js.
function CoursesUnavailable() {
  return (
    <div className="container">
      <div className="content">
        <article>
          <div className="hr"><hr /></div>
          <h1>Temporarily unavailable</h1>
          <p>Course materials are currently offline. Please check back later.</p>
        </article>
      </div>
    </div>
  );
}

export default CoursesUnavailable;
