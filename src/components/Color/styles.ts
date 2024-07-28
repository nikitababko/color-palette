import { styled } from "@linaria/react";

export const ColorContainer = styled.div<{ backgroundColor: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const ColorText = styled.p`
  font-size: 26px;
  cursor: pointer;
`

export const ColorPickerWrapper = styled.div`
  position: absolute;
  z-index: 2;
`
