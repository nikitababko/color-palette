import React from 'react';
import type { ColorButtonLockProps } from './types';
import { DragIcon } from '../Icons';
import { ColorButtonDragContainer } from './styles';

export const ColorButtonDrag: React.FC<
  ColorButtonLockProps
> = ({ dragListeners, dragAttributes }) => {
  return (
    <ColorButtonDragContainer
      {...dragListeners}
      {...dragAttributes}
    >
      <DragIcon />
    </ColorButtonDragContainer>
  );
};
