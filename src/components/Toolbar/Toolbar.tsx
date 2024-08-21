import React from 'react';
import { ToolbarGenerateButton } from '../ToolbarGenerateButton';
import { ToolbarContainer } from './styles';

export const Toolbar: React.FC = () => (
  <ToolbarContainer data-testid="ToolbarContainer">
    <ToolbarGenerateButton />
  </ToolbarContainer>
);
