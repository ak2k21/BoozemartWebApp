import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PickupDetails from "../../components/PickupDetails";
import PaymentMethods from "../../components/paymentmethod";


function SecureCheckout() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div>
          <a href="#">Back To Cart</a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faLock} size="2x" style={{ marginRight: "10px" }} />
          <h1>SECURE CHECKOUT</h1>
        </div>
        <div></div>
      </div>
      
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: 100,
        }}>
          <AccountCircleIcon style={{ marginRight: "5px" }} />
          Welcome, user name!
        </div>
        <div style={{
            marginTop:30,
            marginLeft:100
        }}>
        <div style={{
            width:800,
           
        }}><PickupDetails /></div>
      </div>
      <div style={{
         marginTop:30,
         marginLeft:100
      }}>
      <div style={{
        width:800
      }}><PaymentMethods/></div>
      </div>
     
      <div style={{
        marginTop:30,
       marginLeft:100,
       width:800,
        display: 'flex',
        border: '1px solid #ccc',
        borderRadius: '8',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease',
        border: '5px solid rgb(235, 239, 229)',
        overflow: 'hidden',
        height: '200'
      }}>3.REVIEW ORDER</div>
        </div>
      </div>
    
  );
}

export default SecureCheckout;