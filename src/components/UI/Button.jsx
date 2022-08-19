import React from 'react';
import { StyledButton } from '../styles/Button.styled';

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props} className="btn btn-info btn-lg text-white">
      {children}
    </StyledButton>
  );
};

export default Button;
