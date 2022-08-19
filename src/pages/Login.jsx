import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authAction } from '../redux/authReducer';
import Button from '../components/UI/Button';
import { StyledButtonHolder } from '../components/styles/ButtonHolder.styled';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = () => {
    dispatch(authAction(true));
    navigate('/users');
  };
  return (
    <StyledButtonHolder>
      <Button onClick={login}>Log in</Button>
    </StyledButtonHolder>
  );
};

export default Login;
