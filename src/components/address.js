import React, { useState } from 'react';
import './addresscountry.js'
import CountrySelect from './addresscountry.js';
import './address.css'
import { Input } from '@mui/material';


const AddressForm = () => {
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateProvince, setStateProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle form submission
    console.log({
      streetAddress,
      city,
      stateProvince,
      postalCode,
      country,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
    
        <div>
        <label class="countrylabel">Country</label><br/>
        <div className="country"><CountrySelect value={country} onChange={(e) => setCountry(e.target.value)}  /></div>
      </div><br/>
      <div >
        <label class="streetlabel">Street Address</label><br/>
        <input className='street'
          type="text"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          // placeholder='street'
        />
      </div>
      <div>
        <label class="landlabel">Landmark</label><br/>
        <input className='city' type="text" value={city} onChange={(e) => setCity(e.target.value)}  placeholder='e.g. near your land mark' />
      </div>
      <div>
        <label class="landlabel" >Town/city</label><br/>
        <input className='state'
          type="text"
          value={stateProvince}
          onChange={(e) => setStateProvince(e.target.value)}
          // placeholder='state'
        />
      </div>
      <div>
        <label class="pinlabel">PinCode</label><br/>
        <input className='pincode' type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}  placeholder='' />
      </div>
      <div>
      <input type="checkbox"></input> make this my defult address
      </div>
      <br/>
      <button class="add">Add address</button>
      
    </form>
    
  );
};

export default AddressForm;
