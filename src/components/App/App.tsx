import React, { useState } from 'react';
import '../../global.styles';
import { ColorsWrapper } from '../ColorsWrapper';
import { AppContainer } from './styles';
import { Toolbar } from '../Toolbar/Toolbar';

export const App: React.FC = () => {
  const [colors, setColors] = useState([
    '#ABC4AB',
    '#A39171',
    '#DCC9B6',
    '#727D71',
    '#6D4C3D',
  ]);

  return (
    <AppContainer>
      <Toolbar setColors={setColors} />

      <ColorsWrapper
        colors={colors}
        setColors={setColors}
      />
    </AppContainer>
  );
};
