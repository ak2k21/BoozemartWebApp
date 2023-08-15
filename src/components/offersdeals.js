import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 1500,
//   height:100,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.`;

export default function ZeroWidthStack() {
  return (
    <><Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
          <Item
              sx={{
                  my: 1,
                  mx: 'auto',
                  p: 2,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
          >

              <Stack spacing={2} direction="row" alignItems="center">
                  {/* <h2 style={{marginLeft:'4%',}}>Deals</h2> */}
                  <img src="https://images.squarespace-cdn.com/content/5c7031317fdcb816bbeb1459/1553703424826-SGL1GX6LSOV5DIDXZ5CE/wineshop.jpeg?content-type=image%2Fjpeg" style={{ height: '400px', width: '1450px', }} />
              </Stack>
          </Item>
      </Box><Box sx={{ flexGrow: 1, overflow: 'hidden',  }}>
              <Item
                  sx={{
                      my: 2,
                      mx: 'auto',
                      p: 2,
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  }}
              >

                  <Stack>
                    <div style={{marginRight:'60%',}}>
                      <h1>20% off </h1>
                      <h3>valid through 08/09/2023</h3>
                      <p>save 20% when you have 6 mix or more 750ml and 1.75l winery</p>
                      <h3>offer details</h3>
                      <Button variant="contained">Activate</Button>
                      <img src="
https://us.123rf.com/450wm/vectorgalaxy/vectorgalaxy1805/vectorgalaxy180500854/101157150-20-off-logo-isolated-on-white-background-for-your-web-and-mobile-app-design-colorful-vector-icon.jpg?ver=6" style={{marginLeft:'160%',marginTop:'-50%',height:'250px',}}/>
                      </div>
                  </Stack>
              </Item>
          </Box>
          <Grid container spacing={2} style= {{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',}}>
      <Grid item xs={12} sm={6}>
        <div style={{height:'60px',width:'80px',}}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdKwZ4th35I6CZK7uJaT8ubvcfhNWxMv98A&usqp=CAU"/>
        </div>
      </Grid>
      <Grid>
        <div style={{marginBottom:'15%',marginTop:'-9%',marginLeft:'25%',}}>
        <h1 style={{marginRight:'30%',}}>Limited-time special</h1>
        <Typography style={{marginLeft:'24%',}}>
        Find fantastic items at special limited-time prices. Shop now, so you don’t miss these great deals on a wide selection of popular favorites.
        </Typography>
        <Button variant="outlined" style={{marginTop:'2%',marginRight:'35%',}}>Shop limited time special</Button>
        </div>
      </Grid>
    </Grid>
    <Grid container spacing={2} style= {{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',}}>
      <Grid item xs={12} sm={6}>
        <div style={{height:'60px',width:'80px',}}>
        <img
          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBAhL9evatRQpWWgGEnL7nJf8cY1O6XKyUw&usqp=CAU"/>
        </div>
      </Grid>
      <Grid>
        <div style={{marginBottom:'3%',marginTop:'-5%',}}>
        <h1 style={{marginRight:'30%',}}>Save collection</h1>
        <Typography style={{marginLeft:'24%',}}>
        To activate savings, you need a Total Wine & More account. Sign in above or create an account to view your offers and save. Valid on 750ml or 1.5L Winery Direct wines. Excludes items with prices ending in 7. Cannot be combined with any other Total Wine & More discount. Good thru 8/6/2023.
        </Typography>
        <Button variant="outlined" style={{marginTop:'2%',marginRight:'35%',}}>Shop limited time special</Button>
        </div>
      </Grid>
    </Grid></>
    
  );
};












