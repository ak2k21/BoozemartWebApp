import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './In-store Purchase.css';
import Categorys from '../Categorylist/categorys';

const Purchases=()=>{
  return(
    <div>
    <span><i><h1>In-Store Purchases</h1></i></span>
    <div className='Container'>
    <TextField 
            label="Sort by:" 
            focused 
            style={{marginRight:"20px", width:"30%"}}
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
            style={{marginRight:"20px", width:"30%"}}
            select
            variant="outlined">
                 <MenuItem value="option1">Last 1 month</MenuItem>
                    <MenuItem value="option2">Last 3 month</MenuItem>
                    <MenuItem value="option3">Last 6 month</MenuItem>
                    <MenuItem value="option4">Last 12 month</MenuItem>
                    <MenuItem value="option5">Last 24 month</MenuItem>
                    </TextField>
      </div><br/><br/>

    <div>
    <div className='storePurchases'>
      <p>you have not made any In-store Purchases</p>
  
      <Categorys/>
      

    </div>
    </div>

    </div>
  )
}
export default Purchases;