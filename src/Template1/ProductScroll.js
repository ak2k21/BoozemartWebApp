

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItemSmall from "../components/productTileSmall/ProductItemSmall";
import "./Slider.css"; 

const ProductScroll = (props) => {
  const [productsData, setProductsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(props.api1)
      .then((response) => {
        setProductsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {productsData.map((product, index) => (
          <div key={index} className="slide">
            <ProductItemSmall product={product} mystyle1={{}} />
          </div>
        ))}
      </div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <div className="dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductScroll;
