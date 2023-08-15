import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const Ratings = () => {
    const [value, setValue] = React.useState(2);
  
    return (
      <Box component="fieldset" mb={1} borderColor="transparent">
        <Rating
          name="rating"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    );
  };
  
  export default Ratings;