import React from 'react';
import type { ColorButtonsProps } from './types';
import { ColorButtonsContainer } from './styles';
import { ColorButtonCopy } from '../ColorButtonCopy';
import { ColorButtonRemove } from '../ColorButtonRemove';
import { ColorButtonLock } from '../ColorButtonLock';
import { ColorButtonDrag } from '../ColorButtonDrag';

export const ColorButtons: React.FC<ColorButtonsProps> = ({
  color,
  colorsLength,
  dragListeners,
  dragAttributes,
}) => {
  return (
    <ColorButtonsContainer>
      {colorsLength > 2 && (
        <ColorButtonRemove color={color} />
      )}

      <ColorButtonCopy color={color} />

      <ColorButtonDrag
        dragListeners={dragListeners}
        dragAttributes={dragAttributes}
      />

      <ColorButtonLock color={color} />
    </ColorButtonsContainer>
  );
};
