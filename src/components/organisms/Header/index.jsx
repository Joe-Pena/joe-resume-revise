import React from 'react';
import { Logo, Link } from '../../atoms';
import { NavLinks } from '../../molecules';
import './Header.scss';

const Header = () => (
  <nav className="header">
    <Link href="/">
      <Logo />
    </Link>
    <NavLinks />
  </nav>
);

export default Header;
