

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(props) {
  const [value, setValue] = React.useState(props.userRating);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Controlled</Typography> */}
      <Rating
        name="simple-controlled"
        value={value}
        precision={0.1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} 
        
        
        readOnly />
    </Box>
  );
}