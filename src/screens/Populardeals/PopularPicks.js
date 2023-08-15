import React from "react";
import { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "../../components/productTile/ProductItem";
import axios from "axios";
import { Height } from "@mui/icons-material";

const PopularPicks = (props) => {
  const [popularpicksData, setpopularpicksData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-43-204-114-19.ap-south-1.compute.amazonaws.com:8045/products?items_per_page=111&page_number=1"
      )
      .then((response) => {
        setpopularpicksData(response.data);
      })
      .catch((error) => {
        console.log("error fetching populardeals:", error);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        // width:'80%',
        gap: "100px",
      }}
    >
      {/* <Slider {...sliderSettings}> */}
      <span
        style={{
          marginTop: "17%",
          fontWeight: "bolder",
          marginLeft: "1%",
        }}
      >
        PopularDeals
      </span>
      {popularpicksData.map((product, index) => (
        <ProductItem key={index} product={product} width="60%" />
      ))}
      {/* </Slider> */}
    </div>
  );
};

export default PopularPicks;
