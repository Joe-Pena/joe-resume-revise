import React from 'react';
import Resume from '../../../assets/joe-resume.pdf';
import { Link } from '../../atoms';
import StyledMenu from './Menu.styled';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link className="nav-link" href="#about" onClick={() => setOpen(!open)}>
        ABOUT
      </Link>
      <Link
        className="nav-link"
        target="_blank"
        href="https://www.linkedin.com/in/joe-pena/"
        onClick={() => setOpen(!open)}
      >
        LINKEDIN
      </Link>
      <Link
        className="nav-link"
        target="_blank"
        href="https://github.com/Joe-Pena"
        onClick={() => setOpen(!open)}
      >
        GITHUB
      </Link>
      <Link
        className="nav-link"
        href="#projects"
        onClick={() => setOpen(!open)}
      >
        PROJECTS
      </Link>
      <Link
        className="nav-link"
        target="_blank"
        href={Resume}
        onClick={() => setOpen(!open)}
      >
        RESUME
      </Link>
    </StyledMenu>
  );
};

export default Menu;
