import React from 'react';
import styled, { keyframes } from 'styled-components';
import Apple from '../assets/apple.png';
import Orange from '../assets/orange.png';
import Avocado from '../assets/avocado.png';
import Cherry from '../assets/cherry.png';

// Keyframes for sliding in from the left
const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Keyframes for sliding in from the right
const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const MenuContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 40px;
  height: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  font-family: 'Averia Serif Libre', serif;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; /* Further adjust for extra small screens */
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 3.9rem;
  flex-wrap: wrap; 
  margin-top: 40px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 2rem; /* Reduce gap for smaller screens */
  }

  @media (max-width: 480px) {
    gap: 1.5rem; /* Further reduce gap for extra small screens */
  }
`;

const Card = styled.div<{ animationType: 'left' | 'right' }>`
  background-color: #fff;
  border-radius: 28px;
  width: 240px;
  height: 65px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  position: relative;
  margin-bottom: 1.5rem;
  animation: ${({ animationType }) => animationType === 'left' ? slideInLeft : slideInRight} 0.8s ease-out forwards;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 200px; /* Adjust width for tablets */
    padding: 1rem;
  }

  @media (max-width: 480px) {
    width: 180px; /* Further adjust width for mobile screens */
    padding: 0.8rem;
  }
`;

const CardImage = styled.img`
  position: absolute;
  top: -30px;
  left: -10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    top: -25px; /* Adjust position for smaller screens */
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    top: -20px; /* Further adjust for mobile screens */
  }
`;

const CardTitle = styled.h2`
  font-size: 1.1rem;
  color: black;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Further adjust for mobile screens */
  }
`;

const Price = styled.p`
  font-size: 1rem;
  color: orange;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; /* Further adjust for mobile screens */
  }
`;

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <Heading>Our Menu</Heading>
      <CardsContainer>
        <Card animationType="left">
          <CardImage src={Apple} alt="Apple" />
          <CardTitle>Fresh Apples</CardTitle>
          <Price>$5.99</Price>
        </Card>
        <Card animationType="right">
          <CardImage src={Avocado} alt="Avocado" />
          <CardTitle>Fresh Avocado</CardTitle>
          <Price>$6.49</Price>
        </Card>
        <Card animationType="left">
          <CardImage src={Cherry} alt="Cherry" />
          <CardTitle>Fresh Cherry</CardTitle>
          <Price>$3.99</Price>
        </Card>
        <Card animationType="right">
          <CardImage src={Orange} alt="Orange" />
          <CardTitle>Fresh Oranges</CardTitle>
          <Price>$4.99</Price>
        </Card>
      </CardsContainer>
    </MenuContainer>
  );
};

export default Menu;
