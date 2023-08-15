import React from "react";
import BasicButtons from "./BasicButton";

function BuyitAgainComponent(){
    return(
        <div>
            <br/><br/>
           
            <div style={{
                padding: "20px",
                height: "100%",
                width:"50%",
                marginLeft: "300px",
                backgroundColor: "#f0f0f0",
                boxShadow:'0 2px 4px rgba(0, 0, 0, 0.1)',                
                borderradius: "4px",
            }}>
                <div>
                <BasicButtons text="New" 
            style={{backgroundColor:"red",
           display:"flex",
            width:'10%',
            borderradius:"25%",
            color:"black",
            borderradius: "10px",
            marginTop: "-40px",
            marginLeft: "500px",
            }}/>
                </div>
                <div>
                <h2 style={{marginRight:"500px"}}>Buy It Again</h2>
                <span>
                    We have done the Shopping for you and bundled your Favourite Products together -all you
                    need to do is Check Out.
                </span><br/><br/><br/>
                <span style={{marginTop:"50px",marginLeft:"300px",fontSize:"18px"}}>Subtotal <b>$113</b></span>
               
                <BasicButtons
                text="Add 6 Items to Cart"
                variant="standard"
                btnstyle={{ backgroundColor: 'green', color: 'Black' ,marginTop:'50px',width:"70%"}}/>
               </div>
            </div>
            
        </div>
    )
}
export default BuyitAgainComponent;