import { styled } from '@linaria/react';

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  @media (max-width: 1279px) {
    flex-direction: column;
  }
`;
