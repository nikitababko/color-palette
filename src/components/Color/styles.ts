import { styled } from '@linaria/react';

export const CircleAdd = styled.button<{ left: string }>`
  position: absolute;
  top: 50%;
  left: ${({ left }) => left};
  z-index: 1;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 300ms ease-in-out;
`;

export const ColorBar = styled.div<{
  left: number | string;
  right: number | string;
}>`
  position: absolute;
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  width: 46px;
  height: 100%;
  background-color: transparent;

  &:hover {
    ${CircleAdd} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const ColorContainer = styled.div<{
  backgroundColor: string;
  transition?: string;
  transform?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1;
  height: 100%;
  background-color: ${({ backgroundColor }) => {
    return backgroundColor;
  }};
  transition: ${({ transition }) => {
    return transition || 'none';
  }};
  transform: ${({ transform }) => {
    return transform || 'none';
  }};
`;

export const ColorText = styled.p`
  font-size: 26px;
  cursor: pointer;
`;

export const ColorPickerWrapper = styled.div`
  position: absolute;
  z-index: 2;
`;
