import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CategoryItem from "../../components/CategoryItem/categoryItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categorys = () => {
  const [categorysData, setCategorysData] = useState([]);

  useEffect(() => {
    axios
      .get("http://ec2-43-204-114-19.ap-south-1.compute.amazonaws.com:8045/AllCategory")
      .then((response) => {
        setCategorysData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categorys:", error);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8
    ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...sliderSettings}>
        {categorysData.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </Slider>
    </div>
  );
};

export default Categorys;
