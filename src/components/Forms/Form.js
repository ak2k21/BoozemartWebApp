import React, { useState } from 'react';
import TextInput from '../TextInput';
import './Form.css'
import { Button } from '@mui/material';

function Form(props) {
    const [fullName, setfullName] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [Password, setPassword] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [Address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullNameRegex = /^[a-zA-Z\s]+$/;
        if (!fullNameRegex.test(fullName)) {
          alert("Name should only contain letters and spaces.");
          return;
        }
        const phoneNumberRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
        if (!phoneNumberRegex.test(phoneNumber)) {
          alert("Phone number should be a 10-digit number.");
          return;
        }
        }
    return (
        <div className='Container'>
            <form onSubmit={handleSubmit} >
                <div>
                    <TextInput
                        label="fullName"
                        value={fullName}
                        placeholder="Full Name"
                        onChange={(e) => setfullName(e.target.value.replace(/[^\d/]/g, ""))} />
                </div><br />
                <div>
                    <TextInput
                        label="Email Id"
                        placeholder="EmailId"
                        value={EmailId}
                        onChange={(e) => setEmailId(e.target.value)} />
                </div><br />
                <div>
                    <TextInput
                        label="Passwordd"
                        placeholder="Password"
                        value={Password} />
                </div><br />
                <div>
                    <TextInput
                        value={phoneNumber}
                        placeholder="phoneNumber"
                        onChange={(e) => setphoneNumber(e.target.value.replace(/[^\d/]/g, ""))} />
                </div><br />
                <div>
                    <TextInput
                        label="Address"
                        placeholder="Address"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)} />
                </div> <br />
                <div>
                    <Button variant='contained' type="submit">Submit</Button>
                </div>
            </form>
        </div>

    )
}
export default Form;