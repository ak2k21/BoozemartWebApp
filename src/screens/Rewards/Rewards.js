import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CheckIcon from '@mui/icons-material/Check';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Button } from "@mui/material";

export default function Rewards() {

    return (
        <div>
            <div>
                <p> <StarOutlineIcon style={{ fontSize: "30px" }} /><b style={{ marginRight: "88%", fontSize: "30px", fontWeight: "normal" }}>Rewards</b></p>
            </div>
            <div style={{ height: "150px", width: "97%", background: "#f0f0f0", color: "black", padding: "20px" }}>

                <div style={{ display: "flex", gap: "150px" }}>
                    <div>
                        <p><b style={{ fontWeight: "normal", fontSize: "30px" }}>Hello User</b></p><br />
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div><HowToRegIcon style={{ fontSize: "60px" }} /></div>
                        <div>
                            <b>SELECT</b><br />
                            STATUS<br />
                            12/31/2024
                        </div>
                    </div>

                    <div style={{ textAlign: "start" }}>
                        <CheckIcon />$5 Reward (see terms and conditions)<br />
                        <CheckIcon />Bonus point promotions<br />
                        <CheckIcon />Record of past purchases<br />
                    </div>

                </div><br />


                <div style={{ display: "flex", gap: "50px" }}>
                    You have 0 points this year! Collect 5,000 points by 12/31/2023 to get Reserve status through 12/31/2024
                    <a href="#">Learn more</a>
                </div>



            </div>
            <hr />
            <div style={{ height: "200px", width: "97%", background: "#f0f0f0", color: "black", padding: "20px" }}>
                <p><b style={{ fontSize: "20px" }}>Total rewards. Just for you</b></p><br />

                <div style={{ display: "flex", gap: "40px" }}>

                    <div><p><b>0<br />Reward Points</b><br />
                        Get a <b>$5 Reward</b> after 5,000 points</p>
                    </div>

                    <div>
                        <ShoppingCartIcon />
                        <p><b>Shop now</b><br />
                            Collect 10 points for every $1 spent</p>

                    </div>
                    <div>
                        <PlaylistAddCheckCircleIcon />
                        <p><b>Collect </b><br />
                            Collect bonus points on specific purchases</p>

                    </div>
                    <div>
                        <CelebrationIcon />
                        <p><b>Celebrate</b><br />
                            Get a $5 Reward for every 5,000 points</p>

                    </div>
                </div>
            </div><br />



    <div
      style={{
        display: "flex",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease",
        border: "5px solid rgb(235, 239, 229)",
        overflow: "hidden",
        height: 200,
        gap:"100px",
      }}
    >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytpezaBg-d5r9izHT5gA6gab8QbPCAj9csA&usqp=CAU" />
    
      
      <div style={{ textAlign: "start" }}>
                        <p><CheckIcon />Member-Only Events</p>
                        <p><CheckIcon />1 free wine gift bag per month</p>
                        <CheckIcon />50% off two classroom tickets per month<br />
                             *Exclusions Apply<br/>
                        
                    </div>

      <div
        style={{
          marginTop: 45,
          marginLeft: 45,
        }}
      >
        <Button variant='outlined'>View My Benefits</Button>
      </div>
    </div>

            

            <div>

                <p><b style={{ marginRight: "70%" }}>US Military Community</b></p>
                <div style={{ height: "80px", width: "97%", background: "#f0f0f0", color: "black" }}><br />
                    <div >
                        <b >Some text.....</b>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>

    );
}