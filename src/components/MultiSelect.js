import React from "react";
import { TextField, Autocomplete, MenuItem } from "@mui/material";
// import CheckIcon from "@mui/icons-material/Check";
const names = [
  "Humaira Sims",
  "Santiago Solis",
  "Dawid Floyd",
  "Mateo Barlow",
  "Samia Navarro",
  "Kaden Fields",
  "Genevieve Watkins",
  "Mariah Hickman",
  "Rocco Richardson",
  "Harris Glenn"
];
export default function MultiSelect(props) {
  return (
    <div style={props.style}>
    <Autocomplete
      sx={{ m: 1, width: 500 }}
      multiple
      options={names}
      getOptionLabel={(option) => option}
      disableCloseOnSelect
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Multiple Autocomplete"
          placeholder="Multiple Autocomplete"
        />
      )}
      renderOption={(props, option, { selected }) => (
        <MenuItem
        id={props.id}
          {...props}
          key={option}
          value={option}
          label={props.variant}
          variant={props.variant} 
            onChange={props.action}
          sx={{ justifyContent: "space-between" }}
        >
          {option}
          {selected }
          {/* {selected ? <CheckIcon color="info" /> : null} */}
        </MenuItem>
      )}
    />
    </div>
  );
}