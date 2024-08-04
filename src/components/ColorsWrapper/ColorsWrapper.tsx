import React from 'react';
import { useAtomValue } from 'jotai';
import { ColorsContainer } from './styles';
import { Color } from '../Color';
import { storeColors } from '../../store/store';

export const ColorsWrapper: React.FC = () => {
  const colors = useAtomValue(storeColors);

  return (
    <ColorsContainer>
      {colors.map((color) => (
        <Color
          key={color}
          color={color}
          colorsLength={colors.length}
        />
      ))}
    </ColorsContainer>
  );
};
