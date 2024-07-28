import { styled } from "@linaria/react";

export const ColorContainer = styled.div<{ backgroundColor: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
`

export const ColorText = styled.p`
  font-size: 26px;
`

export const ColorPickerWrapper = styled.div`
  position: absolute;
  z-index: 2;
`
