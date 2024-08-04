import React from 'react';
import '../../global.styles';
import { ColorsWrapper } from '../ColorsWrapper';
import { AppContainer } from './styles';
import { Toolbar } from '../Toolbar/Toolbar';

export const App: React.FC = () => {
  return (
    <AppContainer>
      <Toolbar />

      <ColorsWrapper />
    </AppContainer>
  );
};
