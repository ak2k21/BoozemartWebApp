import React from 'react';
import './categoryitem.css'; // Create a CSS file for styling

const CategoryItem = (props) => {
  var category= props.category;
  const  {image ,title} = category;
const handleImageClick=()=>{
  console.log('image clicked', title)
};
  return (
    <div className="image-container">
      <div className="image-wrapper">
        
        <img src={category.image} alt={image} className="round-image" onClick={handleImageClick} />
      
      </div>
      <div className="image-name">{category.title}</div>
    </div>
  );
};

export default CategoryItem;
