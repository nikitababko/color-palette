import { styled } from '@linaria/react';

export const ToolbarGenerateButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: transparent;
  transition:
    color 300ms ease-in-out,
    background-color 300ms ease-in-out;

  svg {
    path {
      fill: #000;
      transition: fill 300ms ease-in-out;
    }
  }

  @media (hover: hover) {
    &:hover {
      color: #fff;
      background-color: #000;

      svg {
        path {
          fill: #fff;
        }
      }
    }
  }

  @media (max-width: 1279px) {
    svg {
      width: 55px;
      height: 55px;
    }

    font-size: 60px;
  }
`;
