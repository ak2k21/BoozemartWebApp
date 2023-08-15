import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import './footer.css'
import BasicButtons from "./BasicButton";

export default function Footer() {
  return (
    <div>
      <Box
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
      >
        <Container maxWidth="lg">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaS7sU13Y25DjjmSCeX_Neln3oQRs2S402nvLdlGxiRf-zfB_YvWpRlT9GmCl0qq1DvPA&usqp=CAU" class="booz"></img>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Our company
          </Link><br></br>
          <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          >
            community impact
          </Link><br></br>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
          Social resposibility
          </Link><br></br>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
          Career
          </Link><br></br>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
          for the media
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
              <Typography variant="body2" color="text.secondary">
                We providing the best service.
              </Typography>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Mon.-Sun.: 9 a.m. - 12 a.m. ET 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: Boozemart@info.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h1>Get Apps </h1>
            <BasicButtons text="Create account" variant="standard" btnstyle={{color: "#FFF", backgroundColor: '#d32a2a'}} onClick={()=>{alert("Creatie Account")}}/>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://www.google.com/search?q=booze+mart&oq=booze&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxiKBTIGCAAQRRg5MgkIARAjGCcYigUyDwgCEC4YQxjHARjRAxiKBTIJCAMQABhDGIoFMgoIBBAAGLEDGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDE4OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
            <hr></hr>
            <Typography variant="body2" color="text.secondary">
            Visit ID:+1 987 6554-000
              </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
}