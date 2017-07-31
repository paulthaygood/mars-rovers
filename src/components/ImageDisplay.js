import React from 'react';

function ImageDisplay (props) {
  const listItems = props.images.map((listItem) =>
      <img key={listItem.img.src} src={listItem.img_src} />
  )
  return(
    <div>{listItems}</div>
  );
};

export default ImageDisplay;
