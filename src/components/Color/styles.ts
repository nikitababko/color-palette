import { styled } from '@linaria/react';
import { MEDIA_QUERY_MAX_WIDTH_1279 } from '../../constants';

export const CircleAdd = styled.button<{
  top: string;
  left: string;
}>`
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

  @media (max-width: ${MEDIA_QUERY_MAX_WIDTH_1279}px) {
    left: 50%;
    transform: translateX(-50%);
    top: ${({ top }) => top};
  }
`;

export const ColorBar = styled.div<{
  top: number | string;
  right: number | string;
  bottom: number | string;
  left: number | string;
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

  @media (max-width: ${MEDIA_QUERY_MAX_WIDTH_1279}px) {
    top: ${({ top }) => top};
    right: auto;
    bottom: ${({ bottom }) => bottom};
    left: auto;
    width: 100%;
    height: 46px;
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
  padding: 4px;
  background-color: ${({ backgroundColor }) => {
    return backgroundColor;
  }};
  transition: ${({ transition }) => {
    return transition || 'none';
  }};
  transform: ${({ transform }) => {
    return transform || 'none';
  }};

  @media (max-width: ${MEDIA_QUERY_MAX_WIDTH_1279}px) {
    padding: 10px;
  }
`;

export const ColorText = styled.p`
  font-size: 26px;
  cursor: pointer;

  @media (max-width: ${MEDIA_QUERY_MAX_WIDTH_1279}px) {
    font-size: 40px;
  }
`;

export const ColorPickerWrapper = styled.div`
  position: absolute;
  z-index: 2;
`;
