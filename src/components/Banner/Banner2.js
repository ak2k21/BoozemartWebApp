
import Button from '@mui/material/Button';

import './Banner2.css';
import BasicButton from '../BasicButton';
function Banner2(props) {
    
  return (
    <div className='bannerContainer' >
        <div className='imageContainer'>
            <img  alt='image'/>

        </div>
        <div className='textButton'>
         {/* <button className='b1'></button>   */}
        <div className='b1'> <Button variant="contained">{props.text}</Button></div>
        </div>
                             
     </div>
                          
  );
}

export default Banner2;
