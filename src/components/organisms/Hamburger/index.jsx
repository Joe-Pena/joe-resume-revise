import React from 'react';
import StyledHamburger from './Hamburger.styled';

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledHamburger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledHamburger>
  );
};

export default Hamburger;
