import React from 'react';
import { useSetAtom } from 'jotai';
import type { ColorButtonRemoveProps } from './types';
import { CrossIcon } from '../Icons';
import { ColorButtonRemoveContainer } from './styles';
import { storeColors } from '../../store/store';

export const ColorButtonRemove: React.FC<ColorButtonRemoveProps> = ({ color }) => {
  const setColors = useSetAtom(storeColors);

  const handleRemove = () => {
    setColors((previousState) =>
      previousState.filter((previousStateColor) => previousStateColor.id !== color.id),
    );
  };

  return (
    <ColorButtonRemoveContainer
      data-testid="ColorButtonRemoveContainer"
      onClick={handleRemove}
    >
      <CrossIcon />
    </ColorButtonRemoveContainer>
  );
};
