import React from 'react';
import HorizontalMeter from './HorizontalMeter';

const StarBox = (props) => {
  // For example purposes, use state to simulate changing values
  const [totalUsers, setTotalUsers] = React.useState(props.TotalUsers);
  const [StarUsers, setStarUsers] = React.useState(props.StarUsers);

  return (
    <div>
     
     
      <HorizontalMeter totalUsers={totalUsers} StarUsers={StarUsers} star={props.star}/>

      
    </div>
  );
};

export default StarBox;
