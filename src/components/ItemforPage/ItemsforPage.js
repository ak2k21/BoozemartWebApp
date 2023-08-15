import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function ItemsforPages(){
    
    const [sortBy, setSortBy] = useState(''); // State to keep track of selected sort option

    const handleSortChange = (event) => {
      setSortBy(event.target.value);
    };
    return(
        <div>
            <div className='container'>
            <TextField
                    label="Items per Page:"
                    focused
                    style={{ marginRight: "20px", width: "30%" }}
                    select
                    variant="outlined"
                    value={sortBy}
                    onChange={handleSortChange}
                    SelectProps={{
                      endAdornment: sortBy === 'option7' ? <span>&#10004;</span> : null,
                    }}
                >
                    <MenuItem value="option1">24 Items</MenuItem>
                    <MenuItem value="option2">72Items</MenuItem>
                    <MenuItem value="option3">120 Items</MenuItem>
                    
                </TextField>
                <TextField
                    label="Sort"
                    focused
                    style={{ marginRight: "20px", width: "30%" }}
                    select
                    variant="outlined">
                       
                    <MenuItem value="option1">Relevance</MenuItem>
                    <MenuItem value="option2">Expert Rating</MenuItem>
                    <MenuItem value="option3">Customer Rating</MenuItem>
                    <MenuItem value="option4">Price (highest first)</MenuItem>
                    <MenuItem value="option5">Price(lowest first)</MenuItem>
                    <MenuItem value="option6">Name(A-Z)</MenuItem>
                    <MenuItem value="option7">Name(Z-A)</MenuItem>
                </TextField>
            </div>
        </div>
    )
}
export default ItemsforPages;