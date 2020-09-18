import React from 'react';
import Resume from '../../../assets/joe-resume.pdf';
import { Link } from '../../atoms';
import './Menu.scss';

const Menu = () => {
  return (
    <nav className="side-menu">
      <Link className="nav-link" href="#about">
        ABOUT
      </Link>
      <Link
        className="nav-link"
        target="_blank"
        href="https://www.linkedin.com/in/joe-pena/"
      >
        LINKEDIN
      </Link>
      <Link
        className="nav-link"
        target="_blank"
        href="https://github.com/Joe-Pena"
      >
        GITHUB
      </Link>
      <Link className="nav-link" href="#projects">
        PROJECTS
      </Link>
      <Link className="nav-link" target="_blank" href={Resume}>
        RESUME
      </Link>
    </nav>
  );
};

export default Menu;
