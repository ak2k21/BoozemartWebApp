
import React from "react";

import Axios from 'axios';
import { Button } from "@mui/material";

import Counter from "./Counter";


const Tile2 = (props) => {


  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="https://www.totalwine.com/dynamic/270x/media/sys_master/twmmedia/hed/hca/27138022965278.png"
         
          alt="Wine"
          style={styles.image}
        />
      </div>
      <div style={styles.productDetails}>
        <div style={styles.productName}>{"Myproduct-name"}</div>
        
        <div style={styles.productVolume}>{"weight"}</div>
      </div>
      <div style={styles.quantitySection}>
        <div style={styles.quantityLabel}>{"Quantity"}</div>
        <Counter/>
        <div style={styles.price}>{"price"}</div>
        <div style={styles.actions}>
          
     
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  imageContainer: {
    marginRight: "20px",
  },
  image: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  productDetails: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  productName: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  productYear: {
    color: "#777",
    marginBottom: "5px",
  },
  productVolume: {
    color: "#777",
  },
  quantitySection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  quantityLabel: {
    marginBottom: "5px",
  },
  price: {
    marginBottom: "10px",
    fontSize: "1.2em",
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  actionLink: {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "0.9em",
    marginBottom: "5px",
  },
};

export default Tile2;
