import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from '../../components/productTile/ProductItem';
import './products.css';

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8045/products?items_per_page=111&page_number=1')
      .then((response) => {
        setProductsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []); 

  return (
    <div className="products-grid">
      {productsData.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
