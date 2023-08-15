import './TextDiv.css'

function TextDiv(props) {
  return (
    <div className='textDiv2' style={{width:props.myWidth}}>
                              <div className='text'>
                                {props.text}
                              </div>
                              <div className='bar2'>

                              </div>
                              </div>
                          
  );
}

export default TextDiv;
