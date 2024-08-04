import React from 'react';
import { GenerateButton } from '../GenerateButton';
import { ToolbarContainer } from './styles';

export const Toolbar: React.FC = () => {
  return (
    <ToolbarContainer>
      <GenerateButton />
    </ToolbarContainer>
  );
};
