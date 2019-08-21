import React from 'react';
import { Link } from '../../atoms';
import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <h3>Want to get in touch?</h3>
    <Link>joepena@protonmail.com</Link>
    <Link>LinkedIn</Link>
    <Link>Github</Link>
    <Link>Resume</Link>
  </div>
);

export default Footer;
