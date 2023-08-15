import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const rows = [
  { id: 1, name: 'John Doe', age: 25, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 32, city: 'Los Angeles' },
  
];

const tableCellStyle = {
  border: '1px solid #000', 
  fontWeight: 'bold',
};

const Tables = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={tableCellStyle}>ID</TableCell>
            <TableCell style={tableCellStyle}>Name</TableCell>
            <TableCell style={tableCellStyle}>Age</TableCell>
            <TableCell style={tableCellStyle}>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell style={tableCellStyle}>{row.id}</TableCell>
              <TableCell style={tableCellStyle}>{row.name}</TableCell>
              <TableCell style={tableCellStyle}>{row.age}</TableCell>
              <TableCell style={tableCellStyle}>{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
