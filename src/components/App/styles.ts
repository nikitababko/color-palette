import { styled } from '@linaria/react';
import { MEDIA_QUERY_MAX_WIDTH_1279 } from '../../constants';

export const AppContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;

  @media (max-width: ${MEDIA_QUERY_MAX_WIDTH_1279}px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;
