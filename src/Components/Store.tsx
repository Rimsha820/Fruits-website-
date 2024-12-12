import React from 'react';
import styled, { keyframes } from 'styled-components';
import Fruit from '../assets/fruit-plate2.png';

// Animation for sliding in the text section from the left
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

// Animation for zooming in the image from the right
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

// Container for the Store component
const StoreContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

// Section for the text content
const TextSection = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 1rem 2rem;
  margin-left: 200px;
  animation: ${slideInLeft} 1s ease-out forwards;

  @media (max-width: 768px) {
    padding: 1rem 0;
    text-align: center;
    margin-left: 0;
  }
`;

// Heading for the Store
const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

// Dummy description text
const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Styling for the image
const Image = styled.img`
  flex: 1;
  max-width: 550px;
  height: auto;
  margin-right: 150px;
  border-radius: 10px;
  animation: ${zoomIn} 1s ease-out forwards;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
    margin-top: 1rem;
  }
`;

// Styling for the download button
const DownloadButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #d52c2c;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`;

// The Store component
const Store: React.FC = () => {
  return (
    <StoreContainer>
      <TextSection>
        <Heading>ONLINE <br />FRUIT STORE</Heading>
        <Description>
          Discover the freshest and finest quality fruits sourced directly from local farms. Our commitment to excellence ensures that you enjoy every bite.
        </Description>
        <Description>
          Shop with us and experience the difference. Thank you for choosing us as your trusted fruit supplier!
        </Description>
        <DownloadButton>Download App</DownloadButton>
      </TextSection>
      <Image src={Fruit} alt="Fruit Plate" />
    </StoreContainer>
  );
};

export default Store;
