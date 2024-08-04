import React from 'react';
import { useSetAtom } from 'jotai';
import type { ColorButtonRemoveProps } from './types';
import { CrossIcon } from '../Icons';
import { RemoveIconWrapper } from './styles';
import { storeColors } from '../../store/store';

export const ColorButtonRemove: React.FC<
  ColorButtonRemoveProps
> = ({ color }) => {
  const setColors = useSetAtom(storeColors);

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
