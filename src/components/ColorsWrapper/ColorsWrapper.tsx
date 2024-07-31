import React, { useState } from 'react';
import { ColorsContainer } from './styles';
import { Color } from '../Color';

export const ColorsWrapper: React.FC = () => {
  const [colors, setColors] = useState([
    '#ABC4AB',
    '#A39171',
    '#DCC9B6',
    '#727D71',
    '#6D4C3D',
  ]);

  return (
    <ColorsContainer>
      {colors.map((color) => (
        <Color
          key={color}
          color={color}
          setColors={setColors}
          colorsLength={colors.length}
        />
      ))}
    </ColorsContainer>
  );
};
