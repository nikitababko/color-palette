import { styled } from '@linaria/react';

export const CopyIconWrapper = styled.button`
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
  gap: 10px;
  padding: 10px;
  width: fit-content;
  border-radius: 8px;
  background-color: #222;
  color: #fff;
  font-size: 26px;
  animation: copyButtonMessageAnimation
    ${({ animationMs }) => animationMs}ms ease-in-out;
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
`;
