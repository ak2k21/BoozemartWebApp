import * as React from 'react';
import TextInput from '../../components/TextInput';
import SwitchButton from '../../components/SwitchButton.js';
import { useState } from 'react';
import SearchSuggestions from '../../components/SearchSuggestions';
import { Button } from "@mui/material";



export default function AboutMe() {
    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
    };
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [mail, setMail] = useState("");
    const [pickuppersonname, setPickuppersoname] = useState("");
    const [pickuppersonemail, setPickuppersonemail] = useState("");
    const [pickuppersonphone, setPickuppersophone] = useState("");



    return (
        <div>

            <p><b style={{ fontSize: "20px" }}>Profile & Settings</b><br /></p>

            <p><b style={{ marginRight: "93%" }} >Profile</b></p>

            <div style={{ height: "200px", width: "100%", background: "#f0f0f0", color: "black" }}><br/>
                <b style={{ fontSize: "15px", marginRight: "88%" }}>Personal Information</b><hr />
                <div style={{ display: "flex", gap: "10px" }} >
                    <div>
                        <p>Name</p>
                        <TextInput
                            value={name}
                            placeholder='Name'
                            action={setName} 
                            style={{background:'transparent' }}/>
                    </div>

                    <div>
                        <p>Phone</p>
                        <TextInput
                            value={phone}
                            placeholder='Phone'
                            action={setPhone}
                            style={{background:'transparent' }} />
                    </div>

                    <div>
                        <p>DOB</p>
                        <TextInput
                            value={dob}
                            placeholder='MM/DD/YY'
                            action={setDob} 
                            style={{background:'transparent' }}/>
                    </div>

                </div>
            </div><br />


            <p><b style={{ marginRight: "88%" }}>Sign-In Information</b></p>
            <div style={{ height: "150px", width: "100%", background: "#f0f0f0", color: "black" }}><br />
                <b style={{ fontSize: "15px", marginRight: "88%" }} >Username/Mail</b><hr />
                <div style={{ marginRight: "88%" }}>
                    <TextInput
                        value={mail}
                        placeholder='Mail'
                        action={setMail} 
                        style={{background:'transparent' }}/>
                </div>
            </div>


            {/* <div style={{ marginRight: "1200px" }}> */}

            <p><b style={{ marginRight: "90%" }}> Preferred Store</b></p>
            <div style={{ height: "100px", width: "100%", background: "#f0f0f0", color: "black" }}><br />
                <div style={{ marginRight: "88%" }}>
                    <SearchSuggestions />
                </div>
            </div><br />
            {/* </div> */}


            <p><b style={{ marginRight: "83%" }}>Communication Preferences</b></p>
            <div style={{ height: "200px", width: "100%", background: "#f0f0f0", color: "black" }}><br />
                <b style={{ marginRight: "88%" }} >Email Subscriptions</b><hr />

                <div style={{ display: "flex", gap: "30px" }}>
                    <div><p><b>Promotions and Offers</b><br />
                        Special Promotions, Offers and featured items</p>
                        <SwitchButton />
                    </div>
                    <div><p><b>Events and News</b><br />
                        Tasting and educational events, exclusive dinners, producer visits and more</p>
                        <SwitchButton />
                    </div>
                    <div><p><b>All Emails Subscription</b><br />
                        Turn off to stop recieving all emails includng $5<br />
                        Rewards and monthly Rewards perks</p>
                        <SwitchButton />
                    </div>
                </div>
            </div>




            <p><b style={{ marginRight: "90%" }}>Address Book</b></p>
            <div style={{ height: "100px", width: "100%", background: "#f0f0f0", color: "black" }} ><br />

                <p> Have to import Address page here</p>


            </div>


            <p><b style={{ marginRight: "88%" }}>Payment Methods</b></p>

            <div style={{ height: "100px", width: "100%", background: "#f0f0f0", color: "black" }}><br />


                <p>New Credit cards can be added during checkout</p>


            </div>


            <p><b style={{ marginRight: "88%" }}>Store PickUp Person</b></p>
            <div style={{ height: "450px", width: "100%", background: "#f0f0f0", color: "black" }}><br />
                <b style={{ fontSize: "15px", marginRight: "88%" }}>Add New Pickup Person</b><hr />

                <div style={{ marginRight: "88%" }}>
                    <div>
                        <p>Name</p>
                        <TextInput
                            value={pickuppersonname}
                            placeholder=' Person Name'
                            action={setPickuppersoname} 
                            style={{background:'transparent' }}/>
                    </div>

                    <div>
                        <p>DOB</p>
                        <TextInput
                            value={pickuppersonemail}
                            placeholder='Mail'
                            action={setPickuppersonemail}
                            style={{background:'transparent' }} />
                    </div>

                    <div>
                        <p>Phone</p>
                        <TextInput
                            value={pickuppersonphone}
                            placeholder='Phone'
                            action={setPickuppersophone}
                            style={{background:'transparent' }} />
                    </div>
                </div>


            </div>


            <p><b style={{ marginRight: "80%" }}>US Military Community</b></p>
            <div style={{ height: "80px", width: "100%", background: "#f0f0f0", color: "black" }}><br />
                <div style={{ marginRight: "80%" }}>
                    <b>Some text.....</b>
                    <a href="#">Learn more</a>
                </div>
            </div><br/>

            <div>
            <Button variant='contained'>Save Changes</Button>
            </div>
        </div>
    );
}