import React from 'react';
import { Link } from '../../atoms';
import './Footer.scss';
import Resume from '../../../assets/joe-resume2019.pdf';

const Footer = () => (
  <div className="footer">
    <h2>Let's get in touch!</h2>
    <div className="footer-links">
      <Link href="mailto:joepena@protonmail.com" target="_blank">
        joepena@protonmail.com
      </Link>
      <Link href="https://www.linkedin.com/in/joe-pena/" target="_blank">
        LinkedIn
      </Link>
      <Link href="https://github.com/Joe-Pena" target="_blank">
        Github
      </Link>
      <Link href={Resume} target="_blank">
        Resume
      </Link>
    </div>
    <p>
      joepena.io was made with React and Sass, following an Atomic design
      pattern.
    </p>
  </div>
);

export default Footer;
