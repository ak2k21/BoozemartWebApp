import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
  return (
    <div style={props.style}>
      <Button style={{ 
        width: props.width, 
        backgroundColor:props.backgroundColor,
        color:props.color,
        fontFamily:props.fontfamily,
        fontsize:props.fontsize}}

      variant={props.variant}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      disabled={props.disabled}
      href={props.href}
      size={props.size}

      >
        {props.text}
      </Button>
    </div>
  );
}