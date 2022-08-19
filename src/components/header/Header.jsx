import React from 'react';
import HeaderList from './HeaderList';
import logo from '../../assets/images/logo.svg';
import { StyledHeader } from '../styles/Header.styled';
import { StyledLogo } from '../styles/Logo.styled';

const Header = ({ links }) => {
  return (
    <StyledHeader paddingTop="16px" paddingBottom="30px">
      <div className="container">
        <StyledLogo>
          <img src={logo} alt="logo" width={52} height={52} />
        </StyledLogo>
        <HeaderList menuLinks={links} />
      </div>
    </StyledHeader>
  );
};

export default Header;
