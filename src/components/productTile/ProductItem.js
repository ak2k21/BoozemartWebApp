import React from 'react';
import './ProductItem.css';
import BasicRating from '../BasicRating';
import Fav from './Fav';
import '@fortawesome/fontawesome-free/css/all.css';
import BasicButtons from '../BasicButton';
import { Link ,useHistory} from 'react-router-dom';
import { useState } from 'react';
import { addToCart } from './ProductActions';
import Button from '@mui/material/Button';  

const ProductItem = (props) => {
 
  // const handleAddToCart = () => {
  //   console.log(`Added ${name} to cart!`);
  //   // props.onAddToCart(props.product.product_id);
  //   addToCart({productId:props.product.product_id,quantity:1});
   
  // };
  const { product, onToggleFavorite } = props;
  const { name, image, price, description, rating, quantity, isFavorite } = product;

  const handleFavoriteClick = () => {
    onToggleFavorite(product);
  };

  const renderRatingStars = (ab) => {
    return <BasicRating userRating={ab} />;
  };

  return (
    <div className="product-card">
      <div className="favouriteContainer" style={{position: "relative"}}>
        <Fav className="fav" onClick={handleFavoriteClick} />
      </div>
      <div style={{height: "200px", width: "150px", position: "relative"}}>
        <img className="product-image" src={product.Image_Thumb_Nail} alt={name} />
      </div>
      <div className="product-details">
        <div className="rating">{renderRatingStars(product.ratingValue)}</div>
        <h2 className="product-name">{product.product_name}</h2>
        <p className="price">${price} {product.weight}</p>
        <p className="description">{product.detail}</p>
      </div><Link to={`/product/${product.product_id}`}>
        <BasicButtons text="View Details" variant="standard" btnstyle={{ background: 'red', color: '#fff' }} />
      </Link>
      
      <Button variant="text" btnstyle={{background: "red", color: "#fff"}} onClick={()=>{ console.log(`Added to cart!`);
      addToCart({productId:props.product.product_id,quantity:1})}}>Add To Cart</Button>  
      
      <Link to={`/Cart`}>
      <BasicButtons text="go to cart" variant="standard" btnstyle={{ background: 'red', color: '#fff' }} />
      </Link>

    </div>
   
  );
};

export default ProductItem;

