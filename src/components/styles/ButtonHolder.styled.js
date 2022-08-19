import styled from 'styled-components';

export const StyledButtonHolder = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  height: 100%;
`;
