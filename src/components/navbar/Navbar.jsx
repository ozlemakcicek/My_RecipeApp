import React from 'react'
import { Hamburger, Menu, MenuLink, Nav, Logo } from './NavbarStyles'

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/home">
        <i>Lecker</i> <span>recipe</span>
      </Logo>

      <Hamburger>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu>
        <MenuLink to="/about">About </MenuLink>
        <a href="https://github.com/ozlemakcicek">GitHub</a>
        <MenuLink to="/">Logout</MenuLink>
        
      </Menu>
    </Nav>
  );
}

export default Navbar