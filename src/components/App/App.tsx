import React from 'react';
import '../../global.styles';
import { AppContainer } from './styles';
import { Toolbar } from '../Toolbar/Toolbar';
import { ColorsWrapper } from '../ColorsWrapper';

export const App: React.FC = () => (
  <AppContainer>
    <Toolbar />

    <ColorsWrapper />
  </AppContainer>
);
