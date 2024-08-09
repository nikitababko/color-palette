import { styled } from '@linaria/react';

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px 10px 0 10px;
  width: 100%;

  @media (max-width: 1279px) {
    justify-content: center;
    padding: 0 0 30px 0;
  }
`;
