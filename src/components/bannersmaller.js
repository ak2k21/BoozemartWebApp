import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 1500,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.`;

export default function ZeroWidthStack() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
        <img src="https://st4.depositphotos.com/18437236/22788/i/450/depositphotos_227881646-stock-photo-basis-banner-bottle-wine-glass.jpg" style={{height:'150px',}}/>
          <Typography style={{color:'black',}}>To activate savings, you need a Total Wine & More account. Sign in above or create an account to view your offers and save. Valid on 750ml or 1.5L Winery Direct wines. Excludes items with prices ending in 7. Cannot be combined with any other Total Wine & More discount. Good thru 8/6/2023.
      </Typography>
      <button style={{color:'green',border:'none',height:'100px',borderradius:"10%",}}>shop winery direct</button>
        </Stack>
      </Item>
    </Box>
  );
}