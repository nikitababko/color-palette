import React from 'react';
import { ToolbarButtonContainer } from './styles';
import type { ToolbarButtonProps } from './types';

export const ToolbarButton: React.FC<
  ToolbarButtonProps
> = ({ leftSide, label, ...properties }) => {
  return (
    <ToolbarButtonContainer {...properties}>
      {leftSide}

      <span>{label}</span>
    </ToolbarButtonContainer>
  );
};
