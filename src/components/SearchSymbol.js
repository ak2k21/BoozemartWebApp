import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
   
function SearchSymbol(props){
 
    return (
        <div className="SearchSymbol" style={props.style}>  
                <SearchIcon 
                fontSize={props.fontSize} 
                color={props.color} 
                baseClassName={props.baseClassName}
                variant={props.variant} 
                />
                
        </div>
      );
};
export default SearchSymbol;
