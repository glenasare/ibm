import React, { useState } from "react";

import {NavbarLi, NavbarMain, NavbarUl, NavLogo } from "./Navbar.style";

import { BsSearch } from "react-icons/bs";

import logo from './images/cropped-ibm-Copy (1).png'
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {

  const [openDrawer,setDrawer] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [navbarItems, setNavbarItems] = useState([
    {
      name: "Home",
      to: "/",
      active: true,
      
    },
    {
      name: "About us",
      to: "about",
      active: false,
      
    },
    {
      name: "Events",
      to: "events",
      active: false,
      
    },
    {
      name: "Blog",
      to: "blog",
      active: false,
     
    },
    {
      name: "Gallery",
      to: "gallery",
      active: false,
      
    },
    {
      name: "Contact",
      to: "contact",
      active: false,
      
    },
    {
      image: <BsSearch />,
      to: "image",
      style: {},
    },
  ]);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);



  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index:any) => {
    setActiveIndex(index);
  }


 
  return (
    <>
      <NavbarMain colorChange={colorChange}>
        <h1
          style={{
            flexGrow: "1",
            paddingLeft: "20px",
            flexDirection: "column",
          }}
        >
          {" "}
          <NavLogo colorChange={colorChange}><img src={logo} alt=""/></NavLogo>
        </h1>
        {navbarItems.map((items: any, index) => (
          <NavbarUl key={index} colorChange={colorChange}>
            <NavbarLi 
              colorChange={colorChange}
              to={items.to}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => handleClick(index)}
            >
              {items.name}
            </NavbarLi>
            <li>{items.image}</li>
            
          </NavbarUl>
        ))}
        <HamburgerMenu colorChange={colorChange}/>
        
      </NavbarMain>
    </>
  );
}

export default Navbar;
