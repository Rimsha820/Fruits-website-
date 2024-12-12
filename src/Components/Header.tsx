import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaLeaf } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: black;
  font-family: 'Poppins', sans-serif;
  position: relative;
  background-color: #fff; 
  margin-top:20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-left:100px;

  @media (max-width: 768px) {
    margin-left: 20px; 
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed; 
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 1rem;
    z-index: 1000;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 550;
  font-family: 'Poppins', sans-serif;
  margin-right: 20px;

  @media (max-width: 768px) {
    color: white;
    margin: 0.5rem 0;
    text-align: center;
  }

`;

const MenuIcon = styled(FaBars)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CartIcon = styled(GrCart)`
  font-size: 1.5rem;
  cursor: pointer;
  margin-right:100px;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <span style={{ color: 'red' }}>FRUIT</span>
        <span style={{ color: 'orange', marginLeft: '10px' }}>STORE</span>
        <FaLeaf style={{ color: 'green', marginLeft: '10px' }} />
      </Logo>
      <MenuIcon style={{marginRight:'10px'}}     onClick={toggleMenu} />
      <Nav isOpen={isOpen}>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#product">Product</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#shop">Shop</NavItem>
        <NavItem href="#contact">Contact</NavItem>
        <CartIcon /> 
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
