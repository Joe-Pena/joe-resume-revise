import React from 'react';
import { Link } from '../../atoms';
import Resume from '../../../assets/joe-resume.pdf';
import './NavLinks.scss';

const NavLinks = () => (
  <div className="nav-links">
    <Link className="nav-link" href="#about">
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
    <Link className="nav-link" href="#projects">
      PROJECTS
    </Link>{' '}
    &nbsp;&nbsp;
    <Link className="nav-link" target="_blank" href={Resume}>
      RESUME
    </Link>{' '}
    &nbsp;&nbsp;
  </div>
);

export default NavLinks;
