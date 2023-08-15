

import React from 'react';
const ProductDetails = ({props} ) => {
  const tableStyle = {
    backgroundColor: '#f2f2f2',
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
    padding: '12px',
  };

  const tdLabelStyle = {
    textAlign: 'right',
    paddingRight: '12px',
    fontWeight: 'bold',
  };

  const linkStyle = {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2>{props.name}</h2>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={tdLabelStyle}>Type:</td>
            <td>{props.type}</td>
            <td style={tdLabelStyle}>Grape Varieties:</td>
            <td colSpan="3">{props.grapeVarieties.join(', ')}</td>
          </tr>
          <tr>
            <td style={tdLabelStyle}>Origin:</td>
            <td><a href={`https://example.com/wines/${props.origin}`} style={linkStyle} target="_blank" rel="noopener noreferrer">{props.origin}</a></td>
            <td style={tdLabelStyle}>Food Pairing:</td>
            <td colSpan="3">{props.foodPairing.join(', ')}</td>
          </tr>
          <tr>
            <td style={tdLabelStyle}>Vintage:</td>
            <td>{props.vintage}</td>
            <td style={tdLabelStyle}>Alcohol Content:</td>
            <td>{props.alcoholContent}</td>
          </tr>
         
          <tr>
            <td style={tdLabelStyle}>Price:</td>
            <td>{props.price}</td>
            <td style={tdLabelStyle}>Rating:</td>
            <td>{props.rating}</td>
          </tr>
         
          <tr>
            <td style={tdLabelStyle}>Description:</td>
            <td colSpan="4">{props.description}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default ProductDetails;
