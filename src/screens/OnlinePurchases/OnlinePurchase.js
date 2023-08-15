import React from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './Onlinepurchase.css';


function OnlinePurrchase() {
    return (
        <div>
            <i><h1>Online Purchases</h1></i>
            <div className="container">

                <TextField
                    label="Sort by:"
                    focused
                    style={{ marginRight: "20px", width: "30%" }}
                    select
                    variant="outlined"
                >
                    <MenuItem value="option1">Most Reccent</MenuItem>
                    <MenuItem value="option2">Oldest to Newest</MenuItem>
                    <MenuItem value="option3">Order Type</MenuItem>
                    <MenuItem value="option4">Order Status</MenuItem>
                </TextField>
                <TextField
                    label="Order Placed within:"
                    focused
                    style={{ marginRight: "20px", width: "30%" }}
                    select
                    variant="outlined">
                    <MenuItem value="option1">Last 1 month</MenuItem>
                    <MenuItem value="option2">Last 3 month</MenuItem>
                    <MenuItem value="option3">Last 6 month</MenuItem>
                    <MenuItem value="option4">Last 12 month</MenuItem>
                    <MenuItem value="option5">Last 24 month</MenuItem>
                </TextField>
            </div><br />
            <div className="online">

                <img className="product-image" src="https://www.jiomart.com/images/product/original/rv44rkmagx/jacob-s-creek-unvined-shiraz-non-alcoholic-red-grape-still-wine-750-ml-product-images-orv44rkmagx-p591885579-0-202206030905.png?im=Resize=(420,420)" />
                <div style={{ gap: "70px", display: "flex" }}>

                    <div style={{ textAlign: "start" }}>

                        <p><b>Jacob's Creek Shiraz </b> </p>
                        size:50ML <br />
                        Qty: 1<br />
                        <b> $30</b>
                    </div>


                    <div style={{ gap: "70px", display: "flex" }}>
                        <div>
                            <p>Status</p>
                            <b style={{ color: "orange" }}>in-Transit</b>
                        </div>



                        <div>
                            <p>DeliveryExpectedBy</p>
                            24-dec-2024
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default OnlinePurrchase;

