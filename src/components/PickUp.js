import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BasicButtons from './BasicButton';

function createData(name, radio, button) {
  return { name, radio, button };
}

const rows = [
  createData('Pickup\r\n in stock\r\nSacramento', <input type='radio' name='option' />,
  <BasicButtons  
           // width="40%"
            variant="outlined" 
            disabled={false}                    
            text="NearbyStore"
            color="#147d6b"
            fontfamily="Serif"
            fontsize="2px"
  />),
  createData('Delivery | As fast as 2 hrs', <input type='radio'name='option'  />,
  <BasicButtons  
          //width="40%"
          variant="outlined" 
          disabled={false}                    
          text="Check Eligibility"
          color="#147d6b"
          fontfamily="Serif"
          fontsize="2px"
          size="small"
  />),
  createData('Ship To Spirits are not el', <input type='radio' name='option' />, 
  <BasicButtons  
          //width="40%"
          variant="outlined" 
          disabled={false}                    
          text="Change Location"
          color="#147d6b"
          fontfamily="Serif"
          fontsize="2px"
  />),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.radio}
                {row.name}
              </TableCell>
              <TableCell align="right">{row.button}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}