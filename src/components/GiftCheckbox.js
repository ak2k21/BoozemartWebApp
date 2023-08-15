
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function GiftCheckbox() {
    const containerStyle = {
        backgroundColor: '#edf7fe',
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        height:'20px',
        margin:'20px'
    };

    const iconStyle = {
        fontSize: '24px',
        marginRight: '10px',
        color: '#007bff',
    };

    return (
        <Box sx={containerStyle}>
            <Checkbox color="primary" style={{ marginRight: '10px' }} />
            <div>
                <Typography variant="body1" sx={{ marginLeft: 2 }}>
                    <span style={{ fontWeight: 'bold', color: '#555' }}>Gift Icon:</span> Discover our special gift selection.
                </Typography>
            </div>
            <div>
                <Link href="#" sx={{ color: 'green', textDecoration: 'none', fontWeight: 'bold' }}>
                    Learn more {">"}
                </Link>
            </div>
        </Box>
    );
}

export default GiftCheckbox;
