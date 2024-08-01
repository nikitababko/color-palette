import React from 'react';
import { GenerateButton } from '../GenerateButton';
import type { ToolbarProps } from './types';

export const Toolbar: React.FC<ToolbarProps> = ({
  setColors,
}) => {
  return <GenerateButton setColors={setColors} />;
};
