import styled from "styled-components";
import {Link} from 'react-scroll'

interface NavbarMain {
  colorChange: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const NavbarMain = styled.div<NavbarMain>`
  height: ${props => (props.colorChange ? '100px' : "90px")};
  background-color: ${props => (props.colorChange ? '#000' : 'transparent')};
  width: 100%;
  justify-content: center;
  align-content: center;
  display: flex;
  color: ${props => (props.colorChange ? '#fff' : "#fff")};
  top: ${props => (props.colorChange ? '0%' : "5%")};
  position: fixed;
  z-index:99;
  @media (min-width: 300px) and (max-width: 980px) {
    position: fixed;
    background-color: ${props => (props.colorChange ? '#000' : 'transparent')};
    
  }
  
`;
export const NavbarUl = styled.ul<NavbarMain>`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  justify-content: space-around;
  display: flex;
  padding-right: 20px;
  padding-top: ${props => (props.colorChange ? '0%' : "0%")};
  


    /* Styles for viewports wider than 500px
  @media (min-width: 500px) {
    display: none;
  } */

  /* Styles for viewports between 300px and 500px */
  @media (min-width: 300px) and (max-width: 1280px) {
    display: none;
  }


  
`;
export const NavbarSocialUl = styled.ul<NavbarMain>`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  justify-content: space-around;
  display: flex;
  padding-right: 20px;
  padding-top: ${props => (props.colorChange ? '1.7%' : "1.7%")};


    /* Styles for viewports wider than 500px
  @media (min-width: 500px) {
    display: none;
  } */

  /* Styles for viewports between 300px and 500px */
  @media (min-width: 300px) and (max-width: 1280px) {
    display: none;
  }


  
`;

export const NavLogo = styled.span <NavbarMain>`
  font-family: 'Caramel', cursive;
  color: ${props => (props.colorChange ? '#000' : "#000")};
`
export const MenuButton = styled.span <NavbarMain>`
   @media (min-width: 500px) {
    display: none;
  } 
  @media (min-width: 300px) and (max-width: 1280px) {
    display: flex;
    right:5%;
    padding-top: ${props => (props.colorChange ? '3%' : "3%")};
    width:100%;
    padding-right:0px;
  }

`
export const NavbarLi = styled(Link).attrs(props => ({
    className:props.className
})) <NavbarMain>`
    
  
  text-transform:uppercase;
  text-decoration:none;
  color: ${props => (props.colorChange ? '#fff' : "#fff")};
  font-family: 'Inter', sans-serif;
  
  &:hover {
    color: #EE9A14;
  }
  &.active {
    color: #EE9A14;
    font-size:20px;
    padding-top:20px;
    
  }

`;


