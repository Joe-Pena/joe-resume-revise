import React, { useState } from 'react';
import { Logo, Link } from '../../atoms';
import { NavLinks } from '../../molecules';
import { Hamburger, Menu } from '../../organisms';
import './Header.scss';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="header">
      <Link className="link-logo" href="#welcome">
        <Logo />
      </Link>
      <Hamburger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <NavLinks />
    </nav>
  );
};

export default Header;
