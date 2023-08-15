import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={props.sx} />
      </Container>
    </React.Fragment>
  );
}
