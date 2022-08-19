import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: 3px dashed teal;
  animation: ${rotateAnimation} 5s infinite linear;
`;
