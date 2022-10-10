import React from 'react'
import "./_image_list.scss"

// pass vao name va loai anh can goi
function ImageList(props) {
  return (
    <div className="image-gallery">
      <div className="image-container">
        <h1 className="title">{props.name}</h1>
        <div className="images">
          
          <img
            src="https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg"
            alt=""
          />
          <img
            src="https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg"
            alt=""
          />
          <img
            src="https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg"
            alt=""
          />
          <img
            src="https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg"
            alt=""
          />
          <img
            src="https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ImageList