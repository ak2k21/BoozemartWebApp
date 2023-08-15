
import React, { useState, useEffect } from 'react';
import { Paper, Typography, Button, Box, Checkbox, Link } from '@mui/material';
import axios from 'axios';
import { placeOrder } from './ProductActions';

const OrderSummary = (props) => {
    var orderId = 11;
    var [order, setOrder] = useState({});

    // useEffect(() => {
    //     axios.get("http://ec2-43-204-114-19.ap-south-1.compute.amazonaws.com:8045/order/" + orderId)
    //         .then((res) => {
    //             setOrder(res.data);
    //         });
    // }, []);
    
    return (
        <Box
            sx={{
                backgroundColor: "#F0F8FF",
                height: '700px',
                width: '400px',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            <Typography variant="h5" gutterBottom>
                Order Summary
            </Typography>
            <Paper sx={{ padding: '15px' }}>
                <Typography variant="subtitle1" gutterBottom>
                    Picking up in
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Open today 9am-10pm
                </Typography>
                <Button variant="outlined" color="primary" sx={{ marginTop: '10px' }}>
                    Change
                </Button>
            </Paper>
            <Paper sx={{ height: '165px', marginTop: '20px', padding: '15px' }}>
                <Checkbox sx={{ marginRight: '10px' }} />
                <Typography variant="subtitle1" gutterBottom>
                    This order contains a gift
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Select when you would like to pick up your order
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'black',
                        marginTop: '10px',
                        color: 'white',
                    }}
                >
                    Select pickup window
                </Button>
            </Paper>
            <Link
                href="#"
                sx={{
                    marginTop: '20px',
                    color: 'green',
                    display: 'block',
                    textAlign: 'center',
                }}
            >
                Add promo card
            </Link>
            
            <div sx={{ marginTop: '20px' }}>
                <p>
                    <strong>Subtotal:</strong> 
                    {/* {order.price_without_delivery} */}
                </p>
                <p>
                    <strong>Service Fee:</strong> $--
                </p>
                <p>
                    <strong>Estimated Tax:</strong> 
                    {/* {order.total_tax_price} */}
                </p>
                <p>
                    <strong>Estimated Total:</strong> 
                    {/* {order.total_price} */}
                </p>
            </div>

            
            <Button
                variant="contained"
                sx={{
                    color: 'white',
                    backgroundColor: 'black',
                    borderColor: 'black',
                    marginTop: '20px',
                    width: '100%',
                }}
                onClick={()=>{placeOrder();}}
            >
                Secure Checkout
            </Button>
            <Button
                variant="contained"
                sx={{
                    color: 'white',
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    marginTop: '10px',
                    width: '100%',
                }}
            >
                PayPal
            </Button>

           
            
            
        </Box>
    );
};

export default OrderSummary;
