import styled from "styled-components";

export const NavbarMain = styled.nav`
  height: 90px;
  background-color: transparent;
  width: 100%;
  justify-content: center;
  align-content: center;
  display: flex;
  color:#fff;
  top:5%;
  position: fixed;
  z-index:99;
  
`;
export const NavbarUl = styled.ul`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  justify-content: space-around;
  display: flex;
  padding-right: 20px;
  
`;

export const NavbarLi = styled.li.attrs(props => ({
    className:props.className
}))`
    
  
  text-transform:uppercase;
  
  &:hover {
    color: #EE9A14;
  }
  &.active {
    color: #EE9A14;
    
  }

`;
export const NavLogo = styled.span`
  font-family: 'Caramel', cursive;
`