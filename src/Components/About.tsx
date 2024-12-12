import React from 'react';
import styled, { keyframes } from 'styled-components';
import splash from '../assets/fruits-splash.png';

// Animation for sliding in from the left
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Animation for sliding in from the right
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Container for the About page content
const AboutContainer = styled.main`
  display: flex;
  flex-direction: row; 
  align-items: center;
  padding: 2rem;
  margin-top:50px;
  background-color: #f5f2dc;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  animation: ${slideInLeft} 0.7s ease-out;

  @media (max-width: 768px) {
    flex-direction: column; 
    padding: 1rem;
  }
`;

// Styling for the section containing text
const TextSection = styled.div`
  flex: 1;
  max-width: 800px;
  padding: 2rem;
  margin-left: 190px;
  animation: ${slideInRight} 0.7s ease-out;

  @media (max-width: 768px) {
    margin-left: 0; 
    padding: 1rem;
    text-align: center; 
  }
`;

// Styling for the heading
const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem; 
  }
`;

// Styling for the description text
const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  text-align: left;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem; 
    text-align: center; 
  }
`;

// Styling for the image
const Image = styled.img`
  flex: 1;
  max-width: 22%;
  height: auto;
  border-radius: 10px;
  margin-left: 250px;
  margin-top: 70px;
  animation: ${slideInLeft} 0.7s ease-out;

  @media (max-width: 768px) {
    max-width: 60%; 
    margin: 0 auto 20px; 
  }
`;

// Styling for the button
const LearnMoreButton = styled.button`
  margin-top: 1rem;
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
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Image src={splash} alt="Fruit Splash" />
      <TextSection>
        <Heading>BRAND INFO</Heading>
        <Description>
          Welcome to our fruit store! We are passionate about <br /> providing the freshest
          and most delicious fruits to our <br /> customers according to their needs.
        </Description>
        <Description>
          Thank you for choosing us as your trusted fruit supplier. <br /> We are dedicated
          to delivering.
        </Description>
        <LearnMoreButton>Learn More</LearnMoreButton>
      </TextSection>
    </AboutContainer>
  );
};

export default About;
