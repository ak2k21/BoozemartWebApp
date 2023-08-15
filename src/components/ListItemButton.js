import React, { useState } from "react";
import { List } from '@mui/material';

import { ListItemText } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { Collapse } from "@mui/material";



function ListItemButtons(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
<div className="listitem">
            <List>
            <ListItemButton onClick={handleClick}>            
            <ListItemText primary={props.listitemheading} sx={{ fontSize:30 }}/>
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={props.listitem1} />
            </ListItemButton>
            </List>
            </Collapse>
            </List>   
            </div>
    );
}
export default ListItemButtons;