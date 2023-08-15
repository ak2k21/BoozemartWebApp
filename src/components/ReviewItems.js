import React from 'react';
import { Paper, Typography, Rating } from '@mui/material';

const ReviewItems = () => {
  const reviews = [
    { name: 'John Doe', rating: 5, comment: 'Great product! I highly recommend it.' },
    { name: 'Jane Smith', rating: 4, comment: 'Good quality, but it could be cheaper.' },
    
  ];

  return (
    <div>
      <Typography variant="h4">Product Reviews</Typography>
      {reviews.map((review, index) => (
        <Paper key={index} style={{ padding: '10px', marginBottom: '10px' }}>
          <Typography variant="h6">{review.name}</Typography>
          <Rating name="rating" value={review.rating} readOnly />
          <Typography variant="body1">{review.comment}</Typography>
        </Paper>
      ))}
    </div>
  );
};

export default ReviewItems;
