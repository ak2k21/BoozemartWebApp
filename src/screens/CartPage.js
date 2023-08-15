
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ShoppingCart from './ShoppingCart';
import OrderSummary from '../components/productTile/OrderSummary';
import GiftCheckbox from '../components/GiftCheckbox';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import store from '../store/index';
import Axios  from 'axios';

import { commonActions } from '../store/commonStore'
const dispatch = store.dispatch
let commonStore = store.getState().commonStore
store.subscribe(function(){
    commonStore = store.getState().commonStore
})
const CartPage = (props) => {
  const { productId } = useParams();

 
 var [crr,setCrr]= React.useState([]);
 React.useEffect(() => {
       
   Axios.get("http://localhost:8045/cart/ByUserId",{
    headers:{
      userId:30
    }
   }).then((succResp) => {
       setCrr(succResp.data);
   }, (errorresp) => {
       console.log(JSON.stringify(errorresp));
   })

   
}, []);

console.log(commonStore.cart,'----------');


  return (

    <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      {commonStore.cart.map((item)=>{
       return item.productId
      })}
      <Typography variant="h4" align="center" gutterBottom>
        Your Shopping Cart
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <GiftCheckbox />
            {/* {commonStore.cart.map((el)=>{return <div>{el}</div>})} */}

            {commonStore.cart.map((item)=>{
                return  <ShoppingCart productId={item.productId} quantity={item.quantity} />
      })}
           
            {/* {crr.map((item)=>{
                return  <ShoppingCart productId={item.product_id} quantity={item.qty} />
      })} */}
           
            {/* <ShoppingCart productId={item.productId} quantity={item.quantity} /> */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
         
           <OrderSummary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;
