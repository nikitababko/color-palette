import React from 'react';
import type { ColorButtonsProps } from './types';
import { ColorButtonsContainer } from './styles';
import { ColorButtonCopy } from '../ColorButtonCopy';

export const ColorButtons: React.FC<ColorButtonsProps> = ({
  color,
}) => {
  return (
    <ColorButtonsContainer>
      <ColorButtonCopy color={color} />
    </ColorButtonsContainer>
  );
};
