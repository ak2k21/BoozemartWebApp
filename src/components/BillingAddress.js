import React from "react";
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './BillingAddress.css';

function BillingAddress(){
    return(
        <div className="Billing">
            <div className="BillingAddress"><h4>Billing Address</h4></div>
            <div className="company-Name">
                <AddIcon/><a href="Company Name">Add Company Name</a>
                </div><br/>
                <div>
                <TextField
                    label="Address NickName"
                    focused
                    variant="outlined"
                    className="AddressNickName"
                
                />
                </div><br/>
                <div >
                <TextField
                    label="Address1"
                    focused
                    variant="outlined"
                    placeholder="Street Address"
                    className="Address"
                />
                 <TextField
                    label="Address2(Optional)"
                    focused
                    variant="outlined"
                    placeholder="Apt,street,Bloc"
                    className="Address2option"
                    style={{marginLeft:"20px"}}
                />
                </div><br/>
                <div>
                <TextField
                    label="City"
                    focused
                    variant="outlined"
                    placeholder="City"
                    className="city"
                    style={{marginRight:"10px",width:"20%"}}
                />
                 <TextField
                    label="State"
                    focused
                    variant="outlined"
                    placeholder="State"
                    style={{width:"17%"}}
                  
                />
                 <TextField
                    label="Zipcode"
                    focused
                    variant="outlined"
                    placeholder="Ex:510658"
                    className="Zipcode"
                    style={{marginLeft:"10px",width:"20%"}}
                />
                </div><br/>
                <div className="Savethiscard">
                <FormControlLabel control={<Checkbox defaultChecked />} label="Save this Card for Future purpose" /><br/>
               
                <FormControlLabel style={{marginRight:"33px"}} control={<Checkbox />} label="Make this my preffered payment method" />
                    
                </div>
           
        </div>
    )
}
export default BillingAddress;