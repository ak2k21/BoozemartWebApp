import { useState } from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from "@mui/material";
import './style.css';

function CreateAccount() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [EmailId, setEmailId] = useState("");

    return (
        <div>
            < form style={{ alignItems: "center" }}>
                <h1>CreateAccount</h1>
                <div>

                    <TextField
                        id="outlined-textarea"
                        label="firstName"
                        placeholder="john"
                        firstName
                        action={setFirstName}
                        required
                    />
                
                    <TextField
                        style={{ marginLeft: "20px" }}
                        id="outlined-textarea"
                        label="LastName"
                        placeholder="alex"
                        firstName
                        action={setLastName}
                        required
                    />
                    
                </div>
                <br/>
                <div >
                    <TextField className="number"
                       
                        id="outlined-textarea"
                        label="PhoneNumber"
                        placeholder="12345678"
                        phoneNumber
                        action={setPhoneNumber}
                        required
                    />
                </div>
                <br/>
                <div>
                <Button variant="outlined" style={{ backgroundColor: "red", color: "black", marginLeft: "10px", width:"468px" }}>
                        VerifyOtp</Button>
                </div>
                <br/>
                <div >
                    <TextField className="Email"
                       
                        id="outlined-textarea"
                        label="EmailId"
                        placeholder="xyz@gmail.com"
                        EmailId
                        action={setEmailId}
                        required
                    />
                </div>
                <br/>
                <div>
                    <FormControlLabel control={<Checkbox />} label="I am at least 21 years old or older and 
                I agree to the legal Terms and Conditions of this program and that 
                I am signing up to receive emails from Total Wine & More" />
                </div>
                <br/>
                <div>
                    <a href="#" style={{marginLeft:"10px"}}>Terms and Conditions</a>
                </div>
                <div>
                    <Button variant="contained" SUBMIT>
                        SUBMIT
                    </Button>
                </div>
              
            </form>

        </div>
    )
}
export default CreateAccount;