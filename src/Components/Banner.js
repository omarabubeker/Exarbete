import React from 'react';
import styled from 'styled-components';
import BannerImg from '../Assets/Frame.png';
import './../Fonts.css'

const BannerPic = styled.div`
  background-image: url(${BannerImg});
  background-size: cover;
  width: 100vw;
  height: 65vh;
  position: relative;
`;

const ContentBox = styled.div`
  width: 50vw;
  position: absolute;
  padding: 50px;
  z-index: 999;
  color: #ffffff;
  text-align: left;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 75vw;
  }
`;

const TextBox = styled.div`
font-family: 'MyCustomFont';
font-size: 2.8rem;
text-align: left;

@media (max-width: 800px) {
    font-size: 2rem;
  }
`;

const HashText = styled.div`
margin-top: 30px;
`

const CtaButton = styled.button`
cursor: pointer;
background-color: #E9FF5F;
width: 330px;
height: 45px;
border-radius: 8px;
border: none;
font-weight: 800;
font-size: 17px;
font-family: 'Inter';
margin-top: 30px;

&:hover {
  background-color: #D2E556;
}

@media (max-width: 800px) {
    width: 280px;
  }
`

const Banner = () => {
  return (
    <BannerPic>
      <ContentBox>
        <TextBox>Ge dina kläder ett nytt hem och tjäna samtidigt lite extra pengar!</TextBox>
        <HashText>#SecondhandFashion #HållbarShopping #Plick</HashText>
        <CtaButton>Kom igång!</CtaButton>
      </ContentBox>
    </BannerPic>
  );
};

export default Banner;
