import React, { useState } from "react";

function OpacityImage({ imageUrl, alt, onClick }) {
  const [style, setStyle] = useState({ opacity: '0.0', border: '10px' });

  const handleImageLoaded = () => {
    setStyle({ opacity: '1.0' });
  };

  const handleImageErrored = () => {
  };

  return (
    <div>
      <img
        style={{...style, cursor: onClick ? 'pointer' : 'default'}}
        loading="lazy"
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
