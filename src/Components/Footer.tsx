import React from 'react';
import styled, { keyframes } from 'styled-components';
import banner from '../assets/banner-bg.jpg';
import { FaLeaf, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

// Animation for sliding in the content from the left
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Container for the Dummy Component with a background image
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
  margin: 2rem auto;
  margin-top: 200px;
  max-width: 1300px;
  height: 600px;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  border-radius: 48px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 450px;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 480px) {
    height: 400px;
  }
`;

// Section for the content to position text on the right
const ContentSection = styled.div`
  max-width: 400px;
  padding: 2rem;
  border-radius: 8px;
  text-align: left;
  margin-right: 100px;
  animation: ${slideIn} 1s ease-out forwards; 

  @media (max-width: 1024px) {
    margin-right: 50px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`;

// Heading for the Dummy Component
const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

// Paragraph text
const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// A styled button for demonstration purposes
const Button = styled.button`
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
  }
`;

// Footer section styling
const FooterSection = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f5f2dc;
  color: black;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin: 0 auto;
  margin-top: 150px;
  max-width: 1800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

// Footer logo and text container
const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

// Logo styling
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-right: 10px;
  }
`;

// Footer text styling
const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

// Social media icons container
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  a {
    color: black;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #d52c2c;
    }
  }
`;

// Main component with footer
const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <ContentSection>
          <Heading>GET FRESH FRUITS TODAY</Heading>
          <Paragraph>
            Healthy and yummy fresh fruits for morning breakfast. Eat daily for good health and mind. Order now and get 20% off on your first order!
          </Paragraph>
          <Button>Order Now</Button>
        </ContentSection>
      </Container>
      <FooterSection>
        <FooterLeft>
          <Logo>
            <span style={{ color: 'red' }}>FRUIT</span>
            <span style={{ color: 'orange', marginLeft: '10px' }}>STORE</span>
            <FaLeaf style={{ color: 'green', marginLeft: '10px' }} />
          </Logo>
          <FooterText>© 2024 Fruit Store. All rights reserved.</FooterText>
        </FooterLeft>
        <SocialIcons>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://whatsapp.com" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </SocialIcons>
      </FooterSection>
    </>
  );
};

export default Footer;
