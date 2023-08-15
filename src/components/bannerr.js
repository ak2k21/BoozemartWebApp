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
  display:flex;
  width: 150px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  cursor:pointer;
  padding-left:35%;
  margin-right :40%;
  
  

  &:hover {
    background-color:black;
  }

  &:active {
    background-color: black;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  bottom:50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`;

const Banner = (props) => {
  return (
    <BannerWrapper>
      <TextContainer>
        <p style={{paddingTop:'8%'}}><em>Degital Events cuopons</em></p>
        <BannerButton >SPECIAL OFFER'S</BannerButton>
      </TextContainer>
      <img src="
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3BoQe9ou5OCG7tvqBBNeojwHZy7ykAzMVs-y8awKh-jqlstRolh-rBzSPn71XIBGCIw&usqp=CAU" alt="Banner" />
    </BannerWrapper>
  );
};

export default Banner;