import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from '../redux/authReducer';
import Button from '../components/UI/Button';
import { StyledButtonHolder } from '../components/styles/ButtonHolder.styled';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(authAction(false));
    navigate('/login');
  };
  return (
    <StyledButtonHolder>
      <Button onClick={logOut}>Log out</Button>
    </StyledButtonHolder>
  );
};

export default Logout;
