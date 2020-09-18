import React from 'react';
import { Logo, Link } from '../../atoms';
import { NavLinks } from '../../molecules';
import { Hamburger, Menu } from '../../organisms';
import './Header.scss';

const Header = () => (
  <nav className="header">
    <Link className="link-logo" href="#welcome">
      <Logo />
    </Link>
    <Hamburger />
    <Menu />
    <NavLinks />
  </nav>
);

export default Header;
