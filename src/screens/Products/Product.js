import React, { useState } from 'react';

import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; 
import './products.css';

function ImageOverlay(props) {
    var items = [
        {
            imageUrl: "https://th.bing.com/th/id/OIP.VVKcNyqJMGbMrW-u2lKStAHaEo?pid=ImgDet&rs=1" 
        },
        {
            imageUrl: "https://www.africabig7.com/wp-content/uploads/2020/04/grapes-and-wine.jpg" 
        }
    ];

    return (
      <div className="carouselImageWidth">
        <Carousel>
            {items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
        </div>
    );
}

function Item(props) {
    const [OpenImage, setImageOpen] = useState(false);

    const overlayStyle = {
        backgroundImage: `url(${props.item.imageUrl})`, 
    };

    const openImage = () => {
        setImageOpen(true);
    };

    const closeImage = () => {
        setImageOpen(false); // Corrected the function name here
    };

    return (
        <Paper className="carousel-item">
            <div className="image-overlay" style={overlayStyle} onClick={openImage}></div>
          
            <Modal open={OpenImage} onClose={closeImage}>
                <div className="modal-content">
                    <img src={props.item.imageUrl} alt={props.item.name} />
                    <IconButton
                        aria-label="close"
                        className="close-button"
                        onClick={closeImage}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
            </Modal>
        </Paper>
    );
}

export default ImageOverlay;
