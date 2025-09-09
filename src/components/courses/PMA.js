import React, { Component } from "react";

// Components
import OpacityImage from "./../common/OpacityImage";

class Pma extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <article>
            <div className="date"> 12.09.2024 </div>
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
        </div>
      </div>
    );
  }
}

export default Pma;
