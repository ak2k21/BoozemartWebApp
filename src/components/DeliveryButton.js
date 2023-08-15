import * as React from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BasicButtons from "./BasicButton";


function DeliveryButton(props){
    return(
        <div className="DeliveryButton" style={props.style}>  
        <BasicButtons 
            variant="outlined"
            startIcon={<LocalShippingIcon/>}
            endIcon={props.endIcon}
            disabled={props.disabled}
            href={props.href}
            text="Delivery"
            onClick={()=> {alert("My Deals")}}/>
    </div>
    );
}
export default DeliveryButton;