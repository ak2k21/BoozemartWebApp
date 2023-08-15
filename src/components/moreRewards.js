import { Button } from "@mui/material";
import React from "react";

const MoreRewards = () => {
  return (
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
      }}
    >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyykHL7h2L-Z4h4tg57SEKhSYZbCCGcJHETHUj3GEVQI4x6fVzo9tylpkQmJejwTH7XYI&usqp=CAU" />
      <div
        style={{
          marginTop: 20,
          marginLeft: 40,
        }}
      >
        <h2>Select</h2>
        <div>STATUS</div>
      </div>
      <div
        style={{
          marginTop: 45,
          marginLeft: 50,
        }}
      >
        0<br />
        POINTS
      </div>
      <div
        style={{
          marginTop: 45,
          marginLeft: 60,
        }}
      >
        $5 Rewards(see terms and conditions below)
        <br />
        Bonus point promotions
        <br />
        Record of past purchase
      </div>
      <div
        style={{
          marginTop: 45,
          marginLeft: 45,
        }}
      >
        <Button>View My Benefits</Button>
      </div>
    </div>
  );
};

export default MoreRewards;
