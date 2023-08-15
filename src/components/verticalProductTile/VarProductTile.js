import React from 'react';
import BasicRating from '../BasicRating';
import Fav from '../productTile/Fav';
import BasicButtons from '../BasicButton';
import './VarProductTile.css';

const VarProductItem = (props) => {
  const product = {
    name: 'Sample Product',
    image: 'sample-image.jpg',
    price: 19.99,
    description: 'Sample description',
    ratingValue: 4.5,
    quantity: 10,
    isFavorite: false,
    weight: '500g',
    detail:
      'French wine originated in the 6th century BCE, with the colonization of Southern Gaul by Greek settlers. Viticulture soon flourished with the founding of the Greek colony of Marseille. Wine has been around for thousands of years in the countries on the Mediterranean but France has made it a part of their civilization and has considered wine-making as art for over two thousand years.',
  };

  const handleFavoriteClick = () => {
    console.log('Toggled favorite status:', !product.isFavorite);

  };

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart!`);
  };

  const renderRatingStars = (ab) => {
    return <BasicRating userRating={ab} />;
  };

  return (
    <div className="product-card-horizontal">
      <div className="product-image-container">
        <div className="favouriteContainer" style={{ position: 'relative' }}>
          <Fav className="fav" onClick={handleFavoriteClick} />
        </div>
        <img className="product-image" src="https://www.jiomart.com/images/product/original/rv44rkmagx/jacob-s-creek-unvined-shiraz-non-alcoholic-red-grape-still-wine-750-ml-product-images-orv44rkmagx-p591885579-0-202206030905.png?im=Resize=(420,420)" alt={product.name} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <div className="rating">{renderRatingStars(product.ratingValue)}</div>
        {/* <p className="price">${product.price} {product.weight}</p> */}
        {/* <p className="description">{product.detail}</p> */}
        <BasicButtons
          text="Add to Cart"
          variant="standard"
          btnstyle={{ background: 'red', color: '#fff' }}
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default VarProductItem;