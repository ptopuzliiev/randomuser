import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeaderItem } from '../styles/HeaderItem.styled';

const HeaderItem = ({ title, path }) => {
  return (
    <StyledHeaderItem>
      <NavLink className="btn btn-info text-white" to={path}>
        {title}
      </NavLink>
    </StyledHeaderItem>
  );
};

export default HeaderItem;
