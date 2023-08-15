import React, { useState } from "react";
import Counter from "../../components/Counter";
import Checkbox from '@mui/material/Checkbox';
import './Buyitagain.css';
import { Button, Rating } from "@mui/material";

const Buyitagain = () => {
  return (
    <div className="checkbox-image-container">
      <Checkbox className="checkbox" />
      <div>
       
        <img
          src="https://www.totalwine.com/dynamic/270x/media/sys_master/twmmedia/hed/hca/27138022965278.png" // Replace with the actual image path
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
       <div>
        <Button style={{
            backgroundColor:'green'

        }}>Add to cart</Button>
    </div>
      </div><div style={{
        marginRight:'6%',
        display:'inline-flex',
        marginBottom:'8%'
      }}>
        Wine
        
    </div>
    <div><Rating  style={{
      right:'100%',
      marginBottom:'30%'
    }}/></div>
    
      <div>Quantity
    <Counter />
    </div>
    
    </div>
  );
};

export default Buyitagain;
