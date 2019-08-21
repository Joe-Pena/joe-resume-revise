import React from 'react';
import { Link } from '../../atoms';
import './NavLinks.scss';

const NavLinks = () => (
  <div className="nav-links">
    <Link className="nav-link" target="_blank" href="#">
      ABOUT
    </Link>{' '}
    &nbsp;&nbsp;
    <Link
      className="nav-link"
      target="_blank"
      href="https://www.linkedin.com/in/joe-pena/"
    >
      LINKEDIN
    </Link>{' '}
    &nbsp;&nbsp;
    <Link
      className="nav-link"
      target="_blank"
      href="https://github.com/Joe-Pena"
    >
      GITHUB
    </Link>{' '}
    &nbsp;&nbsp;
    <Link className="nav-link" target="_blank" href="#">
      PROJECTS
    </Link>{' '}
    &nbsp;&nbsp;
    <Link
      className="nav-link"
      target="_blank"
      href="../../assets/joe-resume2019.pdf"
    >
      RESUME
    </Link>{' '}
    &nbsp;&nbsp;
  </div>
);

export default NavLinks;
