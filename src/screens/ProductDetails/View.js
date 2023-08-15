import React, { useState } from "react";
import './Styles.css';
import { Typography } from "@mui/material";
import MouseOverPopover from "../../components/MouseOverPopOver";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import PickUp from "../../components/PickUp";
import BasicButtons from "../../components/BasicButton";
import Counter from "../../components/Counter";
import TextInput from "../../components/TextInput";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemButtons from "../../components/ListItemButton";
import { useParams } from 'react-router-dom';


function createData(qtyName,type, boolean) {
    return { qtyName,type, boolean };
  }
  const rows = [
    createData('1.75L','Single', 'true'),createData('750ml','Single', 'false'),createData('375ml','Single', 'false')];

    
function ProductDetails(props){   
    const { productId } = useParams();
    return(

    <div className="MainContainer">

        <div className="ImageContainer">
            For Image Purpose
        </div>
    
        <div className="InfoContainer">
            <div>
                <Typography  style={{fontFamily:"fantasy",backgroundColor:"yellow"}}>SPIRITS DIRECT</Typography>
                
                <Typography style={{fontFamily:"Times New Roman",fontSize:30 ,}}>El Padrino Blanco Tequila</Typography>
            
                <Typography style={{fontFamily:"RUBIK_REGULAR",fontSize: Typography.P2}}>750ml</Typography>

                <Typography style={{fontFamily:"RUBIK_REGULAR",fontSize: Typography.P2}}>Expert</Typography>

                <Typography style={{fontFamily:"RUBIK_MEDIUM"}}>$29.99</Typography>
                
                <Typography style={{fontFamily:"RUBIK_MEDIUM"}}>Mix 6 for $12.59 each Beverage Testing Institute</Typography>

                <MouseOverPopover/>
                
                <PickUp/>
            </div>

            <div  className="size">
                Size
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1 },
                    }}
                    >
                {rows.map((row) => (
                   
                <TextInput
                    variant="outlined"
                    readOnly="true"
                    defaultValue={row.qtyName+"("+row.type+")"}       
                    disabled="false"
                    label= {<CheckCircleIcon  fontSize="medium" 
                    color="primary"
                    baseClassName="material-icons-two-tone"
                    variant="contained"
                    display="box"/>}  
                 />   
                 ))}
                 </Box>                 
            </div>
            <div className="counter"><Counter/></div>
            <div className="basicbutton"> 
                <BasicButtons  
                    width="100%"
                    variant="outlined" 
                    disabled={false}                    
                    text="Add to Cart"
                    backgroundColor="#147d6b"
                    color="white"
                    />
                    <br/>
                    <div className="price">*Price, vintage and availability may vary by store.</div>
                    <div className="savetolist">Save to List</div>
            </div>            
            <br/>
            <br/>
            <br/>
            <br/>
            <div>Share &nbsp; <FacebookIcon fontSize="large"/>&nbsp;<TwitterIcon fontSize="large"/>&nbsp;<MailIcon fontSize="large"/></div>
            <br/>            
            <div className="frequent">Frequently bought together</div>            
                <div className="frequentproducts">images</div>
                <div className="priceforboth">
                    Price for both: 
                    <Typography style={{fontFamily:"RUBIK_MEDIUM"}}>$67.98</Typography>
                    <BasicButtons                      
                    variant="outlined" 
                    disabled={false}                    
                    text="Add to Cart"
                    backgroundColor="#147d6b"
                    color="white"
                    />
                </div>             
            <br/>
            <br/> <br/> <br/> <br/> <br/> <br/> <br/>
           <Divider/>
            <div className="frequent">Product Highlights---{productId}</div>

            <div><p>Mexico- Only 100% pure blue agave is used in this Blanco Tequila. Slow fermented for 48-60 hours and then double distilled in copper pot stills. Flavors of banana and cinnamon prevail in this smooth, clean tequila. Great for classic tequila cocktails! Gold Medal in Tastings.com.</p></div>     
            <div className="frequent">
            <ListItemButtons listitemheading="Product Details"
            listitem1="starred"/>
            </div>
            <div className="frequent">
            <ListItemButtons listitemheading="Food Pairings"
            listitem1="starred"/></div>      
        </div>
      
    </div>
    );
}
export default ProductDetails;