import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
  }
`;

const BannerButton = styled.b`
  display: block;
  width: 200px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003780;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`;

const Banner = (props) => {
  return (
    <BannerWrapper>
      <TextContainer>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <BannerButton href={props.buttonLink}>{props.buttonLabel}</BannerButton>
      </TextContainer>
      <img src={props.imageUrl} alt="Banner" />
    </BannerWrapper>
  );
};

export default Banner;