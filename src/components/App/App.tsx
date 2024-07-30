import React from 'react';
import '../../global.styles';
import { ColorsWrapper } from '../ColorsWrapper';
import { AppContainer } from './styles';

export const App: React.FC = () => {
  return (
    <AppContainer>
      <ColorsWrapper />
    </AppContainer>
  );
};
