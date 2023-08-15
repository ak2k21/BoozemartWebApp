import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import './addcard.css';
import { Title } from "@mui/icons-material";

const AddCreditCrad = (props) => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      alert("CVV must be a 3-digit number.");
      return;
    }
    const expDateRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    if (!expDateRegex.test(expDate)) {
      alert("Expiration date must be in the format MM/YY.");
      return;
    }
    const data = {
      cardHolderName,
      cardNumber,
      expDate,
      cvv,
    };
    axios.post("", data)
      .then((response) => {
        console.log("Post request successful!", response);
      })
      .catch((error) => {
        console.error("Error making post request:", error);
      });
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <div className="holdername">
        
      <TextField
        label="Card Holder Name"
        value={cardHolderName}
        onChange={(e) => setCardHolderName(e.target.value)}
      />
      </div>
      <div className="cardnumber">
        
      <TextField
        label="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      </div>
      
      <div className="expdate">
      <TextField
        label="Expiration Date"
        placeholder="MM/YY"
        value={expDate}
        onChange={(e) => setExpDate(e.target.value.replace(/[^\d/]/g, ""))}
      />
      </div>
      <div className="cvvnumber">
        
      <TextField
        label="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value.replace(/[^\d]/g, ""))}
        inputProps={{
            maxLength: 3,
          }}
      />
      </div>
      <div className="submitbutton">
      <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddCreditCrad;
