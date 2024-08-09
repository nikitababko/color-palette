import { styled } from '@linaria/react';
import { MEDIA_QUERY_MAX_WIDTH_1279 } from '../../constants';

export const ColorButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;

  @media (max-width: ${MEDIA_QUERY_MAX_WIDTH_1279}px) {
    flex-direction: row;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;
