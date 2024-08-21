import React from 'react';
import { useSetAtom } from 'jotai';
import { storeColors } from '../../store/store';
import { RepeatIcon } from '../Icons';
import { getRandomHexColor } from '../../helpers';
import { ToolbarGenerateButtonContainer } from './styled';

export const ToolbarGenerateButton: React.FC = () => {
  const setColors = useSetAtom(storeColors);

  const handleGenerate = () => {
    setColors((previousState) =>
      previousState.map((color) => {
        if (color.isLocked) {
          return color;
        }

        return {
          ...color,
          hex: getRandomHexColor(),
        };
      }),
    );
  };

  return (
    <ToolbarGenerateButtonContainer
      data-testid="ToolbarGenerateButtonContainer"
      onClick={handleGenerate}
    >
      <RepeatIcon />

      <span>Generate colors</span>
    </ToolbarGenerateButtonContainer>
  );
};
