import * as React from "react";
import HomeIcon from '@mui/icons-material/Home';
import BasicButtons from "./BasicButton";



function PickUpButton(props){
    return(
        <div className="PickUpButton" style={props.style}>                 
        <BasicButtons 
            variant="outlined"
            startIcon={<HomeIcon/>}
            endIcon={props.endIcon}
            disabled={props.disabled} 
            href={props.href} 
            text="Pickup"
            onClick={()=> {alert("My Deals")}}>
            
        </BasicButtons>
        </div>
    );
}
export default PickUpButton;