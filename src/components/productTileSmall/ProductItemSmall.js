import React from 'react';
import './ProductItemSmall.css'; 
import BasicRating from '../BasicRating';
import FavSmall from './FavSmall';
import '@fortawesome/fontawesome-free/css/all.css';

const ProductItemSmall = (props) => {
  var product=props.product;
  
  const { name, image, price, description, rating, quantity, isFavorite } = product;

  const handleAddToCart = () => {
    console.log(`Added ${name} to cart!`);
  };

  const handleFavorite = () => {
    console.log(`${name} is now ${isFavorite ? 'not' : ''} a favorite!`);
  };

  const renderRatingStars = (ab) => {
    return <BasicRating userRating={ab}/>
  };
  

  


  return (
    <div className="product-card2">
      <div className='product-img'>
      <img className="product-image2" src={product.Image_Thumb_Nail} alt={name} />
      <div className="rating2">{renderRatingStars(product.ratingValue)}
     
      
      </div></div>

      <div className='product-details2'>
      <p className="product-name2">Name:   {product.product_name}</p>
      <p className="price2">Price: ${price}</p>
      <p className="description2">description: {product.detail}</p>
      <div className="quantity2">Quantity: {product.weight}</div>
      <p></p>
      <div className='CardBottom'>
        <div className='heart-icon'><FavSmall className='fav'/></div>
    <div className='prButton'>
    <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
    </div>
    
    </div>
      



    </div>
   
    </div>
    
  );

};

export default ProductItemSmall;
