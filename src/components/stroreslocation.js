import { Button } from "@mui/material";
import React from "react";
import './storeslocation.css';

function Stores() {
    return (
        <div className="Productcard-horizontal">
           
            
            <div className="store-info">
                <img src='https://www.totalwine.com/site/binaries/t1653583612256/cardMedium/content/gallery/module-images/swipeable-cards-library/image-cards/migration-related-links/beers-for-grilling.png' width alt="Store" />
                <div className="store-text">palm deserts <br/> 
                <a href="wine">23465_Highway111</a></div>
                
            </div>
            <div className="buttons-container">
                <Button>Set as my store</Button>
                <Button>View store info</Button>
            </div>
        </div>
    );
}

export default Stores;
