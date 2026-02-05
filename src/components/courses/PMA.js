import React, { Component } from "react";

// Components
import OpacityImage from "./../common/OpacityImage";

// Utility function to check if article should be visible
const shouldShowArticle = (dateString) => {
  // Parse the date string (format: "DD.MM.YYYY")
  const [day, month, year] = dateString.trim().split('.');
  const articleDate = new Date(year, month - 1, day); // month is 0-indexed
  
  // Get current date and set time to start of day
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Calculate one day before the article date
  const oneDayBefore = new Date(articleDate);
  oneDayBefore.setDate(articleDate.getDate() - 1);
  oneDayBefore.setHours(0, 0, 0, 0);
  
  // Show article if current date is on or after one day before the article date
  return today >= oneDayBefore;
};

class Pma extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
        <article>
              <div className="date"> 05.02.2026 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 14, More Patterns</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma14.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma14.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma14.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
        {shouldShowArticle("06.01.2026") && (
            <article>
              <div className="date"> 29.01.2026 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 13, Patterns</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma13.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma13.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma13.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
        {shouldShowArticle("06.01.2026") && (
            <article>
              <div className="date"> 22.01.2026 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 12, Clocks</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma12.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma12.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma12.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
        {shouldShowArticle("06.01.2026") && (
            <article>
              <div className="date"> 14.01.2026 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 11, Shaping</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma11.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma11.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma11.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
        {shouldShowArticle("06.01.2026") && (
            <article>
              <div className="date"> 08.01.2026 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 10, Modulation</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma10.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma10.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma10.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
        {shouldShowArticle("19.11.2025") && (
            <article>
              <div className="date"> 18.12.2025 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 09, Synthesis</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma09.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma09.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma09.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
        {shouldShowArticle("19.11.2025") && (
            <article>
              <div className="date"> 20.11.2025 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 08, Routines</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma08.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma08.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma08.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
        {shouldShowArticle("12.11.2025") && (
            <article>
              <div className="date"> 13.11.2025 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 07, Exercises</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma07.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma07.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma07.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
        {shouldShowArticle("16.10.2025") && (
            <article>
              <div className="date"> 16.10.2025 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 06, Approaches</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma06.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma06.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma06.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
        {shouldShowArticle("09.10.2025") && (
            <article>
              <div className="date"> 09.10.2025 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 05, Data Structures</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma05.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma05.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma05.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
        {shouldShowArticle("01.10.2025") && (
            <article>
              <div className="date"> 02.10.2025 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 04, Functions</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma04.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma04.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma04.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
        {shouldShowArticle("25.09.2025") && (
            <article>
              <div className="date"> 25.09.2025 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 03, Control Flow</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma03.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma03.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma03.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
          {shouldShowArticle("16.09.2025") && (
            <article>
              <div className="date"> 16.09.2025 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 02, Syntax</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma02.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma02.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma02.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
          {shouldShowArticle("09.09.2025") && (
            <article>
              <div className="date"> 09.09.2025 </div>
              <div className="hr">
                <hr />
              </div>
              <h1>Class 01, Programming and Music 1</h1>
              <a
                href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma01.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpacityImage imageUrl="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma01.png" />
              </a>
              <p>
                <a
                  href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2025-2026/pma01.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download materials
                </a>
              </p>
            </article>
          )}
        </div>
      </div>
    );
  }
}

export default Pma;
