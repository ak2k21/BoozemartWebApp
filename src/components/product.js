import React from 'react';
import { styled } from '@mui/material/styles';
import './product.css'


const Product = () => {


  return (
    <>
    <fieldset className='box'>
      <h4 className='text'>Product Highlights</h4>
      <p>Beverage Dynamics-Italy - "Peach and slight honey aromas become flavors on the palate, along with a nice green apple note that brightens the wine. Approachable and round, with an easy-to-enjoy, smooth, bubbly texture."</p>
   <div class="container">
    <div class="box-shadow">
      <span class="apple">Apple</span>
      <span class="white">White peach</span>
      <span class="honey ">Honeysuckle</span>
    </div>
  </div>
   </fieldset> 
   
</>
  );
};

export default Product;


