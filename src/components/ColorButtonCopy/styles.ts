import { styled } from '@linaria/react';
import { MEDIA_QUERY_MAX_WIDTH_1279 } from '../../constants';

export const ColorButtonCopyContainer = styled.button`
  cursor: copy;
  border: none;
  background-color: transparent;
`;

export const CopyButtonMessage = styled.div<{
  animationMs: number;
}>`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, 100%);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: fit-content;
  border-radius: 8px;
  background-color: #222;
  color: #fff;
  font-size: 26px;
  animation: copyButtonMessageAnimation ${({ animationMs }) => animationMs}ms ease-in-out;
  opacity: 0;
  visibility: hidden;

  @keyframes copyButtonMessageAnimation {
    10% {
      display: flex;
      transform: translate(-50%, -200%);
      opacity: 1;
      visibility: visible;
    }

    80% {
      opacity: 1;
      transform: translate(-50%, -200%);
    }

    100% {
      opacity: 0;
    }
  }

  @media (max-width: ${MEDIA_QUERY_MAX_WIDTH_1279}px) {
    width: 80%;
    font-size: 50px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;
