import React from 'react';
import  {Box}  from '@mui/material';
import './OrderSummarySmall.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const OrderSummarySmall = (props) => {

     // var orderId=props.orderId;
     var orderId=11;
     var [order,setOrder]=useState({});
     useEffect(() => {
     axios.get("http://ec2-43-204-114-19.ap-south-1.compute.amazonaws.com:8045/order/"+orderId)
           .then((res)=> {
             setOrder(res.data);
           }
           )
 
 }, []);



    return (
       <Box style={{backgroundColor:"#F0F8FF", height:'213px',width:'400px',}}>
    <div className="product-page">
      <div className="product-name">Ordersummary</div>
      <div className="item">
      <h5>(10 items)</h5>
      </div>
      <hr />
      <div className="subtotal">
        Subtotal:
        <div className="subtotal-value">{order.price_without_delivery}</div>
      </div>
      <div className="tax">
        Tax:
        <div className="tax-value">{order.total_tax_price}</div>
      </div>
      <div className="service">
        Service:
        <div className="service-value">free</div>
      </div>
      <div className="total">
        Total:
        <div className="total-value">{order.total_price}</div>
      </div>
    </div>











    </Box>
    );
};

export default OrderSummarySmall;