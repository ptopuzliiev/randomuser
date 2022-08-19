import styled from 'styled-components';

export const StyledCard = styled.article`
  cursor: pointer;
  transition: box-shadow 0.3s;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) => props.boxShadow};
`;
