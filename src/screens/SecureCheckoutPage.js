// import React from 'react';
// import { Paper, Typography, Button, Checkbox, TextField, FormControlLabel } from '@mui/material';

// const SecureCheckout = () => {
//     return (
//         <Paper
//             sx={{
//                 backgroundColor: "#F0F8FF",
//                 padding: '20px',
//                 borderRadius: '10px',
//                 boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
//             }}
//         >
//             <Typography variant="h6" gutterBottom>
//                 SECURE CHECKOUT
//             </Typography>
//             <Typography variant="h5" gutterBottom>
//                 Welcome, Rajesh!
//             </Typography>
//             <Typography variant="body2" gutterBottom>
//                 Edit
//             </Typography>
//             <section>
//                 <Typography variant="h6" gutterBottom>
//                     1. PICK UP DETAILS
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                     Pick up in Manassas: Friday, Aug 11, 2023, In-store pickup 12:00 PM - 9:00 PM
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                     Curbside Pickup Available
//                 </Typography>
//                 <FormControlLabel
//                     control={<Checkbox />}
//                     label="I am picking up this order"
//                 />
//                 <Typography variant="body2" gutterBottom>
//                     A government-issued ID must be presented while picking up your order.
//                 </Typography>
//             </section>
//             <section>
//                 <Typography variant="h6" gutterBottom>
//                     2. PAYMENT DETAILS
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                     My Discounts
//                 </Typography>
//                 <TextField
//                     label="Add Promo Code"
//                     variant="outlined"
//                     fullWidth
//                     margin="dense"
//                 />
//                 <Typography variant="body2" gutterBottom>
//                     Payment Method
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                     Saved payment list
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                     Add a new Credit or Debit Card
//                 </Typography>
//                 <TextField label="Card Number" variant="outlined" fullWidth margin="dense" />
//                 {/* Other fields for First & Last Name, Expiration Date, CVV, Billing Address, etc. */}
//                 <FormControlLabel
//                     control={<Checkbox />}
//                     label="Save this card for future purchases"
//                 />
//                 <FormControlLabel
//                     control={<Checkbox />}
//                     label="Make this my preferred payment method"
//                 />
//                 <Typography variant="body2" gutterBottom>
//                     Gift Cards
//                 </Typography>
//                 <Button variant="contained" color="primary">
//                     Add Total Wine & More Gift Card
//                 </Button>
//             </section>
//         </Paper>
//     );
// };

// export default SecureCheckout;



import React from 'react';
import { Paper, Typography, Button, Checkbox, TextField, FormControlLabel, Link } from '@mui/material';

const SecureCheckoutPage = () => {
    return (
        <Paper
            sx={{
                backgroundColor: "#F0F8FF",
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            <Typography variant="h6" gutterBottom>
                SECURE CHECKOUT
            </Typography>
            <Typography variant="h5" gutterBottom>
                Welcome, Rajesh!
            </Typography>
            <Typography variant="body2" gutterBottom>
                Edit
            </Typography>
            <section>
                {/* ...Pickup Details section... */}
            </section>
            <section>
                {/* ...Payment Details section... */}
                <Typography variant="body2" gutterBottom>
                    Payment Method
                </Typography>
                <FormControlLabel
                    control={<Checkbox />}
                    label="PayPal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    href="https://www.paypal.com"
                    target="_blank"
                >
                    PayPal
                </Button>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Add a new Credit or Debit Card"
                />
                {/* ...Credit/Debit Card fields... */}
            </section>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '20px' }}
            >
                Complete Purchase
            </Button>
        </Paper>
    );
};

export default SecureCheckoutPage;
