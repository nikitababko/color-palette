import React from 'react';
import { useSetAtom } from 'jotai';
import { storeColors } from '../../store/store';
import { RepeatIcon } from '../Icons';
import { ToolbarButton } from '../ToolbarButton';
import { getRandomHexColor } from '../../helpers';

export const ToolbarGenerateButton: React.FC = () => {
  const setColors = useSetAtom(storeColors);

  const handleGenerate = () => {
    setColors((previousState) => {
      return previousState.map((color) => {
        if (color.isLocked) {
          return color;
        }

        return {
          ...color,
          hex: getRandomHexColor(),
        };
      });
    });
  };

  return (
    <ToolbarButton
      onClick={handleGenerate}
      leftSide={<RepeatIcon />}
      label="Generate colors"
    />
  );
};
