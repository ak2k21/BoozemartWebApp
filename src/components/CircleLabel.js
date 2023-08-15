import React from "react";
import "./circlelabel.css";

const CircleLabel = () => {
  // ... your existing code ...
  const handleImageClick = () => {
    console.log("image clicked");
  };

  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          marginTop: "5%",
          fontWeight: "bolder",
        }}
      >
        Heading
      </div>
      <div className="circle-label-container">
        <div className="image-container">
          <div className="image-wrapper">
            <img
              src="D:\WebdevelopmentBoozemart\src\components\CategoryItem\wineimage\wine.jpg"
              className="round-image"
              onClick={handleImageClick}
            />
          </div>
          <div className="image-name">Title</div>
        </div>
      </div>
    </div>
  );
};

export default CircleLabel;
