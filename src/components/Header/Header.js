import React from 'react';
import HeaderMenu from './headermenu';
import SearchSuggestions from '../SearchSuggestions';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../logo';
import BasicButtons from '../BasicButton';

const Head = () => (
    <header className='headerContainer'>
        <div className='header'>
            <Logo/>
            <div className='search'><SearchSuggestions /></div>
            <div><button className='CartIcon'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></button></div>
        </div>
        <div className='header'>
            <div style={{display: "flex"}}>
                <div className="menu"><HeaderMenu /></div>
                <div>
                    <BasicButtons style={{margin: "4px 0"}} btnstyle={{"color": "red", "fontWeight": "bold", "letterSpacing":0}}
                                    variant="standard" text="Deals" onClick={()=> {alert("My Deals")}}/>
                </div>
            </div>
            <div style={{display: "flex"}}>   
                <BasicButtons style={{margin: "4px 0"}} variant="standard" text="Sign In" onClick={()=> {alert("signin")}}/>
                <BasicButtons style={{margin: "4px 0"}} variant="standard" text="Create Account" onClick={()=> {alert("Create Account")}}/>   
            </div>
        </div>
    </header>
)

export default Head;