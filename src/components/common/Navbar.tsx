import React, { useState } from "react";

import { NavbarLi, NavbarMain, NavbarSocialUl, NavbarUl, NavLogo } from "./Navbar.style";

import { BsSearch } from "react-icons/bs";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import logo from "./images/cropped-ibm-Copy (1).png";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [navbarSocials, setNavbarSocials] = useState([
    {
      icon: <FaFacebookF />,
      to: "/",
    },
    {
      icon: <FaInstagram />,
      to: "about",
    },
    {
      icon: <FaTwitter />,
      to: "events",
    },
    {
      icon: <FaYoutube />,
      to: "blog",
      
    },
  ]);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: any) => {
    setActiveIndex(index);
  };

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
          <NavLogo colorChange={colorChange}>
            <img style={{ width: "200px" }} src={logo} alt="" />
          </NavLogo>
        </h1>
        <div
          style={{
            flexGrow: "1",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {navbarItems.map((items: any, index) => (
            <NavbarUl key={index} colorChange={colorChange}>
              <NavbarLi
                colorChange={colorChange}
                to={items.to}
                className={index === activeIndex ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                {items.name}
              </NavbarLi>
              <li>{items.image}</li>
            </NavbarUl>
          ))}
        </div>
        {navbarSocials.map((items: any, index: any) => (
          <NavbarSocialUl key={index} colorChange={colorChange}>
            <NavbarLi
              colorChange={colorChange}
              to={items.to}
              
              onClick={() => handleClick(index)}
            >
              {items.icon}
            </NavbarLi>
            <li>{items.image}</li>
          </NavbarSocialUl>
        ))}

        <HamburgerMenu colorChange={colorChange} />
      </NavbarMain>
    </>
  );
}

export default Navbar;
