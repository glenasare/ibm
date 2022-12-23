import React, { useState } from "react";

import { NavbarLi, NavbarMain, NavbarUl, NavLogo } from "./Navbar.style";

import { BsSearch } from "react-icons/bs";

function Navbar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [navbarItems, setNavbarItems] = useState([
    {
      name: "Home",
      id: "/",
      active: true,
      
    },
    {
      name: "About us",
      id: "about",
      active: false,
      
    },
    {
      name: "Events",
      id: "events",
      active: false,
      
    },
    {
      name: "Blog",
      id: "blog",
      active: false,
     
    },
    {
      name: "Gallery",
      id: "gallery",
      active: false,
      
    },
    {
      name: "Contact",
      id: "contact",
      active: false,
      
    },
    {
      image: <BsSearch />,
      id: "image",
      style: {},
    },
  ]);



  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index:any) => {
    setActiveIndex(index);
  }
  console.log(activeIndex)
  return (
    <>
      <NavbarMain>
        <h1
          style={{
            flexGrow: "1",
            paddingLeft: "20px",
            flexDirection: "column",
          }}
        >
          {" "}
          <NavLogo>I.B.M</NavLogo>
        </h1>
        {navbarItems.map((items: any, index) => (
          <NavbarUl key={index}>
            <NavbarLi
              id={items.id}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => handleClick(index)}
            >
              {items.name}
            </NavbarLi>
            <li>{items.image}</li>
          </NavbarUl>
        ))}
      </NavbarMain>
    </>
  );
}

export default Navbar;
