import TextField from '@mui/material/TextField';


function TextInput(props) {
  const changeHandler = (event) => {
    // props.action(event.target.value);
  }
  
  const style={
    style1:{
      background:'blue'
    }
  }
  
  return (
    <div className="TextInput" style={{...style.style1,...props.style}}>
        <TextField 
            id={props.variant+"-basic"} 
            label={props.variant} 
            variant={props.variant} 
            value={props.value}
            placeholder={props.placeholder}
            onChange={(event) => {
              changeHandler(event)
            }}
         />
    </div>
  );
}

export default TextInput;
