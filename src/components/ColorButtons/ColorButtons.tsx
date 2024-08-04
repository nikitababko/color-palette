import React from 'react';
import type { ColorButtonsProps } from './types';
import { ColorButtonsContainer } from './styles';
import { ColorButtonCopy } from '../ColorButtonCopy';
import { ColorButtonRemove } from '../ColorButtonRemove';
import { ColorButtonLock } from '../ColorButtonLock';

export const ColorButtons: React.FC<ColorButtonsProps> = ({
  color,
  colorsLength,
}) => {
  return (
    <ColorButtonsContainer>
      {colorsLength > 2 && (
        <ColorButtonRemove color={color} />
      )}

      <ColorButtonCopy color={color} />

      <ColorButtonLock color={color} />
    </ColorButtonsContainer>
  );
};
