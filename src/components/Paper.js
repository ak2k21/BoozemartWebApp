import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Paper1() {
  return (
    <Box
      sx={{
        // display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1000,
          height: 150,
        },
      }}
    >
     
     <Paper variant="outlined" />
    </Box>
  );
}