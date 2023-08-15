import React  from 'react';
import { useState } from 'react';
import TextInput from '../../components/TextInput';
import { Button } from '@mui/material';
import './shopping.css';

const ShoppingList=(props)=>{
    const [Shopping,setShopping]=useState("");
    return(
        <div>
           <h3 >Shopping List</h3>
           <div className='container'>
           <i className="fa fa-shopping-bag" ></i><p>you don't have any shopping lists saved yet.Create one here</p>
            <div className='shopping'>
           
            <TextInput
            label="Create a new list"
            placeholder="Enter new list name"
            Create a new list
            value={Shopping}
            style={{marginLeft:"100px"}}
            />
             <Button variant="contained" style={{width:"15%"}}>Create</Button>
             </div>
            </div>
        </div>

    )
}
export default ShoppingList;