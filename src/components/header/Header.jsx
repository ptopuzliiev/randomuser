import { Container } from 'react-bootstrap';
import HeaderList from './HeaderList';
import logo from '../../assets/images/logo.svg';
import { StyledHeader } from '../styles/Header.styled';
import { StyledLogo } from '../styles/Logo.styled';

const Header = ({ links }) => {
  return (
    <StyledHeader>
      <Container>
        <StyledLogo to="/users">
          <img src={logo} alt="logo" width={52} height={52} />
        </StyledLogo>
        <HeaderList menuLinks={links} />
      </Container>
    </StyledHeader>
  );
};

export default Header;
