import React, { useState } from "react";

function OpacityImage({ imageUrl, alt, onClick }) {
  const [style, setStyle] = useState({ opacity: '0.0', border: '10px' });

  const handleImageLoaded = () => {
    setStyle({ opacity: '1.0' });
  };

  const handleImageErrored = () => {
    console.log('failed to load image');
  };

  return (
    <div>
      <img
        style={{...style, cursor: onClick ? 'pointer' : 'default'}}
        className="img-responsive"
        src={imageUrl}
        alt={alt || ""}
        onLoad={handleImageLoaded}
        onError={handleImageErrored}
        onClick={onClick}
      />
    </div>
  );
}
export default OpacityImage;
