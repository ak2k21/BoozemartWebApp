import React from 'react';
import './HorizontalMeterSmall.css'; // You'll create this CSS file to style the meter
import star from './star.png'
const HorizontalMeterSmall = (props) => {
  const percentage = (props.StarUsers / props.totalUsers) * 100 || 0;

  return (
    <div className='container-meter'>
     <div className='starNum'>{props.star}</div><div className='imgStar'> <img src={star} alt='rating' width={15} height={10}></img></div>
      <div className="horizontal-meter">
      <div className="horizontal-meter-fill" style={{ width: `${percentage}%` }} />
    </div>
    <div className='starUserNum'>{props.StarUsers} users</div>
    </div>
  );
};

export default HorizontalMeterSmall;
