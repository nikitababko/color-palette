import React from 'react';
import { ToolbarGenerateButton } from '../ToolbarGenerateButton';
import { ToolbarContainer } from './styles';
import { ToolbarSaveButton } from '../ToolbarSaveButton';

export const Toolbar: React.FC = () => {
  return (
    <ToolbarContainer>
      <ToolbarGenerateButton />

      <ToolbarSaveButton />
    </ToolbarContainer>
  );
};
