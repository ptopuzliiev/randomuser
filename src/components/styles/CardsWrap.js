import styled from 'styled-components';

export const StyledCardsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 16px;
  }
`;
