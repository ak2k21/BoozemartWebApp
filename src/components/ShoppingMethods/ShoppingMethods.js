import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function ShoppingMethod() {
    return (
        <div>
            <div style={{
                 padding: "20px",
                 height: "100%",
                 width:"30%",
                 marginLeft: "300px",
                 backgroundColor: "#f0f0f0",
                 borderradius: "4px",
            }}>
                <h1>Shopping Method</h1>
                <FormControlLabel control={<Checkbox />} style={{ marginRight: "150px" }} label="Pickup" />
                <div style={{
                    marginLeft:"110px"
                }}>
                    <RadioGroup>
                        <FormControlLabel value="Manassas,VA" control={<Radio />} label="Manassas,VA" />
                        <FormControlLabel value="All Stores" control={<Radio />} label="All Stores" />
                    </RadioGroup>
                </div>
                <div>
                <FormControlLabel control={<Checkbox />} style={{marginRight:"70px"}} label="Delivery to 20109" /><br/>
                <FormControlLabel control={<Checkbox />} style={{marginRight:"89px"}} label="Ship to Virginia" />
                </div>
               <div>
                <h1>Product Availability</h1>
                <FormControlLabel control={<Checkbox />} style={{marginLeft:"40px"}} label="Include In-store Purchase items" /><br/>
                <FormControlLabel control={<Checkbox />} style={{marginLeft:"1px"}} label="Include Out of Stock Items" />
               </div>

            </div>

        </div>
    )
}
export default ShoppingMethod;