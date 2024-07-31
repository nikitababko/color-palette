import React from 'react';
import type { ColorButtonRemoveProps } from './types';
import { CrossIcon } from '../Icons';
import { RemoveIconWrapper } from './styles';

export const ColorButtonRemove: React.FC<
  ColorButtonRemoveProps
> = ({ color, setColors }) => {
  const handleRemove = () => {
    setColors((previousState) => {
      return previousState.filter((previousStateColor) => {
        return previousStateColor !== color;
      });
    });
  };

  return (
    <RemoveIconWrapper onClick={handleRemove}>
      <CrossIcon />
    </RemoveIconWrapper>
  );
};
