import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from '../redux/authReducer';
import ButtonMain from '../components/UI/Button';
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
      <ButtonMain onClick={logOut}>Log out</ButtonMain>
    </StyledButtonHolder>
  );
};

export default Logout;
