import React from 'react';
import type { ColorButtonLockProps } from './types';
import { DragIcon } from '../Icons';
import { ColorButtonDragContainer } from './styles';

export const ColorButtonDrag: React.FC<ColorButtonLockProps> = ({
  dragListeners,
  dragAttributes,
}) => (
  <ColorButtonDragContainer
    data-testid="color-button-drag"
    {...dragListeners}
    {...dragAttributes}
  >
    <DragIcon />
  </ColorButtonDragContainer>
);
