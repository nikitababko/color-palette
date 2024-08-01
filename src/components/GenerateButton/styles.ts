import { styled } from '@linaria/react';

export const GenerateButtonContainer = styled.button`
  width: fit-content;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: transparent;
  transition:
    color 300ms ease-in-out,
    background-color 300ms ease-in-out;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;
