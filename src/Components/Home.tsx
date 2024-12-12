import React from 'react';
import styled, { keyframes } from 'styled-components';
import fruit from '../assets/fruit-plate.png';

// Keyframes for the text animation
const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframes for the image animation
const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const MainSection = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: left; 
  
  @media (max-width: 768px) {
    flex-direction: column; 
    text-align: center; 
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
  margin-left: 170px;
  animation: ${fadeInSlideUp} 1s ease-out forwards; 
  
  @media (max-width: 768px) {
    padding-right: 0;
    margin-left: 0;
    margin-bottom: 50px;
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-family: 'Averia Serif Libre', serif;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Paragraph = styled.p`
  color: black;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  flex: 1;
  max-width: 37%;
  margin-right: 150px;
  margin-top: 40px;
  height: auto;
  border-radius: 8px;
  animation: ${zoomIn} 1s ease-out forwards; 

  @media (max-width: 768px) {
    max-width: 80%; 
    margin-right: 0;
    margin-top: 1rem; 
  }
`;

const OrderButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #d52c2c;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ff8c00;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Home: React.FC = () => {
  return (
    <MainSection>
      <TextContainer>
        <Title>Healthy <br/>Fresh <span style={{color:'orange'}}>Fruits!</span></Title>
        <Paragraph>Order Now for Fresh and Healthy Life.</Paragraph>
        <Description>Healthy and yummy fresh fruits for morning breakfast. Eat <br/>daily for good health and mind. Order now and everything at <br/>20% off on your first order. </Description>
        <OrderButton>Order Now</OrderButton>
      </TextContainer>
      <Image src={fruit} alt="Fruit Plate" />
    </MainSection>
  );
};

export default Home;
