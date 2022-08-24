import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCard = styled(Link)`
  cursor: pointer;
  transition: box-shadow 0.3s;
  background-color: ${(props) => props.background};
  box-shadow: ${(props) => props.boxShadow};
  color: #000;
  text-decoration: none;
  &:hover {
    box-shadow: 0 5px 20px rgb(0, 0, 0, 0.3);
    color: #000;
  }
`;
