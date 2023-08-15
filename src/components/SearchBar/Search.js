import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    
      <TextField
        
        placeholder={props.placeholder}
        hiddenLabel
        value={searchTerm}
        type={props.type}
        onChange={handleChange}
        sx={props.sx}
        InputProps={{
          endAdornment: (
            <InputAdornment position={props.position}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
   
  );
}