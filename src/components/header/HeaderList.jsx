import React from 'react';
import HeaderItem from './HeaderItem';
import { StyledHeaderList } from '../styles/HeaderList.styled';

const HeaderList = ({ menuLinks }) => {
  return (
    <StyledHeaderList>
      {menuLinks &&
        menuLinks.map((link) => (
          <HeaderItem key={link.title} title={link.title} path={link.path} />
        ))}
    </StyledHeaderList>
  );
};

export default HeaderList;
