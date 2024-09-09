import React from 'react';

function IconButton({ src, alt, className, imgClassName }) {
  return (
    <button className={className}>
      <img loading="lazy" src={src} alt={alt} className={imgClassName} />
    </button>
  );
}

export default IconButton;
