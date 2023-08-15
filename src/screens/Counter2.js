import { Box, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import store from '../store/index';
import Axios  from 'axios';
import { incrementCart } from "../components/productTile/ProductActions";
import {decrementCart} from "../components/productTile/ProductActions";

import { commonActions } from '../store/commonStore'
const dispatch = store.dispatch
let commonStore = store.getState().commonStore
store.subscribe(function(){
    commonStore = store.getState().commonStore
})

export default function Counter2(props) {
  var pq=JSON.parse(JSON.stringify(props.quantity));
  const [count, setCount] = useState(pq);
  
  const incrementCount = () => {
    setCount(count + 1);
    // console.log(props,'8888888888');
    // console.log(commonStore.cart,'9999999999');
    console.log(`updated cart!`);
      incrementCart(props.productId);
  };

  const decrementCount = () => {
    if(count>1) setCount(count - 1);
    decrementCart(props.productId);
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