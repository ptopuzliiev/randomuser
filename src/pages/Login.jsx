import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authAction } from '../redux/authReducer';
import ButtonMain from '../components/UI/Button';
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
      <ButtonMain onClick={login}>Log in</ButtonMain>
    </StyledButtonHolder>
  );
};

export default Login;
