import { Box, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '10%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(-1, 2),
    },
  }));
  return (
    <div>

      <div>
        <ButtonGroup variant={props.variant} >
          <Button onClick={decrementCount}>  -  </Button>
          <Button>{count}</Button>
          <Button onClick={incrementCount}>  +  </Button>
        </ButtonGroup>
      </div>

    </div>
  );
}