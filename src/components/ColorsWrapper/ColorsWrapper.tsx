import React from 'react';
import { ColorsContainer } from './styles';
import { Color } from '../Color';
import type { ColorsWrapperProps } from './types';

export const ColorsWrapper: React.FC<
  ColorsWrapperProps
> = ({ colors, setColors }) => {
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
