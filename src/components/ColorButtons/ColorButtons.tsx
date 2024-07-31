import React from 'react';
import type { ColorButtonsProps } from './types';
import { ColorButtonsContainer } from './styles';
import { ColorButtonCopy } from '../ColorButtonCopy';
import { ColorButtonRemove } from '../ColorButtonRemove';

export const ColorButtons: React.FC<ColorButtonsProps> = ({
  color,
  setColors,
  colorsLength,
}) => {
  return (
    <ColorButtonsContainer>
      {colorsLength > 2 && (
        <ColorButtonRemove
          color={color}
          setColors={setColors}
        />
      )}

      <ColorButtonCopy color={color} />
    </ColorButtonsContainer>
  );
};
