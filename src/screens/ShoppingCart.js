
import React from "react";

import Axios from 'axios';
import { Button } from "@mui/material";
import { reamoveFromCart } from "../components/productTile/ProductActions";
import { Link } from "react-router-dom";
import Counter2 from "./Counter2";


const ShoppingCart = (props) => {

  var [pr,setPr]= React.useState([]);
  React.useEffect(() => {
        
    Axios.get("http://localhost:8045/product/"+JSON.stringify(props.productId)).then((succResp) => {
        // callback(succResp);
        setPr(succResp.data);
    }, (errorresp) => {
        console.log(JSON.stringify(errorresp));
    })


}, []);

const handleReamove=()=>{

}



  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          // src="https://www.totalwine.com/dynamic/270x/media/sys_master/twmmedia/hed/hca/27138022965278.png"
          src={pr.product_image}
          alt="Wine"
          style={styles.image}
        />
      </div>
      <div style={styles.productDetails}>
        <div style={styles.productName}>{pr.product_name}--{props.productId}</div>
        
        <div style={styles.productVolume}>{pr.weight}</div>
      </div>
      <div style={styles.quantitySection}>
        <div style={styles.quantityLabel}>Quantity</div>
        <Counter2 productId={props.productId} quantity={props.quantity}/>
        <div style={styles.price}>{pr.price}</div>
        <div style={styles.actions}>
          <a href="#" style={styles.actionLink}>Move to List</a>
          {/* <Link to={`/cart`}> */}
          <Button style={styles.actionLink}      onClick={()=>{ console.log(`Removed from cart!`);
          var loc1=window.location.href;
      reamoveFromCart(props.productId,loc1)}} >Remove</Button>
      {/* </Link> */}
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

export default ShoppingCart;
