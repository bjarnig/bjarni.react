import React from "react";

// Components
import OpacityImage from './OpacityImage';

function FrontImage({ link, imageUrl, text }) {
  return (
    <div>
    <div className="col-lg-4 col-sm-6 col-xs-6">
      <div className="img-center">
        <a href={link}>
          <OpacityImage imageUrl={imageUrl}/>
        </a>
      </div>
      <a href={link}>
        <p>{text}</p>
      </a>
    </div>
    </div>
  );
}
export default FrontImage;
