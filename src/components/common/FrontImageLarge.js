import React from "react";

// Components
import OpacityImage from './OpacityImage';

function FrontImageLarge({ link, imageUrl, text }) {
  return (
    <div>
    <div className="col-lg-6 col-sm-6 col-xs-6">
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
export default FrontImageLarge;
